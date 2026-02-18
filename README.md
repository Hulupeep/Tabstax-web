# Killone Group Water Scheme Website  

This repository contains the content for the Killone Group Water Scheme website, serving the Clarecastle & Ballyea Parish community in County Clare.

## About Killone Group Water Scheme

We provide clean, reliable water services to over 400 households, farms, and businesses in our local community.

---

## 🎉 How to Update the Website (For Editors)

You don't need technical skills to update our website. It's straightforward and easy to use:

### 1. Request Access
- Send an email to hollywoodsign AT gmail DOT com requesting access.
- You'll receive a GitHub invitation. Click **"Accept"** to get started.

### 2. Editing Content
- Go to [https://github.com/hulupeep/killone](https://github.com/hulupeep/killone).
- Click the `content` folder. Each webpage corresponds to a Markdown (`.md`) file (`index.md`, `about.md`, etc.).
- Click the file you'd like to edit, then click the pencil icon ✏️.
- Make your changes directly in your browser.
- Scroll down, write a brief description of your changes, and click **Commit changes**.

The website will update automatically within a few minutes.

---

## 📚 Quick Markdown Guide

Markdown is easy to use for formatting:

- **Headings**: Add `#` before your heading:
  ```markdown
  # Big Heading
  ## Subheading
  ### Smaller Heading
  ```

- **Paragraphs**: Just type your text. Leave a blank line between paragraphs.

- **Bold**: Put two asterisks before and after:  
  `**bold text**`

- **Italics**: Put one asterisk before and after:  
  `*italic text*`

- **Links**:
  `[Link Text](https://example.com)`

- **Images**:
  Upload the image into the `content` folder and include it like this:  
  `![Image description](/image.png)`  
  Replace `image.png` with your image filename.

- **Lists**: Use dashes for bullet points:
  ```markdown
  - Item one
  - Item two
  ```

---

## Optional -  Markdown Editors  
You don't need one but a more integrated flow is possible using git which pulls the content to your PC, edit with typora, then commit back up. No browsing to github needed.

- [Typora](https://typora.io) *(User-friendly, visual editor recommended for beginners)*
- [MarkText](https://marktext.app) *(Free, simple alternative)*
- [VS Code](https://code.visualstudio.com) *(Advanced users)*

---

## Technical Details (For Developers)

- **Framework**: Built with [Eleventy (11ty)](https://11ty.dev/), a static site generator.
- **Content**: Markdown files (`.md`) in the `content` folder.
- **Hosting & Deployment**: Automatically deployed via [Vercel](https://vercel.com) upon changes committed to the `main` branch.

### Developer Setup

```bash
git clone https://github.com/hulupeep/killone.git
npm install
npm run build
```

To preview locally:
```bash
npm run start
```

- Open your browser at [http://localhost:8080](http://localhost:8080)

---

## Contributing

Feedback and contributions are welcome! Feel free to open an issue or submit a pull request.

