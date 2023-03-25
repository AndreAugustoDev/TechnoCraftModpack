Write-Host "Updating client side mods" -ForegroundColor Yellow
echo ""
cd ./client
packwiz update --all
packwiz refresh
echo ""
Write-Host "Updating server side mods" -ForegroundColor Yellow
echo ""
cd ../server
packwiz update --all
packwiz refresh
cd ..
echo ""
Write-Host "Update finished" -ForegroundColor Green