@echo off
echo 🎂 Деплоймент сайту БЕЗ Git
echo.

echo 📦 Створюємо збірку...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Помилка при збірці!
    pause
    exit /b 1
)

echo ✅ Збірка готова!
echo.

echo 🚀 Відкриваємо сервіси для деплойменту...
echo.

echo [1] Netlify (рекомендується) - форми працюють автоматично
echo [2] Vercel - найшвидший
echo [3] Surge.sh - командний рядок
echo [4] Переглянути папку dist
echo.

set /p choice="Виберіть сервіс (1-4): "

if "%choice%"=="1" (
    echo 🌐 Відкриваємо Netlify...
    start https://app.netlify.com/drop
    start explorer dist
    echo.
    echo 📂 ІНСТРУКЦІЯ:
    echo 1. Перетягніть папку 'dist' на сторінку Netlify
    echo 2. Дочекайтесь завершення завантаження
    echo 3. Отримаєте посилання типу: yoursite.netlify.app
    echo 4. Готово! Поділіться посиланням з гостями
) else if "%choice%"=="2" (
    echo ⚡ Відкриваємо Vercel...
    start https://vercel.com/new
    start explorer dist
    echo.
    echo 📂 ІНСТРУКЦІЯ:
    echo 1. Зареєструйтесь на Vercel
    echo 2. Перетягніть папку 'dist' на сторінку
    echo 3. Отримаєте посилання типу: yoursite.vercel.app
) else if "%choice%"=="3" (
    echo 🌊 Для Surge потрібен командний рядок...
    echo Встановіть Git спочатку або використайте Netlify
    start https://git-scm.com/download/win
) else if "%choice%"=="4" (
    echo 📁 Відкриваємо папку dist...
    start explorer dist
    echo.
    echo Ця папка містить готовий сайт для деплойменту
) else (
    echo ❌ Невірний вибір
)

echo.
echo 💡 Поради:
echo - Netlify: форма RSVP працює автоматично
echo - Vercel: найшвидше завантаження
echo - Після деплойменту поділіться посиланням з гостями
echo.
echo 🎉 Успіхів!
pause