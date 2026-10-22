/* ==========================================================================
   PROJECT DATA
   Keeping this separate from the components means Projects.jsx and
   ProjectCard.jsx stay purely presentational — swap in real projects here
   without touching any rendering logic.

   Replace the "github" and "live" URLs below with your actual repository
   and deployment links.
   ========================================================================== */

const projects = [
  {
    id: 'stock-scribe-studio',
    featured: true,
    title: 'Stock Scribe Studio',
    description:
      'A website plus browser extension that helps Adobe Stock contributors add metadata to their uploaded content directly inside their contributor accounts — saving hours of repetitive manual work. Built with React JS, JavaScript and Firebase.',
    tags: ['React JS', 'JavaScript', 'Firebase', 'Browser Extension'],
    image: 'screenshots/stockscribe.png',
    github: 'https://github.com/adilvu26-png/Stockscribe-studio', 
    live: 'https://stockscribe-studio.netlify.app/', 
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker Dashboard',
    description:
      'A budgeting dashboard that visualizes income versus expenses with interactive charts, category breakdowns, and monthly summaries — all persisted locally so your data survives a refresh.',
    tags: ['React', 'Chart.js', 'LocalStorage'],
     image: '/screenshots/expense-tracker.png',
    github: 'https://github.com/adilvu26-png/Expense-Tracker-Dashboard',
    live: 'https://monzoa.netlify.app/',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'Real-time weather lookup by city or current location, complete with a 5-day forecast, animated weather icons, and a quick toggle between °C and °F.',
    tags: ['JavaScript', 'REST API', 'Geolocation'],
    image: '/screenshots/weather-app.png',
    github: 'https://github.com/adilvu26-png/Weather-app',
    live: 'https://climexa.netlify.app/',
  },
  {
    id: 'todo-list',
    title: 'Todo List / Task Manager',
    description:
      'A drag-and-drop task manager with priority tags, due dates, and filters for active, completed, and overdue tasks — built to keep a busy day organized.',
    tags: ['Vanilla JS', 'Drag & Drop', 'LocalStorage'],
    image: '/screenshots/task-flow-manager.png',
    github: 'https://github.com/adilvu26-png/Task-flow-manager',
    live: 'https://taskflow-manager-pro.netlify.app/',
  },
  {
    id: 'recipe-finder',
    title: 'Recipe Finder',
    description:
      'Search thousands of recipes by ingredient or cuisine, save favorites to a personal collection, and follow clear, step-by-step cooking instructions.',
    tags: ['React', 'API Integration', 'CSS Grid'],
    image: '/screenshots/reicipefinder.png',
    github: 'https://github.com/adilvu26-png/recipe-finder',
    live: 'https://recipeorbit.netlify.app/',
  },
  {
    id: 'ecommerce-product-page',
    title: 'E-Commerce Product Page',
    description:
      'A pixel-perfect, fully responsive product page featuring an image gallery, size and color variants, and an animated add-to-cart flow.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/screenshots/omnifind.png',
    github: 'https://github.com/adilvu26-png/Omni-Find',
    live: 'https://omnivora.netlify.app/',
  },
  {
    id: 'movie-explorer',
    title: 'Movie Explorer',
    description:
      'Browse trending movies, search by title, and view cast details, ratings, and trailers in a clean, responsive card layout.',
    tags: ['React', 'TMDB API', 'React Router'],
     image: '/screenshots/movie-explorer.png',
    github: 'https://github.com/adilvu26-png/cineScope',
    live: 'https://cinescope-explorer.netlify.app/',
  },
];

export default projects;
