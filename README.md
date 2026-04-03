# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

i want to make one webside in MERN stack technology which contain this things- video streaming, text to voice, AI tools used, voice to text, take file from user and image also, live messaging, and when login or singup send otp on phone, use of third party api to get user data using ip or phone no, use of short cutkey to perform operation, jwt authentication, record voice and send.
give me the road map , i am already mern developer. which part i need to do first for this project and step by step guide and necessary tools.

src/
│
├── app/                     # App level config (store, routing, providers)
│   ├── store.js
│   ├── routes.jsx
│   └── App.jsx
│
├── assets/                  # Static files
│   ├── images/
│   ├── icons/
│   └── styles/
│
├── components/              # Reusable UI components
│   ├── Button/
│   ├── Modal/
│   ├── Loader/
│   ├── Navbar/
│   └── VideoCard/
│
├── features/                # Main business modules ⭐ (Most Important)
│   ├── auth/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── authSlice.js
│   │   └── authService.js
│   │
│   ├── home/
│   │   ├── components/
│   │   └── HomePage.jsx
│   │
│   ├── movies/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── movieSlice.js
│   │   └── movieService.js
│   │
│   ├── series/
│   │   ├── components/
│   │   ├── pages/
│   │   └── seriesService.js
│   │
│   ├── player/
│   │   ├── components/
│   │   └── PlayerPage.jsx
│   │
│   └── profile/
│       ├── pages/
│       └── profileService.js
│
├── hooks/                   # Custom hooks
│   ├── useAuth.js
│   ├── useVideoPlayer.js
│   └── useFetch.js
│
├── layouts/                 # Layout wrappers
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
│
├── services/                # Global API services
│   ├── axiosInstance.js
│   └── apiEndpoints.js
│
├── utils/                   # Helper functions
│   ├── formatDuration.js
│   ├── constants.js
│   └── validators.js
│
├── context/                 # React context (if needed)
│
├── routes/                  # Route guards
│   ├── PrivateRoute.jsx
│   └── PublicRoute.jsx
│
├── types/                   # Type definitions (TS only)
│
├── index.js
└── main.css


app → setup
assets → images/styles
components → reusable UI
features → actual app modules
hooks → reusable logic
layouts → page structure
services → API calls
utils → helpers
routes → route security

features/
   contains business logic

components/
   contains reusable UI

services/
   talks to backend

hooks/
   reusable logic

redux store
   global data memory


PrivateRoute:
Blocks pages if user not logged in.
ex. Blocks user profile page if user not logged in.

PublicRoute:
Used for: Login page, Signup page
