<template>
  <p
    v-if="block.paragraph.rich_text.length > 0"
    class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
  >
    <NotionRichTextRenderer :rich-text="block.paragraph.rich_text" />
  </p>
  <div
    v-else
    class="mb-4"
  />
</template>

<script setup lang="ts">
import type { ParagraphBlock } from '../types/notion-blocks'

interface Props {
  block: ParagraphBlock
}

defineProps<Props>()
</script>
