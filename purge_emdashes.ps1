$path = "c:\Users\Jake\OneDrive\Desktop\AntiGravityPortfolioSite"
$extensions = @(".vue", ".ts", ".js", ".html", ".txt", ".md", ".json")
$scanDirs = @("src", "public")
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

foreach ($dir in $scanDirs) {
    $fullDir = Join-Path $path $dir
    if (Test-Path $fullDir) {
        Get-ChildItem -Path $fullDir -Recurse | Where-Object { $extensions -contains $_.Extension } | ForEach-Object {
            $file = $_
            try {
                $content = [System.IO.File]::ReadAllText($file.FullName, $utf8NoBom)
                if ($content -match '—') {
                    # Replace em-dash with space-hyphen-space
                    $newContent = $content -replace '—', ' - '
                    # Normalize double spaces created around the hyphen
                    $newContent = $newContent -replace '  - ', ' - '
                    $newContent = $newContent -replace ' -  ', ' - '
                    [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)
                    Write-Host "Fixed: $($file.Name)"
                }
            } catch {
                Write-Host "Error processing $($file.Name): $_"
            }
        }
    }
}
