# 🍽️ Meals

A recipe discovery web application built with **React.js** that lets users browse, search, and explore meal recipes fetched from the **TheMealDB API** — with detailed ingredients, instructions, and category filtering.

---

## 🚀 Features

- 🔍 Search meals by name or ingredient
- 🗂️ Filter recipes by category (Chicken, Vegetarian, Desserts, etc.)
- 📖 View detailed recipe page with full ingredients list and step-by-step instructions
- 🌍 Explore meals by cuisine/area of origin
- 📱 Fully responsive layout for mobile and desktop
- ⚡ Fast API calls with Axios and clean loading states

---

## 🛠️ Tech Stack

| Layer       | Technology                                  |
|-------------|----------------------------------------------|
| Frontend    | React.js, JavaScript (ES6+)                  |
| API         | [TheMealDB API](https://www.themealdb.com/api.php) (free, no key needed) |
| HTTP Client | Axios                                        |
| Styling     | CSS3, Flexbox, Grid                          |
| State       | React Hooks (`useState`, `useEffect`)        |
| Routing     | React Router DOM                             |
| Build Tool  | Create React App                             |

---

## 📁 Project Structure

```
meals/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── SearchBar/
│   │   ├── MealList/
│   │   ├── MealCard/
│   │   ├── MealDetail/
│   │   └── CategoryFilter/
│   ├── api/
│   │   └── meals.js         # Axios instance for TheMealDB
│   ├── App.js
│   └── index.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 14.x
- npm >= 6.x

> No API key required — TheMealDB free tier is open access.

### Installation

```bash
# Clone the repository
git clone https://github.com/surendra-yalakala/meals.git

# Navigate into the project directory
cd meals

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 🌐 API Reference

This app uses [TheMealDB](https://www.themealdb.com/api.php) — a free, open meal recipe database.

| Endpoint | Description |
|----------|-------------|
| `/search.php?s={name}` | Search meals by name |
| `/filter.php?c={category}` | Filter by category |
| `/lookup.php?i={id}` | Get full meal details |
| `/categories.php` | List all categories |

---

## 🧠 Key Learnings & Highlights

- Consumed a **real public REST API** (TheMealDB) with Axios, handling both search and detail endpoints
- Built a **dynamic detail page** that parses and displays a variable number of ingredients (TheMealDB returns up to 20 ingredient fields)
- Implemented **category-based filtering** with reactive UI updates using `useState`
- Applied **React Router** for navigation between the list view and individual meal detail pages
- Managed **loading and error states** gracefully with conditional rendering

---

## 🔮 Planned Improvements

- [ ] Add favourite meals feature with localStorage persistence
- [ ] Implement meal planner — drag and drop meals to days of the week
- [ ] Add nutrition info display
- [ ] Write unit tests with Jest and React Testing Library
- [ ] Deploy on Netlify / Vercel

---

## 👨‍💻 Author

**Surendra Yalakala**
Senior React & React Native Developer | 8+ years experience

[![LinkedIn](https://img.shields.io/badge/LinkedIn-surendrayalakala-blue?style=flat&logo=linkedin)](https://linkedin.com/in/surendrayalakala)
[![GitHub](https://img.shields.io/badge/GitHub-surendra--yalakala-black?style=flat&logo=github)](https://github.com/surendra-yalakala)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
