@echo off
git add .
for /f "tokens=*" %%i in ('powershell -command "Get-Date -Format \"yyyy-MM-dd HH:mm:ss\""') do set dt=%%i
git commit -m "%dt%"
git push
