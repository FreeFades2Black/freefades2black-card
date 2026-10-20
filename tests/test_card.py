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
    assert "FREEFADES2BLACK" in res.stdout
    assert "Solutions Architect" in res.stdout


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
    assert "18Z / 18F" in data["military"]
    assert "competencies" in data
    assert "experience" in data


def test_card_interactive_sections():
    for section in ("1", "2", "4"):
        res = subprocess.run(
            ["node", CARD_BIN, "--section", section],
            capture_output=True,
            encoding="utf-8",
            errors="replace",
        )
        assert res.returncode == 0
        assert "===" in res.stdout
