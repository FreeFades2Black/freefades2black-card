import subprocess
import json
import os

def test_card_cli_execution():
    p = os.path.join(os.path.dirname(__file__), "..", "bin", "card.js")
    assert os.path.exists(p)
    res = subprocess.run(["node", p], capture_output=True, encoding="utf-8", errors="replace")
    assert res.returncode == 0
    assert "FREEFADES2BLACK" in res.stdout
    assert "Solutions Architect" in res.stdout

def test_card_json_mode():
    p = os.path.join(os.path.dirname(__file__), "..", "bin", "card.js")
    res = subprocess.run(["node", p, "--json"], capture_output=True, encoding="utf-8", errors="replace")
    assert res.returncode == 0
    data = json.loads(res.stdout)
    assert data["handle"] == "FreeFades2Black"
    assert "18Z / 18F" in data["military"]
