@echo off
echo 🔧 Налаштування Git репозиторію...
echo.

REM Перевіряємо чи встановлений Git
git --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Git не встановлений!
    echo.
    echo 📥 Завантажте Git з: https://git-scm.com/download/win
    echo.
    echo Після встановлення Git запустіть цей скрипт знову.
    start https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✅ Git знайдено!
echo.

REM Ініціалізуємо репозиторій
if not exist .git (
    echo 📁 Ініціалізуємо Git репозиторій...
    git init
    echo.
) else (
    echo 📁 Git репозиторій вже існує
    echo.
)

REM Додаємо файли
echo 📦 Додаємо файли до репозиторію...
git add .
echo.

REM Створюємо перший коміт
echo 💬 Створюємо перший коміт...
git commit -m "🎂 Initial commit: Birthday invitation website

- React сайт-запрошення на день народження
- Анімації та інтерактивні елементи  
- RSVP форма для гостей
- Адаптивний дизайн
- Система фотографій з оптимізацією"

if %ERRORLEVEL% EQU 0 (
    echo ✅ Коміт створено успішно!
) else (
    echo ⚠️ Можливо, немає змін для коміту
)

echo.
echo 🌐 Наступні кроки:
echo 1. Створіть репозиторій на GitHub: https://github.com/new
echo 2. Додайте remote: git remote add origin URL_ВАШОГО_РЕПОЗИТОРІЮ
echo 3. Відправте код: git push -u origin main
echo.

echo 🚀 Або використайте швидкий деплоймент:
echo - deploy.bat (з автоматичним GitHub)
echo - deploy-no-git.bat (тільки Drag & Drop)
echo.

set /p open_github="Відкрити GitHub для створення репозиторію? (y/n): "
if /i "%open_github%"=="y" (
    start https://github.com/new
)

echo.
echo 🎉 Git налаштовано! Тепер можна використовувати версіонування.
pause