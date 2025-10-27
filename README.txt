Portfolio package for Nenawath Pavani (Light theme)
---------------------

Contents:
- index.html
- styles.css
- script.js
- README.txt (this file)
- Resume PDF (place your resume PDF(s) in the same folder before uploading)

How to publish on GitHub Pages (user site):
1. Create a new repository named exactly: <your-github-username>.github.io
   Example: nenavathpavani.github.io
2. Upload all files from this package (index.html, styles.css, script.js, and your resume PDF).
   You can upload via the GitHub web UI or push using git.
3. Wait a few minutes and visit: https://nenavathpavani.github.io/

Quick git commands (if you have git installed):
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/nenavathpavani/nenavathpavani.github.io.git
git push -u origin main
```

How to deploy on Vercel:
1. Sign in to https://vercel.com with your GitHub account and create a new project.
2. Import the repository (you can push this folder to a repo or use the GitHub Pages repo).
3. Choose root as the project directory and deploy. Vercel will provide a domain like https://your-project-name.vercel.app
4. You can change the project name to 'pavaniportfolio' to get https://pavaniportfolio.vercel.app (if available).

Notes:
- Replace any placeholder text if needed (e.g., project links, extra descriptions).
- If you want the site to appear at https://pavaniportfolio.vercel.app, name the Vercel project 'pavaniportfolio'.
- For GitHub Pages user site, repository must be named <username>.github.io exactly.
