# COURSES COLLECTION

This project uses the Notion API as a headless CMS to create a list of free courses with Next.js.

## 🚀 Getting Started

### 1. Create a Notion Integration

Create a new Notion Integration and get the `NOTION_API_KEY` from the integration. Access the [Notion API](https://www.notion.so/profile/integrations) to learn more about the Notion API.

### 2. Create a Notion Database

Create a new database following this structure:

| title               | description | platform | imageUrl       |
| ------------------- | ----------- | -------- | -------------- |
| python course       | lorem ipsum | udemy    | /thumbnail.png |
| javascript training | lorem ipsum | alura    | /thumbnail.png |

### 3. Install dependencies

```bash
pnpm install
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
