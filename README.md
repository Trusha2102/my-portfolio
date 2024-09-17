# My Portfolio

This is my personal portfolio website, showcasing my skills, projects, and professional achievements. It serves as an interactive resume and a platform for potential employers or collaborators to learn more about my work.

## 🚀 Live Demo

You can view the live site here: [My Portfolio]((https://github.com/Trusha2102/my-portfolio.git))

## 📂 Project Structure

```
/public
   /assets         - Images, videos, or other assets
   index.html      - The main HTML file
/src
   /components     - Reusable components
   /styles         - Global styles and CSS modules
   App.js          - Main React component
   index.js        - ReactDOM render entry point
```

## 🛠️ Technologies Used

- **React**: For building the dynamic user interface.
- **SCSS**: For component-specific styling.
- **JavaScript**: Core language for the interactivity.
- **HTML & CSS**: For static page structure and design.
- **GitHub Pages**: For hosting and deploying the site.

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** (or **yarn**) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Trusha2102/my-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the project locally

To start the development server:

```bash
npm start
```

This will run the app locally, and it will be accessible at `http://localhost:3000`.

### Building for production

To create a production build:

```bash
npm run build
```

This will create an optimized version of your portfolio in the `build/` folder, ready for deployment.

## 🚀 Deployment on GitHub Pages

1. Install the GitHub Pages package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Update your `package.json` file:

   Add the following scripts:

   ```json
   "homepage": "https://github.com/Trusha2102/my-portfolio.git",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

This command will build the app and publish the `build` folder to the `gh-pages` branch of your repository.

### Updating GitHub Pages

After making changes, simply run:

```bash
npm run deploy
```

This will update your live site.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
