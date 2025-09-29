<template>
  <div
    class="mb-6 p-4 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
  >
    <div class="flex items-center bg-green-50 space-x-3">
      <div
        v-if="block.callout.icon"
        class="shrink-0 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
      >
        <span
          v-if="block.callout.icon.type === 'emoji'"
          class="text-lg"
        >
          {{ block.callout.icon.emoji }}
        </span>
        <img
          v-else-if="block.callout.icon.type === 'external'"
          :src="block.callout.icon.external?.url"
          alt="Callout icon"
          class="w-5 h-5"
        >
      </div>
      <div class="flex-1">
        <NotionRichTextRenderer :rich-text="block.callout.rich_text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CalloutBlock } from '../types/notion-blocks'

interface Props {
  block: CalloutBlock
}

defineProps<Props>()
</script>
