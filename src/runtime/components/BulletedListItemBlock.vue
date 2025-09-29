<template>
  <li class="mb-2">
    <NotionRichTextRenderer :rich-text="block.bulleted_list_item.rich_text" />
  </li>
</template>

<script setup lang="ts">
import type { BulletedListItemBlock } from '../types/notion-blocks'

interface Props {
  block: BulletedListItemBlock
}

defineProps<Props>()
</script>
