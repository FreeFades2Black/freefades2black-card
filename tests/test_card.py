import subprocess
import json
import os

CARD_BIN = os.path.join(os.path.dirname(__file__), "..", "bin", "card.js")


def test_card_cli_execution():
    assert os.path.exists(CARD_BIN)
    res = subprocess.run(
        ["node", CARD_BIN, "--no-interactive"],
        capture_output=True,
        encoding="utf-8",
        errors="replace",
    )
    assert res.returncode == 0
    assert 'WILLIAM "FREE" HALL' in res.stdout
    assert "Principal Cloud & AI Architect" in res.stdout


def test_card_json_mode():
    res = subprocess.run(
        ["node", CARD_BIN, "--json"],
        capture_output=True,
        encoding="utf-8",
        errors="replace",
    )
    assert res.returncode == 0
    data = json.loads(res.stdout)
    assert data["handle"] == "FreeFades2Black"
    assert "Special Forces" in data["military"]
    assert data["phone"] == "(910) 584-3843"


def test_card_interactive_sections():
    for flag in ("--summary", "--education", "--stack"):
        res = subprocess.run(
            ["node", CARD_BIN, flag, "--no-interactive"],
            capture_output=True,
            encoding="utf-8",
            errors="replace",
        )
        assert res.returncode == 0
        assert len(res.stdout.strip()) > 50
