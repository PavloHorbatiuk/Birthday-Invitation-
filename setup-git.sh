#!/bin/bash

echo "🔧 Налаштування Git репозиторію..."
echo

# Перевіряємо чи встановлений Git
if ! command -v git &> /dev/null; then
    echo "❌ Git не встановлений!"
    echo
    echo "📥 Встановіть Git:"
    echo "macOS: brew install git"
    echo "Ubuntu/Debian: sudo apt install git"
    echo "CentOS/RHEL: sudo yum install git"
    echo
    exit 1
fi

echo "✅ Git знайдено!"
echo

# Ініціалізуємо репозиторій
if [ ! -d ".git" ]; then
    echo "📁 Ініціалізуємо Git репозиторій..."
    git init
    echo
else
    echo "📁 Git репозиторій вже існує"
    echo
fi

# Налаштовуємо основну гілку
git branch -M main 2>/dev/null || true

# Додаємо файли
echo "📦 Додаємо файли до репозиторію..."
git add .
echo

# Створюємо перший коміт
echo "💬 Створюємо перший коміт..."
git commit -m "🎂 Initial commit: Birthday invitation website

- React сайт-запрошення на день народження
- Анімації та інтерактивні елементи  
- RSVP форма для гостей
- Адаптивний дизайн
- Система фотографій з оптимізацією"

if [ $? -eq 0 ]; then
    echo "✅ Коміт створено успішно!"
else
    echo "⚠️ Можливо, немає змін для коміту"
fi

echo
echo "🌐 Наступні кроки:"
echo "1. Створіть репозиторій на GitHub: https://github.com/new"
echo "2. Додайте remote: git remote add origin URL_ВАШОГО_РЕПОЗИТОРІЮ"
echo "3. Відправте код: git push -u origin main"
echo

echo "🚀 Або використайте швидкий деплоймент:"
echo "- ./deploy.sh (з автоматичним GitHub)"
echo "- Drag & Drop на Netlify/Vercel"
echo

read -p "Відкрити GitHub для створення репозиторію? (y/n): " open_github
if [[ $open_github =~ ^[Yy]$ ]]; then
    if command -v open &> /dev/null; then
        open https://github.com/new
    elif command -v xdg-open &> /dev/null; then
        xdg-open https://github.com/new
    else
        echo "Відкрийте: https://github.com/new"
    fi
fi

echo
echo "🎉 Git налаштовано! Тепер можна використовувати версіонування."