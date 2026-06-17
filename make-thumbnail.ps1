Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.IO.Compression.FileSystem

$W = 1200; $H = 630; $PAD = 84; $TITLE_SZ = 110; $SUB_SZ = 25; $FOOT_SZ = 14

# ── Palette ─────────────────────────────────────────────────────────────
$BG        = [System.Drawing.Color]::FromArgb(226, 242, 252)   # #E2F2FC
$INK       = [System.Drawing.Color]::FromArgb( 26,  21,  18)   # #1a1512
$ACCENT    = [System.Drawing.Color]::FromArgb( 37,  91, 126)   # #255B7E
$INK_SOFT  = [System.Drawing.Color]::FromArgb( 91,  83,  73)   # #5b5349
$LINE      = [System.Drawing.Color]::FromArgb(194, 221, 237)   # #c2dded
$INK_FAINT = [System.Drawing.Color]::FromArgb(140, 138, 129, 116)

# ── Font: try Libertinus Serif from GitHub release, fall back to Georgia ─
$fontDir = "$env:TEMP\r101fonts"; if (-not (Test-Path $fontDir)) { New-Item -ItemType Directory -Path $fontDir | Out-Null }
$regPath = "$fontDir\LibertinusSerif-Regular.otf"
$itPath  = "$fontDir\LibertinusSerif-Italic.otf"
$pfc     = $null
$usePrivate = $false

if (-not ((Test-Path $regPath) -and (Test-Path $itPath))) {
    Write-Host "Downloading Libertinus Serif..."
    try {
        $zip = "$fontDir\Lib.zip"
        Invoke-WebRequest "https://github.com/alerque/libertinus/releases/download/v7.040/Libertinus-7.040.zip" `
            -OutFile $zip -UseBasicParsing -TimeoutSec 120
        $za = [System.IO.Compression.ZipFile]::OpenRead($zip)
        $re = $za.Entries | Where-Object { $_.Name -match "LibertinusSerif-Regular\.(otf|ttf)$" } | Select-Object -First 1
        $ie = $za.Entries | Where-Object { $_.Name -match "LibertinusSerif-Italic\.(otf|ttf)$"  } | Select-Object -First 1
        if ($re -and $ie) {
            [System.IO.Compression.ZipFileExtensions]::ExtractToFile($re, $regPath, $true)
            [System.IO.Compression.ZipFileExtensions]::ExtractToFile($ie, $itPath,  $true)
        }
        $za.Dispose(); Remove-Item $zip -Force
        Write-Host "  downloaded OK"
    } catch { Write-Host "  download failed, using Georgia" }
}

if ((Test-Path $regPath) -and (Test-Path $itPath)) {
    $pfc = New-Object System.Drawing.Text.PrivateFontCollection
    $pfc.AddFontFile($regPath)
    $pfc.AddFontFile($itPath)
    $usePrivate = $true
    Write-Host "Using Libertinus Serif"
} else {
    Write-Host "Using Georgia"
}

function make-font($size, $style) {
    if ($usePrivate) {
        return New-Object System.Drawing.Font($pfc.Families[0], $size, $style, [System.Drawing.GraphicsUnit]::Pixel)
    } else {
        return New-Object System.Drawing.Font("Georgia", $size, $style, [System.Drawing.GraphicsUnit]::Pixel)
    }
}

$fReg  = make-font $TITLE_SZ ([System.Drawing.FontStyle]::Regular)
$fIt   = make-font $TITLE_SZ ([System.Drawing.FontStyle]::Italic)
$fSub  = make-font $SUB_SZ   ([System.Drawing.FontStyle]::Regular)
$fFoot = make-font $FOOT_SZ  ([System.Drawing.FontStyle]::Regular)

# ── Canvas ───────────────────────────────────────────────────────────────
$bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
$g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear($BG)

# ── Scan grid (subtle, 46px cell matching the site) ──────────────────────
$gPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(10, 26, 21, 18))
for ($x = 0; $x -le $W; $x += 46) { $g.DrawLine($gPen, $x, 0, $x, $H) }
for ($y = 0; $y -le $H; $y += 46) { $g.DrawLine($gPen, 0, $y, $W, $y) }
$gPen.Dispose()


# ── String format (tight, no internal padding) ────────────────────────────
$sfmt = [System.Drawing.StringFormat]::GenericTypographic
$sfmt.FormatFlags = [System.Drawing.StringFormatFlags]::NoWrap -bor [System.Drawing.StringFormatFlags]::NoClip

# ── Measure title ─────────────────────────────────────────────────────────
$aText = "Radiology"
$bText = " 101"
$aSize = $g.MeasureString($aText, $fReg, [System.Drawing.PointF]::Empty, $sfmt)
$bSize = $g.MeasureString($bText, $fIt,  [System.Drawing.PointF]::Empty, $sfmt)
$titleH = [Math]::Max($aSize.Height, $bSize.Height)

# ── Subtitle ──────────────────────────────────────────────────────────────
$sub1 = "A three part series on how medical imaging works in America:"
$sub2 = "what it costs, where it strains, and what it feels like to be scanned."
$s1sz = $g.MeasureString($sub1, $fSub, [System.Drawing.PointF]::Empty, $sfmt)
$subH = $s1sz.Height

# ── Vertical block layout ─────────────────────────────────────────────────
$RULE_GAP = 22; $SUB_GAP = 22; $LINE_GAP = [int]($subH * 0.40)
$totalH   = $titleH + $RULE_GAP + 1 + $SUB_GAP + $subH + $LINE_GAP + $subH
$y0       = [int](($H - $totalH) / 2) - 12   # slightly above true center

# ── Draw title ────────────────────────────────────────────────────────────
$g.DrawString($aText, $fReg, (New-Object System.Drawing.SolidBrush($INK)),    [float]$PAD,                 [float]$y0, $sfmt)
$g.DrawString($bText, $fIt,  (New-Object System.Drawing.SolidBrush($ACCENT)), [float]($PAD + $aSize.Width), [float]$y0, $sfmt)

# ── Rule ──────────────────────────────────────────────────────────────────
$ruleY = [int]($y0 + $titleH + $RULE_GAP)
$g.DrawLine((New-Object System.Drawing.Pen($LINE)), $PAD, $ruleY, ($W - $PAD), $ruleY)

# ── Subtitle ──────────────────────────────────────────────────────────────
$sy = $ruleY + 1 + $SUB_GAP
$sb = New-Object System.Drawing.SolidBrush($INK_SOFT)
$g.DrawString($sub1, $fSub, $sb, [float]$PAD, [float]$sy,                    $sfmt)
$g.DrawString($sub2, $fSub, $sb, [float]$PAD, [float]($sy + $subH + $LINE_GAP), $sfmt)

# ── Footer attribution ────────────────────────────────────────────────────
$footText = "openradiology  /  goinvo.com"
$fsz      = $g.MeasureString($footText, $fFoot, [System.Drawing.PointF]::Empty, $sfmt)
$g.DrawString($footText, $fFoot, (New-Object System.Drawing.SolidBrush($INK_FAINT)),
    [float]($W - $PAD - $fsz.Width), [float]($H - 34), $sfmt)

# ── Save ──────────────────────────────────────────────────────────────────
$out = "C:\Users\Alexandra\Documents\GitHub\openradiology\thumbnail-image.png"
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose(); $bmp.Dispose()
if ($pfc) { $pfc.Dispose() }

Write-Host "OK: thumbnail-image.png  $($W)x$($H)"
