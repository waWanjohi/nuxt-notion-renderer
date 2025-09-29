<template>
  <div class="flex items-start space-x-3 mb-3 bg-green-50">
    <input
      type="checkbox"
      :model-value="block.to_do.checked"
      disabled
    >
    <div
      :class="{
        'line-through text-gray-500 dark:text-gray-400': block.to_do.checked,
      }"
    >
      <NotionRichTextRenderer :rich-text="block.to_do.rich_text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ToDoBlock } from '../types/notion-blocks'

interface Props {
  block: ToDoBlock
}

defineProps<Props>()
</script>
