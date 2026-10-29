@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js 22 or later, then reopen this file.
  echo Download: https://nodejs.org/
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo Installing website dependencies. This requires internet access...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed. See the error above and check your internet connection.
    pause
    exit /b 1
  )
)
echo Starting the KWE development server...
call npm run dev
pause
