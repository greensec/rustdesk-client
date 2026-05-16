#!/usr/bin/env python3

from __future__ import annotations

import argparse
import pathlib
import re
import sys


def rust_string(value: str) -> str:
    return value.strip().replace("\\", "\\\\").replace('"', '\\"')


def replace_one(path: pathlib.Path, pattern: str, replacement: str, label: str) -> None:
    text = path.read_text(encoding="utf-8")

    new_text, count = re.subn(
        pattern,
        replacement,
        text,
        flags=re.MULTILINE | re.DOTALL,
    )

    if count != 1:
        raise RuntimeError(
            f"Expected to replace exactly one occurrence of {label} in {path}, "
            f"but replaced {count}."
        )

    path.write_text(new_text, encoding="utf-8")
    print(f"Updated {label}")


def replace_optional(path: pathlib.Path, patterns: list[tuple[str, str, str]], value_name: str) -> bool:
    text = path.read_text(encoding="utf-8")

    for pattern, replacement, label in patterns:
        new_text, count = re.subn(
            pattern,
            replacement,
            text,
            flags=re.MULTILINE | re.DOTALL,
        )

        if count == 1:
            path.write_text(new_text, encoding="utf-8")
            print(f"Updated {label}")
            return True

        if count > 1:
            raise RuntimeError(
                f"Expected zero or one occurrence of {label} in {path}, "
                f"but found/replaced {count}."
            )

    print(
        f"{value_name} was provided, but no known matching constant was found. "
        "This may be okay for this RustDesk version."
    )
    return False


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-dir", required=True)
    parser.add_argument("--host", required=True)
    parser.add_argument("--key", required=True)
    parser.add_argument("--relay", default="")
    parser.add_argument("--api", default="")
    args = parser.parse_args()

    source_dir = pathlib.Path(args.source_dir).resolve()
    config_file = source_dir / "libs" / "hbb_common" / "src" / "config.rs"

    if not config_file.exists():
        print(f"Config file not found: {config_file}", file=sys.stderr)
        return 1

    host = rust_string(args.host)
    key = rust_string(args.key)
    relay = rust_string(args.relay)
    api = rust_string(args.api)

    if not host:
        print("Missing --host", file=sys.stderr)
        return 1

    if not key:
        print("Missing --key", file=sys.stderr)
        return 1

    replace_one(
        config_file,
        r'pub\s+const\s+RENDEZVOUS_SERVERS\s*:\s*&\s*\[\s*&str\s*\]\s*=\s*&\s*\[.*?\]\s*;',
        f'pub const RENDEZVOUS_SERVERS: &[&str] = &["{host}"];',
        "RENDEZVOUS_SERVERS",
    )

    replace_one(
        config_file,
        r'pub\s+const\s+RS_PUB_KEY\s*:\s*&str\s*=\s*".*?"\s*;',
        f'pub const RS_PUB_KEY: &str = "{key}";',
        "RS_PUB_KEY",
    )

    if relay:
        replace_optional(
            config_file,
            [
                (
                    r'pub\s+const\s+RELAY_SERVERS\s*:\s*&\s*\[\s*&str\s*\]\s*=\s*&\s*\[.*?\]\s*;',
                    f'pub const RELAY_SERVERS: &[&str] = &["{relay}"];',
                    "RELAY_SERVERS",
                ),
                (
                    r'pub\s+const\s+RELAY_SERVER\s*:\s*&str\s*=\s*".*?"\s*;',
                    f'pub const RELAY_SERVER: &str = "{relay}";',
                    "RELAY_SERVER",
                ),
            ],
            "Relay server",
        )

    if api:
        replace_optional(
            config_file,
            [
                (
                    r'pub\s+const\s+API_SERVER\s*:\s*&str\s*=\s*".*?"\s*;',
                    f'pub const API_SERVER: &str = "{api}";',
                    "API_SERVER",
                ),
                (
                    r'pub\s+const\s+API_SERVERS\s*:\s*&\s*\[\s*&str\s*\]\s*=\s*&\s*\[.*?\]\s*;',
                    f'pub const API_SERVERS: &[&str] = &["{api}"];',
                    "API_SERVERS",
                ),
                (
                    r'pub\s+const\s+DEFAULT_API_SERVER\s*:\s*&str\s*=\s*".*?"\s*;',
                    f'pub const DEFAULT_API_SERVER: &str = "{api}";',
                    "DEFAULT_API_SERVER",
                ),
            ],
            "API server",
        )

    print("Self-hosted RustDesk config injection finished.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())