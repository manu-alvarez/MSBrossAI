import os
import re

index_path = "/Users/manu/Desktop/MSBrossAI/www/index.html"
with open(index_path, "r") as f:
    index_content = f.read()

# Find all cards: <a href="/app-name/" class="app-card" style="--card-accent: #hex; ...">
card_pattern = re.compile(r'<a href="/([^/]+)/" class="app-card" style="[^"]*--card-accent:\s*(#[0-9a-fA-F]{6});')
cards = card_pattern.findall(index_content)

for app_name, portal_color in cards:
    app_index = f"/Users/manu/Desktop/MSBrossAI/www/{app_name}/index.html"
    if os.path.exists(app_index):
        with open(app_index, "r") as f:
            app_content = f.read()
        
        # Find --accent: #hex; in the app index
        accent_pattern = re.search(r'--accent:\s*(#[0-9a-fA-F]{6})', app_content)
        if accent_pattern:
            app_color = accent_pattern.group(1)
            if portal_color.lower() != app_color.lower():
                print(f"Mismatch in {app_name}: Portal={portal_color}, App={app_color}")
        else:
            print(f"No --accent found in {app_name}")
