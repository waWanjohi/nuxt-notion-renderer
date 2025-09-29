<template>
  <div class="mb-6">
    <img
      :src="imageUrl"
      :alt="imageCaption || 'Image'"
      class="w-full h-auto rounded-lg shadow-md"
      loading="lazy"
    >
    <div
      v-if="block.image.caption.length > 0"
      class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center"
    >
      <NotionRichTextRenderer :rich-text="block.image.caption" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ImageBlock } from '../types/notion-blocks'

interface Props {
  block: ImageBlock
}

const props = defineProps<Props>()

const imageUrl = computed(() => {
  if (props.block.image.type === 'external') {
    return props.block.image.external?.url
  }
  else if (props.block.image.type === 'file') {
    return props.block.image.file?.url
  }
  return ''
})

const imageCaption = computed(() => {
  return props.block.image.caption.map(item => item.plain_text).join('')
})
</script>
