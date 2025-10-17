// Types for Notion blocks based on the sample data structure
export interface NotionBlock {
  object: 'block'
  id: string
  parent: {
    type: 'page_id'
    page_id: string
  }
  created_time: string
  last_edited_time: string
  created_by: {
    object: 'user'
    id: string
  }
  last_edited_by: {
    object: 'user'
    id: string
  }
  has_children: boolean
  archived: boolean
  in_trash: boolean
  type: BlockType
  [key: string]: any
}

export type BlockType
  = | 'heading_1'
    | 'heading_2'
    | 'heading_3'
    | 'paragraph'
    | 'bulleted_list_item'
    | 'numbered_list_item'
    | 'to_do'
    | 'toggle'
    | 'quote'
    | 'divider'
    | 'code'
    | 'image'
    | 'video'
    | 'file'
    | 'bookmark'
    | 'embed'
    | 'table'
    | 'table_row'
    | 'column_list'
    | 'column'
    | 'child_page'
    | 'child_database'
    | 'synced_block'
    | 'callout'

export interface RichText {
  type: 'text' | 'mention' | 'equation'
  text?: {
    content: string
    link: {
      url: string
    } | null
  }
  mention?: unknown
  equation?: {
    expression: string
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: string | null
}

export interface HeadingBlock extends NotionBlock {
  type: 'heading_1' | 'heading_2' | 'heading_3'
  heading_1?: {
    rich_text: RichText[]
    is_toggleable: boolean
    color: string
  }
  heading_2?: {
    rich_text: RichText[]
    is_toggleable: boolean
    color: string
  }
  heading_3?: {
    rich_text: RichText[]
    is_toggleable: boolean
    color: string
  }
}

export interface ParagraphBlock extends NotionBlock {
  type: 'paragraph'
  paragraph: {
    rich_text: RichText[]
    color: string
  }
}

export interface BulletedListItemBlock extends NotionBlock {
  type: 'bulleted_list_item'
  bulleted_list_item: {
    rich_text: RichText[]
    color: string
  }
}

export interface NumberedListItemBlock extends NotionBlock {
  type: 'numbered_list_item'
  numbered_list_item: {
    rich_text: RichText[]
    color: string
  }
}

export interface ToDoBlock extends NotionBlock {
  type: 'to_do'
  to_do: {
    rich_text: RichText[]
    checked: boolean
    color: string
  }
}

export interface QuoteBlock extends NotionBlock {
  type: 'quote'
  quote: {
    rich_text: RichText[]
    color: string
  }
}

export interface CalloutBlock extends NotionBlock {
  type: 'callout'
  callout: {
    rich_text: RichText[]
    icon: {
      type: 'emoji' | 'external' | 'file'
      emoji?: string
      external?: {
        url: string
      }
      file?: {
        url: string
        expiry_time: string
      }
    } | null
    color: string
  }
}

export interface CodeBlock extends NotionBlock {
  type: 'code'
  code: {
    caption: RichText[]
    rich_text: RichText[]
    language: string
  }
}

export interface DividerBlock extends NotionBlock {
  type: 'divider'
  divider: Record<string, never>
}

export interface ImageBlock extends NotionBlock {
  type: 'image'
  image: {
    caption: RichText[]
    type: 'external' | 'file'
    external?: {
      url: string
    }
    file?: {
      url: string
      expiry_time: string
    }
  }
}

export interface VideoBlock extends NotionBlock {
  type: 'video'
  video: {
    caption: RichText[]
    type: 'external' | 'file'
    external?: {
      url: string
    }
    file?: {
      url: string
      expiry_time: string
    }
  }
}

export interface BookmarkBlock extends NotionBlock {
  type: 'bookmark'
  bookmark: {
    caption: RichText[]
    url: string
  }
}

export interface EmbedBlock extends NotionBlock {
  type: 'embed'
  embed: {
    caption: RichText[]
    url: string
  }
}

export interface ChildPageBlock extends NotionBlock {
  type: 'child_page'
  child_page: {
    title: string
  }
}

// Union type for all possible block types
export type AnyNotionBlock
  = | HeadingBlock
    | ParagraphBlock
    | BulletedListItemBlock
    | NumberedListItemBlock
    | ToDoBlock
    | QuoteBlock
    | CalloutBlock
    | CodeBlock
    | DividerBlock
    | ImageBlock
    | VideoBlock
    | BookmarkBlock
    | EmbedBlock
    | ChildPageBlock
    | NotionBlock

export interface NotionBlocksResponse {
  object: 'list'
  results: AnyNotionBlock[]
  next_cursor: string | null
  has_more: boolean
  type: 'block_or_page'
  block: Record<string, never>
}
