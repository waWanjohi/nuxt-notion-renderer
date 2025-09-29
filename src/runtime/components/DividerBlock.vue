<template>
  <hr class="border-gray-200 dark:border-gray-700 my-8">
</template>

<script setup lang="ts">
import type { DividerBlock } from '../types/notion-blocks'

interface Props {
  block: DividerBlock
}

defineProps<Props>()
</script>
