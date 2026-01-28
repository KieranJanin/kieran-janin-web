# Kieran Janin - Integrated Engineering Portfolio

A modern, high-performance portfolio website built with React and Vite. This project showcases work at the intersection of Civil Engineering, Data Science, and Design Thinking.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Google Cloud Run (via Docker)

## 🏗️ Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components (SEO, Layout)
├── pages/           # Route components (Home, Archive, Pillars...)
├── App.jsx          # Main routing configuration
└── main.jsx         # Application entry point
```

## 🛠️ Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/kieran-janin-web.git
    cd kieran-janin-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🐳 Docker Deployment

The project includes a `Dockerfile` for containerized deployment.

```bash
# Build the image
docker build -t kieran-janin-web .

# Run the container
docker run -p 8080:8080 kieran-janin-web
```

## 🎨 Design System

- **Theme:** Dark Mode (`bg-[#0a0a0a]`)
- **Typography:** Sans-serif (System UI)
- **Primary Colors:** Zinc (Grayscale), Blue (Civil), Emerald (Data), Amber (Design)

## 📄 License

© 2026 Kieran Janin. All Rights Reserved.
