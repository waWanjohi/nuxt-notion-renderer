# Notion Renderer

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt 3 & 4 module for rendering Notion pages with full support for Notion's block types.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/gideonwanjohi/nuxt-notion-renderer?file=playground%2Fapp.vue) -->

## Features

Transform Notion API responses into beautifully rendered content in your Nuxt application:

- � &nbsp;**Rich Text Support** - Full support for Notion's rich text formatting (bold, italic, code, links, etc.)
- 🎨 &nbsp;**Tailwind CSS Styling** - Pre-styled components with Tailwind CSS for modern, responsive design
- 🧩 &nbsp;**Comprehensive Block Support** - Render all major Notion block types
- 🔄 &nbsp;**Auto-Import Components** - Components are automatically available throughout your app
- ⚡ &nbsp;**TypeScript Support** - Fully typed for the best developer experience
- 🎭 &nbsp;**Smooth Animations** - Built-in transitions for a polished user experience

## Supported Block Types

The module supports the following Notion block types:

- **Text Blocks**: Paragraph, Headings (H1, H2, H3), Quote, Callout
- **Lists**: Bulleted Lists, Numbered Lists, To-Do Lists
- **Media**: Images, Videos, Bookmarks
- **Code**: Code blocks with syntax highlighting
- **Layout**: Dividers, Child Pages
- And more...

## Quick Setup

Install the module to your Nuxt application:

```bash
npm install nuxt-notion-renderer
```

Add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ["nuxt-notion-renderer"],
});
```

That's it! You can now use the `NotionRenderer` component in your Nuxt app ✨

## Usage

### Basic Usage

The `NotionRenderer` component takes a single prop `blocks` which is an array of Notion block objects:

```vue
<template>
  <div>
    <NotionRenderer :blocks="notionBlocks" />
  </div>
</template>

<script setup lang="ts">
const { data: notionBlocks } = await useFetch("/api/notion/page");
</script>
```

### Fetching Notion Blocks

You'll need to fetch blocks from the Notion API. Here's an example server API route:

```typescript
// server/api/notion/page.get.ts
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default defineEventHandler(async (event) => {
  const pageId = "your-notion-page-id";

  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  });

  return response.results;
});
```

### Working with Dynamic Pages

For blog posts or dynamic content, you can fetch blocks based on a slug or ID:

```vue
<!-- pages/blog/[slug].vue -->
<template>
  <article>
    <h1>{{ page.title }}</h1>
    <NotionRenderer :blocks="page.blocks" />
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useFetch(`/api/posts/${route.params.slug}`);
</script>
```

```typescript
// server/api/posts/[slug].get.ts
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  // Fetch page metadata from your database
  const page = await getPageBySlug(slug);

  // Fetch blocks
  const blocks = await notion.blocks.children.list({
    block_id: page.id,
    page_size: 100,
  });

  return {
    title: page.title,
    blocks: blocks.results,
  };
});
```

### Styling

The module comes with pre-configured Tailwind CSS styles. The styles are automatically injected, so you don't need to import anything manually.

If you want to customize the styles, you can override the default classes in your global CSS:

```css
/* assets/css/main.css */
.notion-renderer {
  @apply prose prose-lg max-w-none;
}

.notion-renderer h1 {
  @apply text-4xl font-bold mb-4;
}

.notion-renderer p {
  @apply mb-4 leading-relaxed;
}
```

## Supported Block Types Reference

### Text Content

- **Paragraph** - Standard text paragraphs with rich text support
- **Heading 1, 2, 3** - Hierarchical headings
- **Quote** - Blockquote styling for quoted text
- **Callout** - Highlighted text boxes with icons

### Lists

- **Bulleted List** - Unordered lists with bullets
- **Numbered List** - Ordered lists with numbers
- **To-Do List** - Interactive checkbox lists

### Media

- **Image** - Images with captions and proper sizing
- **Video** - Embedded videos (YouTube, Vimeo, etc.)
- **Bookmark** - Rich link previews

### Code

- **Code Block** - Syntax-highlighted code blocks with language support

### Layout

- **Divider** - Horizontal rules to separate content
- **Child Page** - Links to child pages

### Rich Text Support

All text blocks support Notion's rich text formatting:

- **Bold**, _Italic_, ~~Strikethrough~~, Underline
- `Inline code`
- [Links](https://example.com)
- Text colors and background colors

## TypeScript Support

The module is fully typed. Import types when needed:

```typescript
import type {
  NotionBlock,
  BlockType,
  RichText,
} from "nuxt-notion-renderer/types";

const blocks: NotionBlock[] = [
  // Your Notion blocks
];
```

## Configuration

The module works out of the box with zero configuration. However, you can customize it if needed:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["nuxt-notion-renderer"],
  notionRenderer: {
    // Future configuration options will be available here
  },
});
```

## Module Architecture

### Components

All components are automatically registered and available globally:

- `<NotionRenderer>` - Main component that orchestrates rendering
- `<NotionParagraphBlock>` - Renders paragraph blocks
- `<NotionHeadingBlock>` - Renders heading blocks (H1, H2, H3)
- `<NotionBulletedListItemBlock>` - Renders bulleted list items
- `<NotionNumberedListItemBlock>` - Renders numbered list items
- `<NotionToDoBlock>` - Renders to-do/checkbox items
- `<NotionQuoteBlock>` - Renders quote blocks
- `<NotionCalloutBlock>` - Renders callout blocks
- `<NotionCodeBlock>` - Renders code blocks
- `<NotionImageBlock>` - Renders image blocks
- `<NotionVideoBlock>` - Renders video blocks
- `<NotionBookmarkBlock>` - Renders bookmark/link preview blocks
- `<NotionDividerBlock>` - Renders horizontal dividers
- `<NotionChildPageBlock>` - Renders child page links
- `<NotionRichTextRenderer>` - Handles rich text formatting

### Dependencies

The module automatically installs and configures:

- **Tailwind CSS** - For styling (via `@nuxtjs/tailwindcss`)
- **Nuxt Icon** - For rendering icons in callouts and other components

## Best Practices

### Performance

When fetching Notion blocks:

1. **Use caching** - Cache API responses to reduce Notion API calls
2. **Limit page size** - Use pagination for pages with many blocks
3. **Server-side rendering** - Fetch blocks on the server for better performance

```typescript
// Example with caching
const cachedFetch = defineCachedFunction(
  async (pageId: string) => {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
    });
    return blocks.results;
  },
  {
    maxAge: 60 * 60, // Cache for 1 hour
    swr: true,
  },
);
```

### Error Handling

Always handle potential errors when fetching Notion data:

```vue
<script setup lang="ts">
const { data: blocks, error } = await useFetch("/api/notion/page");

if (error.value) {
  console.error("Failed to fetch Notion blocks:", error.value);
}
</script>

<template>
  <div>
    <div v-if="error" class="error">Failed to load content</div>
    <NotionRenderer v-else-if="blocks" :blocks="blocks" />
  </div>
</template>
```

### Nested Blocks

Notion supports nested blocks (like toggle lists or nested pages). If you need to handle nested content:

```typescript
async function fetchBlocksRecursively(blockId: string) {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });

  const blocks = response.results;

  // Fetch children for blocks that have them
  for (const block of blocks) {
    if (block.has_children) {
      block.children = await fetchBlocksRecursively(block.id);
    }
  }

  return blocks;
}
```

## Examples

### Blog Application

```vue
<!-- pages/blog/[slug].vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <article class="prose prose-lg mx-auto">
      <header class="mb-8">
        <h1>{{ post.title }}</h1>
        <div class="text-gray-600">
          <time>{{ formatDate(post.date) }}</time>
          <span class="mx-2">·</span>
          <span>{{ post.author }}</span>
        </div>
      </header>

      <NotionRenderer :blocks="post.blocks" />
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: post } = await useFetch(`/api/posts/${route.params.slug}`);

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>
```

### Documentation Site

```vue
<!-- pages/docs/[...slug].vue -->
<template>
  <div class="flex">
    <aside class="w-64 h-screen sticky top-0">
      <DocsSidebar :pages="navigation" />
    </aside>

    <main class="flex-1 p-8">
      <NotionRenderer :blocks="page.blocks" />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useFetch(
  `/api/docs/${route.params.slug.join("/")}`,
);
const { data: navigation } = await useFetch("/api/docs/navigation");
</script>
```

## Troubleshooting

### Styles Not Applying

If styles aren't applying correctly:

1. Ensure Tailwind CSS is properly configured
2. Check that your `tailwind.config.ts` includes the module's components
3. Verify that the CSS file is being loaded

### Components Not Found

If components are not auto-imported:

1. Make sure the module is listed in your `nuxt.config.ts`
2. Run `npm run dev:prepare` to regenerate type stubs
3. Restart your Nuxt dev server

### API Rate Limits

Notion API has rate limits. To avoid hitting them:

1. Implement caching with `defineCachedFunction`
2. Use ISR (Incremental Static Regeneration) for static content
3. Consider using a webhook to invalidate cache when Notion content changes

## Contributing

Contributions are welcome! Please follow these steps:

<details>
  <summary>Development Setup</summary>
  
  ```bash
  # Clone the repository
  git clone https://github.com/waWanjohi/nuxt-notion-renderer.git
  cd nuxt-notion-renderer

# Install dependencies

npm install

# Generate type stubs

npm run dev:prepare

# Start the playground in development mode

npm run dev

# Build the playground for production

npm run dev:build

# Run linter

npm run lint

# Run tests

npm run test
npm run test:watch

# Build the module

npm run prepack

# Release a new version

npm run release

````

</details>

### Testing

The module uses Vitest for testing. Write tests for new features:

```typescript
// test/basic.test.ts
import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { setup, $fetch } from "@nuxt/test-utils/e2e";

describe("nuxt-notion-renderer", async () => {
await setup({
  rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
});

it("renders notion blocks", async () => {
  const html = await $fetch("/");
  expect(html).toContain("nuxt-notion-renderer");
});
});
````

### Module Structure

```
nuxt-notion-renderer/
├── src/
│   ├── module.ts              # Module definition
│   └── runtime/
│       ├── components/        # Vue components
│       ├── types/            # TypeScript types
│       ├── assets/           # CSS styles
│       └── plugin.ts         # Nuxt plugin
├── playground/               # Development playground
├── test/                    # Test files
└── README.md               # This file
```

## Compatibility

This module is compatible with:

- ✅ Nuxt 3.x
- ✅ Nuxt 4.x
- ✅ Vue 3
- ✅ TypeScript

### Browser Support

The module works in all modern browsers that support:

- ES6+ JavaScript
- CSS Grid and Flexbox
- Tailwind CSS

## Related

- [Notion API Documentation](https://developers.notion.com/)
- [@notionhq/client](https://github.com/makenotion/notion-sdk-js) - Official Notion JavaScript SDK
- [Nuxt Documentation](https://nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)

## License

[MIT License](./LICENSE) © 2025 Gideon Wanjohi

## Acknowledgments

- Built with [Nuxt Module Builder](https://github.com/nuxt/module-builder)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Inspired by the Notion API and its amazing developer community

---

Made with ❤️ for the Nuxt community

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-notion-renderer/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-notion-renderer
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-notion-renderer.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-notion-renderer
[license-src]: https://img.shields.io/npm/l/nuxt-notion-renderer.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-notion-renderer
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
