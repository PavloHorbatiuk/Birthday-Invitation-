# 🚀 Інструкція з деплойменту сайту

## 🎯 Рекомендований спосіб: Netlify

### Підготовка проекту

1. **Створіть оптимізовану збірку:**
```bash
npm run build
```

### Спосіб 1: Простий drag & drop (найшвидший)

1. Відкрийте https://netlify.com
2. Зареєструйтесь безкоштовно
3. Перетягніть папку `dist` на сторінку Netlify
4. Готово! Ваш сайт онлайн за 30 секунд

### Спосіб 2: Через GitHub (автооновлення)

1. **Створіть GitHub репозиторій:**
   - Відкрийте https://github.com
   - Натисніть "New repository"
   - Назвіть його "birthday-invitation"
   - Зробіть його публічним

2. **Завантажте код на GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - birthday invitation site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-invitation.git
git push -u origin main
```

3. **Підключіть до Netlify:**
   - Увійдіть на https://netlify.com
   - Натисніть "New site from Git"
   - Виберіть GitHub
   - Виберіть ваш репозиторій
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Натисніть Deploy

4. **Налаштуйте custom domain (опціонально):**
   - У Netlify перейдіть в Site settings
   - Domain management
   - Додайте свій домен або використовуйте безкоштовний .netlify.app

---

## 🏃‍♂️ Альтернативні сервіси

### Vercel (дуже швидкий)

1. Відкрийте https://vercel.com
2. Зареєструйтесь через GitHub
3. Імпортуйте проект
4. Налаштування:
   - Framework: React
   - Build Command: `npm run build`
   - Output Directory: `dist`

### GitHub Pages (надійний)

1. У вашому репозиторії на GitHub:
2. Settings → Pages
3. Source: GitHub Actions
4. Створіть файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v1
        with:
          folder: dist
```

### Surge.sh (для статичних сайтів)

```bash
npm install -g surge
npm run build
cd dist
surge
```

---

## ⚡ Оптимізація швидкості

### Перед деплойментом:

1. **Оптимізуйте зображення:**
   - Всі фото через TinyPNG
   - Розмір < 200KB кожне

2. **Мінімізуйте код:**
```bash
npm run build
```

3. **Перевірте розмір збірки:**
```bash
npm run preview
```

### Після деплойменту:

1. **Тестування швидкості:**
   - https://pagespeed.web.dev
   - https://gtmetrix.com

2. **Налаштуйте кешування:**
   - У Netlify це відбувається автоматично
   - Headers автоматично оптимізовані

---

## 🎯 Рекомендації по сервісах

| Сервіс | Швидкість | Простота | Функції | Ліміти |
|--------|-----------|----------|---------|--------|
| **Netlify** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 100GB/міс |
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 100GB/міс |
| **GitHub Pages** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | 1GB/міс |
| **Surge.sh** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | Без лімітів |

### 🏆 Наша рекомендація: **Netlify**

**Чому Netlify найкращий для вашого проекту:**
- Форми RSVP працюватимуть без додаткового коду
- CDN забезпечить швидке завантаження по всьому світу
- Автоматичні SSL сертифікати
- Легкі оновлення через Git

---

## 🔧 Налаштування форми RSVP для Netlify

У файлі `src/components/RSVPSection.jsx` додайте атрибути Netlify:

```jsx
<form
  name="rsvp"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="rsvp" />
  {/* ваші поля форми */}
</form>
```

Тоді заявки RSVP будуть приходити прямо в адмін-панель Netlify!

---

## 📞 Підтримка

Якщо виникнуть проблеми з деплойментом - звертайтесь, допоможу налаштувати! 🚀✨