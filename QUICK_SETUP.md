# Quick Setup - Copy Images

## One-Command Setup

### PowerShell (Recommended)

```powershell
# Navigate to your project
cd "c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio"

# Copy all project images
Copy-Item "C:\Users\sxrlx\Videos\portfolio\my-portfolio\public\*.jpg" `
  -Destination "public\" -Force

Copy-Item "C:\Users\sxrlx\Videos\portfolio\my-portfolio\public\*.jpeg" `
  -Destination "public\" -Force

Copy-Item "C:\Users\sxrlx\Videos\portfolio\my-portfolio\public\*.png" `
  -Destination "public\" -Force

# Copy icons folder
Copy-Item "C:\Users\sxrlx\Videos\portfolio\my-portfolio\public\icons" `
  -Destination "public\" -Recurse -Force
```

### Or All at Once

```powershell
$source = "C:\Users\sxrlx\Videos\portfolio\my-portfolio\public"
$dest = "c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public"

# Copy all images and icons
Get-ChildItem $source -Include ("*.jpg","*.jpeg","*.png") | ForEach-Object {
  Copy-Item $_.FullName -Destination $dest -Force
}

Copy-Item "$source\icons" -Destination "$dest\" -Recurse -Force
```

## Manual Setup (Windows Explorer)

1. **Open File Explorer**
   - Window 1: `C:\Users\sxrlx\Videos\portfolio\my-portfolio\public`
   - Window 2: `c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public`

2. **Copy Images**
   - Select: `hdfc.jpg`, `ccs.png`, `aryalogo.png`, `rhpatel.jpg`, `hotel.jpg`, `port.png`, `dog.png`, `portfolio.png`
   - Drag to Window 2

3. **Copy Icons**
   - Copy the entire `icons` folder from Window 1
   - Paste into Window 2

## Verify Installation

After copying, run this command to verify files exist:

```powershell
$public = "c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public"

# Check images
Get-ChildItem $public -Include ("*.jpg","*.jpeg","*.png") | Select-Object Name | Sort-Object

# Check icons
Get-ChildItem "$public\icons" | Measure-Object | Select-Object Count
```

Expected output:
- 12 image files (jpg, jpeg, png)
- ~50 icon files in icons folder

## Run the App

```bash
npm run dev
```

Visit: `http://localhost:5173`

## Expected Result

✅ Petals falling with enhanced animation
✅ Project cards showing images
✅ Smooth hover effects on projects
✅ Responsive butterfly button
✅ Icons ready for skill display

Enjoy! 🌸🦋
