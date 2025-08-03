@echo off
echo 🎂 Підготовка сайту до деплойменту...
echo.

echo 📦 Створюємо оптимізовану збірку...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Помилка при збірці проекту!
    pause
    exit /b 1
)

echo ✅ Збірка готова!
echo.

echo 📁 Папка для деплойменту: dist/
echo.

echo 🚀 Виберіть сервіс для деплойменту:
echo [1] Netlify Drag ^& Drop (рекомендується)
echo [2] Vercel
echo [3] GitHub Pages
echo [4] Переглянути інструкції
echo.

set /p choice="Введіть номер (1-4): "

if "%choice%"=="1" (
    echo 🌐 Відкриваємо Netlify...
    start https://app.netlify.com/drop
    echo.
    echo 📂 Перетягніть папку 'dist' на сторінку Netlify
) else if "%choice%"=="2" (
    echo ⚡ Відкриваємо Vercel...
    start https://vercel.com/new
    echo.
    echo 📂 Перетягніть папку 'dist' на сторінку Vercel
) else if "%choice%"=="3" (
    echo 📂 Відкриваємо GitHub...
    start https://github.com/new
    echo.
    echo 📝 Створіть новий репозиторій та завантажте файли
) else if "%choice%"=="4" (
    echo 📖 Відкриваємо інструкції...
    start quick-deploy.html
) else (
    echo ❌ Невірний вибір
)

echo.
echo 🎉 Успіхів з деплойментом!
pause