# 🖥️ Linux Terminal Portfolio

A personal portfolio website styled like an **old Linux terminal**.  
Built with **React.js** and **Tailwind CSS**, featuring typewriter effects, retro CRT visuals, and terminal-like commands.

---

## ✨ Features

- ⚡ **Retro Linux terminal UI** (black background, green monospace text)
- ⌨️ **Typewriter effect** for commands (`whoami`, `echo`, `cat`, `ls`)
- 🖥️ **CRT effects**: flickering cursor, scanlines, glow text
- 📂 **Projects, Skills, Experience** displayed like `ls` and `cat` outputs
- 🔗 **Hyperlinks** for email, phone, GitHub, LinkedIn
- 📄 **Resume download** (`resume.pdf`) from a `documents/` section
- 🕹️ **Exit session** with a timestamp at the end

---

## 🛠️ Tech Stack

- [React.js](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Custom **Typewriter component** (React + hooks)
- CRT / terminal effects using **CSS animations**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/linux-terminal-portfolio.git
cd linux-terminal-portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

App will be available at http://localhost:5173

## 📂 Project Structure

```text
.
├── public/
│   ├── resume.pdf        # Your resume file (downloadable)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Portfolio.tsx # Main portfolio component
│   ├── Terminal.css      # CRT + terminal styles
│   └── main.tsx          # React entry point
├── package.json
└── README.md
```

## 📄 Resume Setup

- Place your resume as resume.pdf inside the /public folder.
- Visitors can download it via the terminal command:

[om@portfolio ~]$ ls documents/
resume.pdf

## 🧑‍💻 Author

- Om Prakash Chaurasia
- 📧 omchaurasia2024@gmail.com
- 📞 +91-62826-46554
- :octocat: [GitHub](https://github.com/Om-Prakash-Chaurasia)
- 💼 [LinkedIn](https://www.linkedin.com/in/om-prakash-chaurasia/)

## 📝 License

- This project is open source and available under the [MIT License](https://mit-license.org/).
