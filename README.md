# PAYA ST COFFEE — Website Rehaul (React SPA)

Project created as a quiz/rehaul for the local coffee startup **PAYA ST COFFEE**.

Summary
- A single-page React application (SPA) showcasing a mobile-responsive landing page, menu, team, about, and contact pages.
- Built with React (v19), React Bootstrap, and Bootswatch (Cosmo theme via CDN).
- Routing handled with `react-router-dom` so navigation does not cause full page reloads.

Why this rehaul
- PAYA ST COFFEE (local coffee shop) wanted a clean, mobile-first single-page site to showcase their menu and team.
- The rehaul focuses on: clear branding, responsive layout, easy navigation (SPA), and reusable components for menu items.

Project structure (key files)
- `src/App.js`: Main router and layout (Header/Footer + routes)
- `src/components/Header.jsx`: Top navigation using React Bootstrap
- `src/components/Footer.jsx`: Footer with branding
- `src/components/ProductCard.jsx`: Reusable card for menu items
- `src/pages/*`: `Home`, `Menu`, `About`, `Team`, `Contact`
- `src/data/menuData.js`: Dummy menu items used by the `Menu` page
- `src/data/teamData.js`: Dummy team members used by the `Team` page

Routes
- `/` — Landing / Home: hero and featured drinks
- `/menu` — Menu: full menu list (dummy data)
- `/about` — About: who they are and mission
- `/team` — Team: team members and roles
- `/contact` — Contact: simple contact form

Assets and dummy data
- Placeholder image paths are referenced under `/public/images/*`. Replace these with real images (shop photos, product photos).
- Dummy names and descriptions follow typical naming and casing conventions.

How to run
1. In the `frontend` folder run:

```powershell
npm install
npm start
```

Notes
- Bootswatch Cosmo theme is loaded from the CDN in `public/index.html` (no local Bootswatch package required). You can swap themes by replacing that link.
- This project is built to be a SPA — navigation uses React Router. No page reloads should occur when using the header links.

Reference
- This is a rehaul exercise; PAYA ST COFFEE is a fictional/local shop for the quiz.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
