import os
import glob
from PIL import Image

def optimize_images():
    img_dir = 'public/images'
    src_dir = 'src'
    public_html = 'public/index.html'

    max_size = 1200
    files_to_convert = []

    for ext in ['*.png', '*.jpg', '*.jpeg', '*.webp']:
        for path in glob.glob(os.path.join(img_dir, ext)):
            filename = os.path.basename(path)
            # Skip logo to avoid breaking external favicon/meta references, and skip docx
            if filename.startswith('logo') or path.endswith('.docx') or path.endswith('.webp'):
                continue
            files_to_convert.append(path)

    replacements = {}

    for path in files_to_convert:
        filename = os.path.basename(path)
        name, ext = os.path.splitext(filename)
        new_filename = name + '.webp'
        new_path = os.path.join(img_dir, new_filename)

        try:
            with Image.open(path) as img:
                # Convert to RGB if necessary (e.g., for some PNGs with transparency issues, though webp supports RGBA)
                if img.mode not in ('RGB', 'RGBA'):
                    img = img.convert('RGBA')

                # Resize if too large
                if img.width > max_size or img.height > max_size:
                    img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                
                img.save(new_path, 'webp', quality=80)
            
            print(f"Converted {filename} to {new_filename}")
            
            # Record for replacement
            replacements[filename] = new_filename
            
            # Delete original
            os.remove(path)
        except Exception as e:
            print(f"Failed to convert {path}: {e}")

    # Search and replace in source code
    files_to_scan = glob.glob(os.path.join(src_dir, '**', '*.*'), recursive=True)
    files_to_scan.append(public_html)

    for filepath in files_to_scan:
        if not os.path.isfile(filepath):
            continue
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old_name, new_name in replacements.items():
                new_content = new_content.replace(old_name, new_name)
                
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated references in {filepath}")
        except Exception as e:
            pass

if __name__ == '__main__':
    optimize_images()
