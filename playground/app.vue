<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-red-100 m-2">
      <div class="text-2xl">Hello</div>
    </div>

    <h1 class="text-4xl font-bold mb-8">Nuxt Notion Renderer Example</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Individual Components</h2>
      <div class="space-y-4">
        <div
          v-for="block in complexBlocks"
          :key="block.id"
          class="p-4 rounded-lg"
        >
          <h3 class="text-lg font-semibold mb-2 capitalize">
            {{ block.type }} block
          </h3>
          <NotionRenderer :blocks="[block]" />
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Full Block List Renderer</h2>
      <div class="p-4 rounded-lg">
        <NotionRenderer :blocks="complexBlocks" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { NotionBlock } from "../src/runtime/types/notion-blocks";

// Sample blocks for demonstration
const sampleBlocks: NotionBlock[] = [
  {
    object: "block",
    id: "1",
    parent: { type: "page_id", page_id: "test" },
    created_time: "2024-01-01T00:00:00.000Z",
    last_edited_time: "2024-01-01T00:00:00.000Z",
    created_by: { object: "user", id: "user1" },
    last_edited_by: { object: "user", id: "user1" },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_1",
    heading_1: {
      rich_text: [
        {
          type: "text",
          text: { content: "Welcome to Notion Renderer!" },
          plain_text: "Welcome to Notion Renderer!",
        },
      ],
    },
  },
  {
    object: "block",
    id: "2",
    parent: { type: "page_id", page_id: "test" },
    created_time: "2024-01-01T00:00:00.000Z",
    last_edited_time: "2024-01-01T00:00:00.000Z",
    created_by: { object: "user", id: "user1" },
    last_edited_by: { object: "user", id: "user1" },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content:
              "This is a sample paragraph showing how the Notion renderer works. It supports ",
          },
          plain_text:
            "This is a sample paragraph showing how the Notion renderer works. It supports ",
        },
        {
          type: "text",
          text: { content: "rich text formatting" },
          annotations: { bold: true },
          plain_text: "rich text formatting",
        },
        {
          type: "text",
          text: { content: " like bold text." },
          plain_text: " like bold text.",
        },
      ],
    },
  },
];

// Individual component examples
const paragraphBlock: NotionBlock = sampleBlocks[1]!;

const headingBlock: NotionBlock = {
  object: "block",
  id: "3",
  parent: { type: "page_id", page_id: "test" },
  created_time: "2024-01-01T00:00:00.000Z",
  last_edited_time: "2024-01-01T00:00:00.000Z",
  created_by: { object: "user", id: "user1" },
  last_edited_by: { object: "user", id: "user1" },
  has_children: false,
  archived: false,
  in_trash: false,
  type: "heading_2",
  heading_2: {
    rich_text: [
      {
        type: "text",
        text: { content: "This is a Heading 2" },
        plain_text: "This is a Heading 2",
      },
    ],
  },
};

const quoteBlock: NotionBlock = {
  object: "block",
  id: "4",
  parent: { type: "page_id", page_id: "test" },
  created_time: "2024-01-01T00:00:00.000Z",
  last_edited_time: "2024-01-01T00:00:00.000Z",
  created_by: { object: "user", id: "user1" },
  last_edited_by: { object: "user", id: "user1" },
  has_children: false,
  archived: false,
  in_trash: false,
  type: "quote",
  quote: {
    rich_text: [
      {
        type: "text",
        text: {
          content:
            "This is an inspiring quote block that demonstrates the quote styling.",
        },
        plain_text:
          "This is an inspiring quote block that demonstrates the quote styling.",
      },
    ],
  },
};

const complexBlocks = [
  {
    object: "block",
    id: "26f54e30-0d66-81d1-b0db-ff2789133141",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-15T13:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_1",
    heading_1: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "User Feedback",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "User Feedback",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-818e-aba1-cd0d742293ed",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-15T13:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Offline syncing was too slow",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Offline syncing was too slow",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-81a7-96bf-f490a48cb78d",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-15T13:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Requested a progress bar for sync",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Requested a progress bar for sync",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-81d8-b1ff-dd88b616daf0",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-15T13:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_1",
    heading_1: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Interviewer Observations",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Interviewer Observations",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-813e-b3c2-cc599ab7734d",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-15T13:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Items synced out of order",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Items synced out of order",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-81d7-b36c-d24ae66c2a80",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-15T13:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content:
              "User clicked item that hadn't synced and thought the app was broken",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text:
            "User clicked item that hadn't synced and thought the app was broken",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27654e30-0d66-802f-802e-e30411d5f19b",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-22T06:00:00.000Z",
    last_edited_time: "2025-09-22T06:01:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_1",
    heading_1: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Another Heading",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Another Heading",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "27654e30-0d66-805d-bd3b-e7be9b54797c",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-22T06:01:00.000Z",
    last_edited_time: "2025-09-22T06:01:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "THis is  an edit",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "THis is  an edit",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-8181-8922-ca02260f055c",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-15T13:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_1",
    heading_1: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Action Items",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Action Items",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-81d9-98f7-c1896eabb393",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-18T14:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "to_do",
    to_do: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Improve offline mode",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Improve offline mode",
          href: null,
        },
      ],
      checked: true,
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-81e2-8e04-e7f0f8eba69b",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-19T09:51:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "to_do",
    to_do: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Add syncing progress bar to product backlog",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Add syncing progress bar to product backlog",
          href: null,
        },
      ],
      checked: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-81dd-899d-f338cf38ae6d",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-19T09:51:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "to_do",
    to_do: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Create syncing bug report",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Create syncing bug report",
          href: null,
        },
      ],
      checked: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "26f54e30-0d66-81a3-aed5-dbef5d7ff16d",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-15T13:17:00.000Z",
    last_edited_time: "2025-09-18T14:17:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "to_do",
    to_do: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Improve error messaging",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Improve error messaging",
          href: null,
        },
      ],
      checked: true,
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80ed-a0b6-dde4983b9487",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:51:00.000Z",
    last_edited_time: "2025-09-18T11:51:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80f0-860c-ee8414b23dfa",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:53:00.000Z",
    last_edited_time: "2025-09-18T11:53:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "video",
    video: {
      caption: [],
      type: "external",
      external: {
        url: "https://youtu.be/dQw4w9WgXcQ?si=MVvvL5Yz1ZZVMx0O",
      },
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80a7-99bc-cd40c78e774f",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_1",
    heading_1: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Getting Started with Nuxt 4 and Notion",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Getting Started with Nuxt 4 and Notion",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80fe-9643-e4c670a00978",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content:
              "Welcome to the future of web development! In this post, we'll explore how to create a modern, responsive blog platform using Nuxt 4 and Notion as our content management system.",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text:
            "Welcome to the future of web development! In this post, we'll explore how to create a modern, responsive blog platform using Nuxt 4 and Notion as our content management system.",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-8043-a221-fd710ad11809",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_2",
    heading_2: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Why Nuxt 4?",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Why Nuxt 4?",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-8032-a969-f1edbf79c410",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:57:00.000Z",
    last_edited_time: "2025-09-18T11:57:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80b9-a8c5-efdac25360d2",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:57:00.000Z",
    last_edited_time: "2025-09-18T11:57:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80b2-827f-cf2941e29e1d",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:57:00.000Z",
    last_edited_time: "2025-09-18T11:58:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "video",
    video: {
      caption: [],
      type: "file",
      file: {
        url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/e3d406bf-08bd-4e73-b104-f0953b9bd96b/ad4e56e8-7a3f-4f38-9890-1def8e3e9ab4/4114797-sd_640_360_25fps.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJNWSOI%2F20250925%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250925T072921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUHmi62hxM9xaxAnrhXV6sNh%2F3RQU%2BoZbZyF0bfWCmAiEAhy7Wzz2grbbyZ%2FxW2wOvacLe%2FKEIbr9%2BijlSKZP0acwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAhP1xHqu33Czg6lryrcA1lmon5X1hLrkaTgkq%2BTTMwcR2zLb1cEg%2FjU3gZ5NHOLLV19Xs%2Bsml8QHJxZNfvqfF86cY3PtKOo4KWPXXcfCgcvtYwaHxomMsnPlkm8xcv%2FsO2lK2pObAmVzej3tfBoWzgsxhAAFapApRManktd4HE2yD0sRx2Rb5KDwdgRqN6HocsJGcwI3C3w35Yg1Y8PmG3yYmDsyucOKKDMyyqkvkdJtJd0rCXFvN4Ca29to%2FnehcZXqwgTq%2BmqxIP4aVzJDfnFIPmDpQ6KFJLb%2B5aVHSeDJvVd8F3%2FUvQ1hFPL2c4awfOnyOufrvDiPms5Y69cPKof5AS%2FvTdPwOIJmWG4Qnaq8NQS5GUjcl65mbE5zsoCDRoGXRRkNleYTUSqEjGvqOryrezVusHx7pDM7%2FG%2BPMbzpQOL6AVYQB0TCdFzKj3grApDT6Q19oC77QTm0ZYSW%2F8CTEGIOiPojHNR9ZyLXpzn7FvfhmcEstV4NYJ74HsXzL9POOu%2FBdAPHV0hTxZTLVejHk0OfSyMjsc3ySiTYxECGaQJsPQRvy80knmayw6XiUbBlA8D8VK7VrroPpi6ZTbV%2FnmEqmUhixND2TBJ%2Ft1V%2BZ%2B2KGgu5Feoo5XmGYiCFCQxopGinNAEDVrCMKmA08YGOqUBjvWGT8E8MoYoxp7v55axmbkk6D%2F71CKPvHT9jrB07Y6M4PAkGHX5g2CjLMPfy5tG9QhjKC2nKtxPqjf5gm9tDBnHRuu6akVN97FPQ1wfEqRvkXdGmkl5Mpfti3F426Nx7LIP6Rh9G7%2Fu4TpO12HOCXz2n0gahE25a4cLtw4tb7ztHgvudMSOWI6dGoZFiYilVssa0nKWRQKrj4iqq46vZASRGjTg&X-Amz-Signature=429638b2a78e63a7af162f4aa4c5ae3480e0af938e5e0fc530b432f17e55c4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        expiry_time: "2025-09-25T08:29:21.274Z",
      },
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-804f-8bc2-f137938160f4",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:57:00.000Z",
    last_edited_time: "2025-09-18T11:57:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80fc-8db6-cf2bec194a42",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:57:00.000Z",
    last_edited_time: "2025-09-18T11:57:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80aa-8573-fcc0d0ec0dfc",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content:
              "Nuxt 4 brings significant improvements in performance, developer experience, and modern web standards. Some key features include:",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text:
            "Nuxt 4 brings significant improvements in performance, developer experience, and modern web standards. Some key features include:",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-805f-a259-e4cf8be1beb8",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Better Performance",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Better Performance",
          href: null,
        },
        {
          type: "text",
          text: {
            content: ": Improved bundling and optimization",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: ": Improved bundling and optimization",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-800f-9062-c405a33afa1d",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Enhanced DX",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Enhanced DX",
          href: null,
        },
        {
          type: "text",
          text: {
            content: ": Better TypeScript support and dev tools",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: ": Better TypeScript support and dev tools",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80e1-b029-ea17142cdd57",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Modern Standards",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Modern Standards",
          href: null,
        },
        {
          type: "text",
          text: {
            content: ": Full support for latest web APIs",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: ": Full support for latest web APIs",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-8004-b3de-daf8b600e7c5",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Flexible Deployment",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Flexible Deployment",
          href: null,
        },
        {
          type: "text",
          text: {
            content: ": Deploy anywhere with ease",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: ": Deploy anywhere with ease",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80ae-abeb-cd160700e6b9",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_2",
    heading_2: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Why Notion as a CMS?",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Why Notion as a CMS?",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80f0-bafb-d01ba75d8932",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content:
              "Notion provides an excellent writing experience while offering powerful database features:",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text:
            "Notion provides an excellent writing experience while offering powerful database features:",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80e1-ab7e-f3b9c5a7442f",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Rich Content Editing",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Rich Content Editing",
          href: null,
        },
        {
          type: "text",
          text: {
            content: ": Write with a familiar, powerful editor",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: ": Write with a familiar, powerful editor",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-8075-a2ae-eb890ac23bf1",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Structured Data",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Structured Data",
          href: null,
        },
        {
          type: "text",
          text: {
            content: ": Use databases to organize your content",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: ": Use databases to organize your content",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-800c-9c5b-e37bb1b7df5c",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Real-time Collaboration",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Real-time Collaboration",
          href: null,
        },
        {
          type: "text",
          text: {
            content: ": Work with team members seamlessly",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: ": Work with team members seamlessly",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-8098-8e1b-d7f295fd1d77",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "API Access",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "API Access",
          href: null,
        },
        {
          type: "text",
          text: {
            content: ": Fetch content programmatically",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: ": Fetch content programmatically",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-8009-9356-c900f6e7fe74",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T14:15:00.000Z",
    last_edited_time: "2025-09-18T14:16:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-8078-9c49-c169ece70b6a",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T13:47:00.000Z",
    last_edited_time: "2025-09-18T13:47:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-8071-b30b-cc173762bbd9",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T14:12:00.000Z",
    last_edited_time: "2025-09-18T19:37:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: true,
    archived: false,
    in_trash: false,
    type: "child_page",
    child_page: {
      title: "This is another page",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-808c-9d41-db2e0bda5303",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_2",
    heading_2: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Setting Up Your Project",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Setting Up Your Project",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "27254e30-0d66-80ee-bba3-f7260002f914",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-18T11:52:00.000Z",
    last_edited_time: "2025-09-18T11:52:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content:
              "To get started with your Nuxt 4 and Notion blog platform, follow these steps...",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text:
            "To get started with your Nuxt 4 and Notion blog platform, follow these steps...",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27354e30-0d66-80d0-8a78-ed72cdbeb29b",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-19T09:53:00.000Z",
    last_edited_time: "2025-09-19T09:53:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27354e30-0d66-80d7-ab57-c2877dc9c50e",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-19T09:53:00.000Z",
    last_edited_time: "2025-09-19T09:53:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "callout",
    callout: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "Call me out!",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Call me out!",
          href: null,
        },
      ],
      icon: {
        type: "emoji",
        emoji: "💡",
      },
      color: "gray_background",
    },
  },
  {
    object: "block",
    id: "27354e30-0d66-8050-89b8-d96e22187bd4",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-19T09:54:00.000Z",
    last_edited_time: "2025-09-19T09:54:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
  {
    object: "block",
    id: "27354e30-0d66-800c-992d-e516f89844bf",
    parent: {
      type: "page_id",
      page_id: "26f54e30-0d66-81da-adce-c8bf6ac8db28",
    },
    created_time: "2025-09-19T09:54:00.000Z",
    last_edited_time: "2025-09-19T09:54:00.000Z",
    created_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    last_edited_by: {
      object: "user",
      id: "3d2ee517-291d-4e9e-89bc-5432689d0e91",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [],
      color: "default",
    },
  },
];
</script>
