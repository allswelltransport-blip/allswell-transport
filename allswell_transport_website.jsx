# Allswell Transport Website (Vite + React) - Deploy Ready

This is a complete, Vercel-ready setup for your website.

---

## 1. package.json
```json
{
  "name": "allswell-transport",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}
```

---

## 2. vite.config.js
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});
```

---

## 3. index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Allswell Transport Pte Ltd</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 4. src/main.jsx
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 5. src/App.jsx
```jsx
import { motion } from "framer-motion";
import { Truck, Shield, Clock, MapPin } from "lucide-react";

export default function App() {
  const whatsapp = "https://wa.me/6597513276";

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* NAV */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <div className="font-semibold tracking-wide">
          ALLSWELL TRANSPORT
        </div>
        <a href={whatsapp} className="bg-white text-black px-4 py-2 rounded-full text-sm">
          WhatsApp
        </a>
      </div>

      {/* HERO */}
      <section className="text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-semibold"
        >
          Keeping Operations <br /> Moving Around the Clock
        </motion.h1>

        <p className="mt-6 text-white/70 max-w-xl mx-auto">
          Premium transport solutions for airport operations, corporate teams,
          and businesses across Singapore — 24/7.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href={whatsapp} className="bg-white text-black px-6 py-3 rounded-full">
            Contact Us
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16">
        <h2 className="text-2xl text-center mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "Airport Staff Transport",
            "Midnight Staff Transport",
            "Corporate Transport",
            "Event Transport",
            "Ad-hoc Transport",
            "Contract Operations"
          ].map((s) => (
            <div key={s} className="border border-white/10 p-6 rounded-xl bg-white/5">
              <Truck className="mb-3" />
              <p>{s}</p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="grid md:grid-cols-4 text-center gap-6">
          <div><Clock /><p>24/7 Operations</p></div>
          <div><Shield /><p>Safe & Reliable</p></div>
          <div><Truck /><p>Scalable Fleet</p></div>
          <div><MapPin /><p>Singapore Coverage</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl">Let’s Move Your Operations</h2>
        <p className="text-white/60 mt-3">Available 24/7 via WhatsApp</p>
        <a href={whatsapp} className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full">
          WhatsApp Us
        </a>

        <div className="mt-10 text-white/50 text-sm">
          <p>admin@allswelltransport.com</p>
          <p>100 Jalan Sultan, Singapore</p>
        </div>
      </section>

    </div>
  );
}
```

---

## 6. src/styles.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  background: black;
  color: white;
  font-family: system-ui;
}
```

---

## 7. DEPLOYMENT (VERY IMPORTANT)

### Step 1
Create GitHub repo:
- allswell-transport

### Step 2
Upload all files above

### Step 3
Go to:
https://vercel.com

- Import GitHub repo
- Click Deploy

### Step 4
Add custom domain:
- allswelltransport.com

---

## DONE
Your website will be live.

---

## Next upgrade after deployment (optional)
We can add:
- client logo wall
- recruitment form
- animations
- SEO ranking setup
- Google Maps + reviews
