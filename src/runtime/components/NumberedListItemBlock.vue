<template>
  <li class="mb-2">
    <NotionRichTextRenderer :rich-text="block.numbered_list_item.rich_text" />
  </li>
</template>

<script setup lang="ts">
import type { NumberedListItemBlock } from '../types/notion-blocks'

interface Props {
  block: NumberedListItemBlock
}

defineProps<Props>()
</script>
