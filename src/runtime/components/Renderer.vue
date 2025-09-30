<template>
  <div class="notion-renderer">
    <TransitionGroup
      tag="div"
      name="slide-up"
      appear
      mode="out-in"
    >
      <template
        v-for="(block, index) in blocks"
        :key="block.id"
      >
        <!-- Group consecutive list items into proper lists -->
        <ul
          v-if="
            block.type === 'bulleted_list_item'
              && !isConsecutiveListItem(blocks, index, 'bulleted_list_item')
          "
          class="list-disc list-inside mb-4 ml-4 space-y-1"
        >
          <NotionBulletedListItemBlock
            :block="block as BulletedListItemBlock"
          />
          <!-- Render consecutive list items -->
          <template
            v-for="(nextBlock, nextIndex) in getConsecutiveListItems(
              blocks,
              index,
              'bulleted_list_item',
            )"
            :key="`${nextBlock.id}-${nextIndex}`"
          >
            <NotionBulletedListItemBlock
              :block="nextBlock as BulletedListItemBlock"
            />
          </template>
        </ul>
        <ol
          v-else-if="
            block.type === 'numbered_list_item'
              && !isConsecutiveListItem(blocks, index, 'numbered_list_item')
          "
          class="list-decimal list-inside mb-4 ml-4 space-y-1"
        >
          <NotionNumberedListItemBlock
            :block="block as NumberedListItemBlock"
          />
          <!-- Render consecutive list items -->
          <template
            v-for="(nextBlock, nextIndex) in getConsecutiveListItems(
              blocks,
              index,
              'numbered_list_item',
            )"
            :key="nextBlock.id"
          >
            <NotionNumberedListItemBlock
              :block="nextBlock as NumberedListItemBlock"
            />
          </template>
        </ol>
        <!-- Skip individual list items that are part of a list group -->
        <template v-else-if="!isPartOfListGroup(blocks, index)">
          <!-- Headings -->
          <NotionHeadingBlock
            v-if="isHeadingBlock(block)"
            :block="block as HeadingBlock"
          />
          <!-- Paragraph -->
          <NotionParagraphBlock
            v-else-if="block.type === 'paragraph'"
            :block="block as ParagraphBlock"
          />
          <!-- To-Do -->
          <NotionToDoBlock
            v-else-if="block.type === 'to_do'"
            :block="block as ToDoBlock"
          />
          <!-- Quote -->
          <NotionQuoteBlock
            v-else-if="block.type === 'quote'"
            :block="block as QuoteBlock"
          />
          <!-- Callout -->
          <NotionCalloutBlock
            v-else-if="block.type === 'callout'"
            :block="block as CalloutBlock"
          />
          <!-- Code -->
          <NotionCodeBlock
            v-else-if="block.type === 'code'"
            :block="block as CodeBlock"
          />
          <!-- Divider -->
          <NotionDividerBlock
            v-else-if="block.type === 'divider'"
            :block="block as DividerBlock"
          />
          <!-- Image -->
          <NotionImageBlock
            v-else-if="block.type === 'image'"
            :block="block as ImageBlock"
          />
          <!-- Bookmark -->
          <NotionBookmarkBlock
            v-else-if="block.type === 'bookmark'"
            :block="block as BookmarkBlock"
          />
          <!-- Video -->
          <NotionVideoBlock
            v-else-if="block.type === 'video'"
            :block="block"
          />
          <!-- Child Page -->
          <NotionChildPageBlock
            v-else-if="block.type === 'child_page'"
            :block="block as ChildPageBlock"
          />
          <!-- Unsupported block type -->
          <div
            v-else
            class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 border-l-4 border-yellow-400"
          >
            <div class="flex items-center space-x-2">
              <Icon
                name="i-heroicons-exclamation-triangle"
                class="w-5 h-5 text-yellow-600"
              />
              <span class="text-sm text-gray-600 dark:text-gray-400">
                Unsupported block type: {{ block.type }}
              </span>
            </div>
          </div>
        </template>
      </template>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import type {
  AnyNotionBlock,
  HeadingBlock,
  ParagraphBlock,
  BulletedListItemBlock,
  NumberedListItemBlock,
  ToDoBlock,
  QuoteBlock,
  CalloutBlock,
  CodeBlock,
  DividerBlock,
  ImageBlock,
  BookmarkBlock, ChildPageBlock,
} from '../types/notion-blocks'

interface Props {
  blocks: AnyNotionBlock[]
}

defineProps<Props>()

// Helper functions
function isHeadingBlock(block: AnyNotionBlock): block is HeadingBlock {
  return ['heading_1', 'heading_2', 'heading_3'].includes(block.type)
}

// Check if current block is a consecutive list item (not the first one in a group)
function isConsecutiveListItem(
  blocks: AnyNotionBlock[],
  index: number,
  listType: string,
): boolean {
  if (index === 0) return false
  return blocks[index - 1]?.type === listType
}

// Check if current block is part of a list group (for skipping individual rendering)
function isPartOfListGroup(blocks: AnyNotionBlock[], index: number): boolean {
  const block = blocks[index]
  if (!['bulleted_list_item', 'numbered_list_item'].includes(block.type))
    return false

  // If it's the first item in a list, it's not part of a group (it starts the group)
  if (index === 0) return false
  return blocks[index - 1]?.type === block.type
}

// Get consecutive list items after the current index
function getConsecutiveListItems(
  blocks: AnyNotionBlock[],
  startIndex: number,
  listType: string,
): AnyNotionBlock[] {
  const items: AnyNotionBlock[] = []

  for (let i = startIndex + 1; i < blocks.length; i++) {
    if (blocks[i].type === listType) {
      items.push(blocks[i])
    }
    else {
      break
    }
  }

  return items
}
</script>
