$path = "c:\Users\Jake\OneDrive\Desktop\AntiGravityPortfolioSite"
$extensions = @(".vue", ".ts", ".js", ".html", ".txt", ".md", ".json")
$scanDirs = @("src", "public")
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$emDash = [char]0x2014
$enDash = [char]0x2013

foreach ($dir in $scanDirs) {
    $fullDir = Join-Path $path $dir
    if (Test-Path $fullDir) {
        Get-ChildItem -Path $fullDir -Recurse | Where-Object { $extensions -contains $_.Extension } | ForEach-Object {
            $file = $_
            try {
                $content = [System.IO.File]::ReadAllText($file.FullName, $utf8NoBom)
                $modified = $false
                
                if ($content.IndexOf($emDash) -ge 0) {
                    $content = $content.Replace($emDash, '-') # Simple hyphen replacement to avoid double space issues, context specific
                    # Wait, simple hyphen might be safer if I control spacing. 
                    # If it was "word—word", "word-word" (compound). 
                    # If "word — word", "word - word". This preserves spacing structure mostly.
                    # But user said "remove all".
                    # Let's use ' - ' and fix double spaces.
                    
                    # Actually, Replace matches literal char.
                    # Let's go back to regex for spacing fix.
                }
                
                # Re-do with regex using the char
                if ($content -match $emDash) {
                     $content = $content -replace $emDash, ' - '
                     $content = $content -replace ' {2,}- {2,}', ' - '
                     $content = $content -replace ' {2,}-', ' -'
                     $content = $content -replace '- {2,}', '- '
                     $modified = $true
                }
                
                if ($modified) {
                    [System.IO.File]::WriteAllText($file.FullName, $content, $utf8NoBom)
                    Write-Host "Fixed: $($file.Name)"
                }
            } catch {
                Write-Host "Error processing $($file.Name): $_"
            }
        }
    }
}
