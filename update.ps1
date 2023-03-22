Write-Host "Updating client side mods" -ForegroundColor Yellow
echo ""
cd ./client
packwiz update --all
echo ""
Write-Host "Updating server side mods" -ForegroundColor Yellow
echo ""
cd ../server
packwiz update --all
cd ..
echo ""
Write-Host "Update finished" -ForegroundColor Green