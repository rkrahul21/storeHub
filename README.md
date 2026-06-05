# storeHUB

A premium, elegant e-commerce  web application built with Next.js, featuring curated product displays, interactive shopping cart management, and seamless light/dark mode transitions.

---

## Architecture Overview

The application follows the modern **Next.js App Router** architecture, splitting work cleanly between client interactivity and structured data management:

### 1. Component Layer (`/app`)
* **`Home Page(page.tsx)`**: A static-first marketing view styled with a refined, warm aesthetic.
* **`Cart Page`**: A dynamic, interactive Client Component (`'use client'`) utilizing React hooks to process local data modifications instantly.
* **`Products Catalog Page`**: A dynamic product catalog displaying asynchronous loading indicators, global API error fallback states, and an interactive, runtime category filtering engine.
* **`ProductCard Component`**: A reusable visual element structured to uniformize product layouts, ratings badges, and action hooks across individual collections.


### 2. Data Fetching & Integration Layer (`/services`)
* **Data Concurrency**: Employs structural abstractions (`getProducts`, `getCategories`) isolated within a explicit service layout.
* **Network Optimization**: Leverages parallel promises via `Promise.all()` during initial lifecycle hooks (`useEffect`) to eliminate sequential API waterfall requests.


### 3. State Management Layer (`/hooks`)
* **`useCart`**: A centralized, custom React Hook handling the primary application context. It encapsulates operations for items, item deletions, quantity increases/decreases, totals calculations, and clearing global cart arrays.

### 4. Styling & Theming Layer (Tailwind CSS)

 **Responsive Layouts**: Flexible grid configurations (`grid-cols-1 md:grid-cols-3`) translate cleanly from mobile displays to ultra-wide monitors.
 **Color Schemes**: Explicit dark mapping variants (`dark:bg-[#14120E]`) provide seamless dark/light user interaction states.

---
## Setup Instructions

### Prerequisites
Ensure your development environment contains **Node.js (v18.17.0 or higher)** installed.

### 1. Clone & Navigate
```bash
git clone https://github.com/rkrahul21/storeHub
cd storeHub
```

### 2. Install Dependencies
Install the required packages using your preferred package manager:
```bash
npm install

```


### 4. Run Development Server
```bash
npm run dev

```
Open [http://localhost:3000] inside your browser to view the application.

### 5. Build for Production
```bash
npm run build
npm run start
```

---