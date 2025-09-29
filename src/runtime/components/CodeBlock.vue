<template>
  <div class="mb-6">
    <pre class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
      <code :class="`language-${block.code.language || 'text'}`">{{ codeContent }}</code>
    </pre>
    <div
      v-if="block.code.caption.length > 0"
      class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center"
    >
      <NotionRichTextRenderer :rich-text="block.code.caption" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CodeBlock } from '../types/notion-blocks'

interface Props {
  block: CodeBlock
}

const props = defineProps<Props>()

const codeContent = computed(() => {
  return props.block.code.rich_text.map(item => item.plain_text).join('')
})
</script>
