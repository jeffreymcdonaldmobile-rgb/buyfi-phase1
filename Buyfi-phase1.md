buyfi-phase1/
├── app/                  # (if using App Router; we used Pages Router here)
├── pages/                # Homepage, search, vehicles/[id].tsx
│   ├── index.tsx
│   ├── search.tsx
│   └── vehicles/
│       └── [id].tsx
├── components/           # Reusable pieces
│   └── FinanceCalculator.tsx
├── public/               # Static assets (images, placeholders)
│   └── placeholder-car.jpg   # Add your own or use a temp image
├── styles/               # globals.css or Tailwind config
├── .gitignore            # Standard ignores (.next, node_modules, etc.)
├── next.config.js
├── package.json
├── tsconfig.json         # If using TypeScript
├── README.md             # Basic project info
└── tailwind.config.js