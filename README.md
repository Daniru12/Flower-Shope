
# 🧩 Next.js Project

This is a modern **Next.js 13+ project** using the **App Router**, with support for **Tailwind CSS**, favicon integration, and a clean component-based structure.

---

## 🚀 Features

- ✅ Next.js 13+ App Router
- 🎨 Tailwind CSS for styling
- 🧱 Modular folder structure (`components/`, `contact/`, `About/`, `Shops/`)
- 🌐 Favicon integration via `/public/favicon.ico`
- 📁 Organized under `src/app/` layout convention

---

## 🏁 Getting Started

### 1. **Clone the repo**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

### 2. **Install dependencies**

```bash
npm install
```

or if you're using Yarn:

```bash
yarn install
```

### 3. **Run the development server**

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Folder Structure Overview

```
frontend/
├── public/               # Static files (favicon, images)
├── src/
│   └── app/
│       ├── layout.js     # Root layout
│       ├── page.jsx      # Home page
│       ├── components/   # Reusable components
│       ├── contact/      # Contact page route
│       ├── About/        # About page route
│       ├── Shops/        # Shop-related pages
│       ├── favicon.ico   # Browser tab icon
│       └── globals.css   # Global Tailwind styles
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.mjs    # PostCSS setup
└── package.json          # Project metadata
```

---

## 🎨 Styling

Tailwind CSS is used for utility-first styling. Global styles are defined in:

```bash
src/app/globals.css
```

To update styles, edit this file or apply utility classes directly in JSX.

---

## 🌐 Favicon Setup

The `favicon.ico` is placed in:

```bash
src/app/favicon.ico
```

Ensure it's linked in `layout.js` using the `<head>` tag:

```jsx
import Head from 'next/head';

export const metadata = {
  title: "Your Website Title",
  description: "Your site description",
  icons: {
    icon: '/favicon.ico',
  },
};
```

Or manually:

```jsx
<Head>
  <link rel="icon" href="/favicon.ico" />
</Head>
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)

```

