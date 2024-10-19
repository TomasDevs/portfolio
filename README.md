# Portfolio - vscode

This is my personal portfolio built to showcase my skills, projects, and articles. The design is inspired by Visual Studio Code, providing a familiar interface for developers.

## ✨ Features

- **VS Code Inspired Design**: A layout that mirrors the look and feel of Visual Studio Code.
- **Dark/Light Mode**: Toggle between dark and light themes, with preferences saved in local storage.
- **Responsive Design**: Optimized for desktop and mobile devices (best viewed on desktop).
- **Interactive Pages**: Displays various sections including About, Skills, Projects, and more.
- **Dynamic Content**: Articles and GitHub repositories fetched via APIs through a custom Express proxy server.
- **404 Page**: Custom 404 page for any invalid URLs.

## 🛠️ Technologies Used

- **Frontend**: React, JavaScript, HTML, SCSS
- **Backend**: Node.js, Express (Proxy server)
- **Build Tool**: Vite
- **API Integrations**: Custom API, GitHub API, Dev.to API (via proxy server)
- **Deployment**: Hosted on Netlify

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- npm (or yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tomasdevs/portfolio-vscode.git
   cd portfolio-vscode
   ```

2. Install dependencies for both the main project and the API:

   ```bash
    npm install
    cd api
    npm install
   ```

3. Create a .env file in the api directory and add your Dev.to API key:

   ```makefile
    REACT_APP_DEV_TO_API_KEY=your_api_key_here
   ```

4. Start the Express server for handling API requests:

   ```bash
    cd api
    node server.js
   ```

   The server will run on http://localhost:5000.

5. Start the Vite development server:

   ```bash
    npm run dev
   ```

6. Open your browser and navigate to:
   http://localhost:5173

## 📂 Project Structure

```bash
portfolio-vscode/
├── api/
│   ├── .env                  # Environment variables for the API
│   ├── server.js             # Express server for API requests
│   ├── package.json          # API dependencies
│   └── package-lock.json     # Lockfile for the API dependencies
├── public/
│   ├── api/
│   │   └── projects.json     # JSON data for projects
│   ├── icons/                # Icons used in the portfolio
│   ├── images/               # Images for the portfolio
│   └── favicon.ico           # Favicon for the website
├── src/
│   ├── components/           # Reusable UI components
│   ├── pages/                # Different pages like Home, About, Projects, etc.
│   ├── styles/               # SCSS styles
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point for React
│   └── index.html            # HTML template
├── .gitignore                # Files and directories to ignore in version control
├── .eslintrc.js              # ESLint configuration
├── LICENSE                   # License for the project
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Lockfile for the project dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation

```

## 🌐 Live Demo

Check out the live version of the portfolio at: https://tomasdevs.netlify.app

## 🤝 Contributing

If you want to contribute to this project:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the [MIT License](https://opensource.org/license/MIT) file for details.
