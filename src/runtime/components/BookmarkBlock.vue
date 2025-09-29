<template>
  <UCard class="mb-6">
    <a
      :href="block.bookmark.url"
      target="_blank"
      rel="noopener noreferrer"
      class="block hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <div class="flex items-center space-x-3">
        <svg
          class="w-5 h-5 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
        <div class="flex-1">
          <div class="text-blue-600 dark:text-blue-400 hover:underline">
            {{ block.bookmark.url }}
          </div>
          <div
            v-if="block.bookmark.caption.length > 0"
            class="text-sm text-gray-600 dark:text-gray-400 mt-1"
          >
            <NotionRichTextRenderer :rich-text="block.bookmark.caption" />
          </div>
        </div>
      </div>
    </a>
  </UCard>
</template>

<script setup lang="ts">
import type { BookmarkBlock } from '../types/notion-blocks'

interface Props {
  block: BookmarkBlock
}

defineProps<Props>()
</script>
