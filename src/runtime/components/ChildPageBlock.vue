<template>
  <div class="mb-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
    <div class="flex items-start">
      <div class="h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
          <path
            fill="currentColor"
            d="M8 12v-2h8v2zm0-4V6h8v2zm-2 6h7.5q.725 0 1.35.313t1.05.887l2.1 2.75V4H6zm0 6h11.05l-2.725-3.575q-.15-.2-.362-.312T13.5 16H6zm12 2H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22M6 20V4zm0-4v-2z"
          />
        </svg>
      </div>
      <div>
        <h3 class="font-medium text-blue-900">
          {{ block.child_page.title }}
        </h3>
        <p class="text-sm text-blue-800 mt-1">
          An embedded child page within this page.
        </p>
      </div>
    </div>
  </div>

  <div class="whitespace-pre-line">
    <!-- Placeholder for child page content -->
    <p class="text-sm text-gray-500">
      (Content of the child page would be displayed here if supported.)
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ChildPageBlock } from '../types/notion-blocks'

interface Props {
  block: ChildPageBlock
}

defineProps<Props>()
</script>
