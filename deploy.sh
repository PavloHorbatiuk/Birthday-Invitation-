#!/bin/bash

echo "🎂 Підготовка сайту до деплойменту..."
echo

echo "📦 Створюємо оптимізовану збірку..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Помилка при збірці проекту!"
    exit 1
fi

echo "✅ Збірка готова!"
echo

echo "📁 Папка для деплойменту: dist/"
echo

echo "🚀 Виберіть сервіс для деплойменту:"
echo "[1] Netlify Drag & Drop (рекомендується)"
echo "[2] Vercel"  
echo "[3] GitHub Pages"
echo "[4] Переглянути інструкції"
echo

read -p "Введіть номер (1-4): " choice

case $choice in
    1)
        echo "🌐 Відкриваємо Netlify..."
        if command -v open &> /dev/null; then
            open https://app.netlify.com/drop
        elif command -v xdg-open &> /dev/null; then
            xdg-open https://app.netlify.com/drop
        else
            echo "Відкрийте: https://app.netlify.com/drop"
        fi
        echo
        echo "📂 Перетягніть папку 'dist' на сторінку Netlify"
        ;;
    2)
        echo "⚡ Відкриваємо Vercel..."
        if command -v open &> /dev/null; then
            open https://vercel.com/new
        elif command -v xdg-open &> /dev/null; then
            xdg-open https://vercel.com/new
        else
            echo "Відкрийте: https://vercel.com/new"
        fi
        echo
        echo "📂 Перетягніть папку 'dist' на сторінку Vercel"
        ;;
    3)
        echo "📂 Відкриваємо GitHub..."
        if command -v open &> /dev/null; then
            open https://github.com/new
        elif command -v xdg-open &> /dev/null; then
            xdg-open https://github.com/new
        else
            echo "Відкрийте: https://github.com/new"
        fi
        echo
        echo "📝 Створіть новий репозиторій та завантажте файли"
        ;;
    4)
        echo "📖 Відкриваємо інструкції..."
        if command -v open &> /dev/null; then
            open quick-deploy.html
        elif command -v xdg-open &> /dev/null; then
            xdg-open quick-deploy.html
        else
            echo "Відкрийте файл: quick-deploy.html"
        fi
        ;;
    *)
        echo "❌ Невірний вибір"
        ;;
esac

echo
echo "🎉 Успіхів з деплойментом!"