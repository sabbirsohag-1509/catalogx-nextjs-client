catalogx-nextjs/
│
├── client/                  ← Next.js App
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx          // Landing page
│   │   ├── login/
│   │   │   └── page.jsx
│   │   ├── items/
│   │   │   ├── page.jsx      // Item list
│   │   │   └── [id]/
│   │   │       └── page.jsx  // Item details
│   │   ├── add-item/
│   │   │   └── page.jsx      // Protected page
│   │   ├── api/
│   │   │   └── auth/
│   │   │       ├── login/route.js
│   │   │       └── logout/route.js
│   │   └── middleware.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ItemCard.jsx
│   │
│   ├── lib/
│   │   ├── auth.js
│   │   └── fetcher.js
│   │
│   ├── public/
│   ├── styles/
│   ├── next.config.js
│   ├── package.json
│   └── .env.local
│
├── server/                  ← Express API
│   ├── index.js
│   ├── routes/
│   │   └── items.js
│   ├── data/
│   │   └── items.json
│   ├── package.json
│   └── .env
│
└── README.md
