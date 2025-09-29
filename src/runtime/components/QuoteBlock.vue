<template>
  <blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-6 py-2 mb-6 italic text-gray-700 dark:text-gray-300">
    <NotionRichTextRenderer :rich-text="block.quote.rich_text" />
  </blockquote>
</template>

<script setup lang="ts">
import type { QuoteBlock } from '../types/notion-blocks'

interface Props {
  block: QuoteBlock
}

defineProps<Props>()
</script>
