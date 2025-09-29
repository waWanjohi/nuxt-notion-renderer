<template>
  <component
    :is="headingTag"
    :class="headingClasses"
  >
    <NotionRichTextRenderer :rich-text="headingContent.rich_text" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HeadingBlock } from '../types/notion-blocks'

interface Props {
  block: HeadingBlock
}

const props = defineProps<Props>()

const headingTag = computed(() => {
  switch (props.block.type) {
    case 'heading_1':
      return 'h1'
    case 'heading_2':
      return 'h2'
    case 'heading_3':
      return 'h3'
    default:
      return 'h1'
  }
})

const headingContent = computed(() => {
  return props.block[props.block.type] || { rich_text: [], is_toggleable: false, color: 'default' }
})

const headingClasses = computed(() => {
  const baseClasses = ['font-bold', 'text-gray-900', 'dark:text-white', 'mb-4', 'mt-8']

  switch (props.block.type) {
    case 'heading_1':
      baseClasses.push('text-3xl', 'sm:text-4xl', 'lg:text-5xl', 'leading-tight')
      break
    case 'heading_2':
      baseClasses.push('text-2xl', 'sm:text-3xl', 'lg:text-4xl', 'leading-tight')
      break
    case 'heading_3':
      baseClasses.push('text-xl', 'sm:text-2xl', 'lg:text-3xl', 'leading-tight')
      break
  }

  return baseClasses.join(' ')
})
</script>
