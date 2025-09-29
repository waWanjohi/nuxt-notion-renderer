<template>
  <span
    v-for="(textItem, index) in richText"
    :key="index"
  >
    <a
      v-if="textItem.href"
      :href="textItem.href"
      target="_blank"
      rel="noopener noreferrer"
      :class="getTextClasses(textItem)"
      class="text-blue-600 dark:text-blue-400 hover:underline"
    >
      {{ textItem.plain_text }}
    </a>
    <span
      v-else
      :class="getTextClasses(textItem)"
    >
      {{ textItem.plain_text }}
    </span>
  </span>
</template>

<script setup lang="ts">
import type { RichText } from '../types/notion-blocks'

interface Props {
  richText: RichText[]
}

defineProps<Props>()

function getTextClasses(textItem: RichText): string {
  const classes: string[] = []

  if (textItem.annotations.bold) classes.push('font-bold')
  if (textItem.annotations.italic) classes.push('italic')
  if (textItem.annotations.strikethrough) classes.push('line-through')
  if (textItem.annotations.underline) classes.push('underline')
  if (textItem.annotations.code) {
    classes.push('bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono')
  }

  // Handle colors
  if (textItem.annotations.color !== 'default') {
    switch (textItem.annotations.color) {
      case 'gray':
        classes.push('text-gray-600 dark:text-gray-400')
        break
      case 'brown':
        classes.push('text-amber-700 dark:text-amber-400')
        break
      case 'orange':
        classes.push('text-orange-600 dark:text-orange-400')
        break
      case 'yellow':
        classes.push('text-yellow-600 dark:text-yellow-400')
        break
      case 'green':
        classes.push('text-green-600 dark:text-green-400')
        break
      case 'blue':
        classes.push('text-blue-600 dark:text-blue-400')
        break
      case 'purple':
        classes.push('text-purple-600 dark:text-purple-400')
        break
      case 'pink':
        classes.push('text-pink-600 dark:text-pink-400')
        break
      case 'red':
        classes.push('text-red-600 dark:text-red-400')
        break
      default:
        break
    }
  }

  return classes.join(' ')
}
</script>
