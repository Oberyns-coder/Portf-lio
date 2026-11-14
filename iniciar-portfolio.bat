@echo off
set "PATH=C:\Users\bruno\AppData\Local\Programs\nodejs;%PATH%"
cd /d "%~dp0"
echo Iniciando servidor local do Portfolio...
npm.cmd run dev -- --open
pause
