#!/usr/bin/env python3
"""
Profile picture processor - removes background and optimizes for portfolio
"""
import base64
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import io

# Create public folder if it doesn't exist
Path("public").mkdir(exist_ok=True)

# Read the image from attachment (base64 encoded or direct file)
# For this demo, we'll create a placeholder that will be replaced with actual image

def process_profile_image(input_path, output_path="public/profile.png"):
    """Process profile image for portfolio"""
    try:
        # Try importing rembg for background removal
        try:
            from rembg import remove
            print("🎨 Removing background with AI...")
            input_img = Image.open(input_path)
            output = remove(input_img)
            print("✅ Background removed!")
        except:
            # Fallback: just use the image as is
            print("⚠️ Using image without background removal")
            output = Image.open(input_path).convert("RGBA")
        
        # Resize to optimal size (320x320 for web)
        output = output.resize((320, 320), Image.Resampling.LANCZOS)
        
        # Add subtle rounded corners effect by creating a mask
        size = output.size
        mask = Image.new('L', size, 0)
        draw = ImageDraw.Draw(mask)
        draw.rounded_rectangle([(0, 0), size], radius=30, fill=255)
        output.putalpha(mask)
        
        # Save as PNG with transparency
        output.save(output_path, "PNG", optimize=True)
        print(f"✅ Profile image saved to {output_path}")
        print(f"📏 Size: {output.size}")
        return True
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    # This will be called with the image file
    print("🚀 Processing your profile picture...")
    print("This will remove background and optimize for your portfolio")
