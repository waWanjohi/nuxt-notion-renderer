<template>
  <div class="notion-video-block">
    <div
      v-if="videoUrl"
      class="video-wrapper"
    >
      <!-- YouTube embed -->
      <iframe
        v-if="isYouTube"
        :src="youtubeEmbedUrl"
        :title="caption || 'YouTube video'"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video-iframe"
      />

      <!-- Vimeo embed -->
      <iframe
        v-else-if="isVimeo"
        :src="vimeoEmbedUrl"
        :title="caption || 'Vimeo video'"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        class="video-iframe"
      />

      <!-- Direct video URL -->
      <video
        v-else
        controls
        class="video-player"
        :poster="posterUrl"
      >
        <source
          :src="videoUrl"
          :type="videoType"
        >
        Your browser does not support the video tag.
      </video>
    </div>

    <p
      v-if="caption"
      class="video-caption"
    >
      {{ caption }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  block: {
    type: Object,
    required: true,
  },
})

const videoUrl = computed(() => {
  return (
    props.block?.video?.external?.url || props.block?.video?.file?.url || ''
  )
})

const caption = computed(() => {
  const captionArray = props.block?.video?.caption || []
  return captionArray.map((text: { plain_text: string }) => text.plain_text).join('')
})

const posterUrl = computed(() => {
  return props.block?.video?.poster || ''
})

const isYouTube = computed(() => {
  return (
    videoUrl.value.includes('youtube.com')
    || videoUrl.value.includes('youtu.be')
  )
})

const isVimeo = computed(() => {
  return videoUrl.value.includes('vimeo.com')
})

const youtubeEmbedUrl = computed(() => {
  if (!isYouTube.value) return ''

  let videoId = ''
  if (videoUrl.value.includes('youtu.be')) {
    videoId = videoUrl.value.split('/').pop()
  }
  else {
    const match = videoUrl.value.match(/[?&]v=([^&]+)/)
    videoId = match ? match[1] : ''
  }

  return `https://www.youtube.com/embed/${videoId}`
})

const vimeoEmbedUrl = computed(() => {
  if (!isVimeo.value) return ''

  const match = videoUrl.value.match(/vimeo\.com\/(\d+)/)
  const videoId = match ? match[1] : ''

  return `https://player.vimeo.com/video/${videoId}`
})

const videoType = computed(() => {
  const ext = videoUrl.value.split('.').pop().toLowerCase()
  const types = {
    mp4: 'video/mp4',
    webm: 'video/webm',
    ogv: 'video/ogg',
  }
  return types[ext] || 'video/mp4'
})
</script>

<style scoped>
.notion-video-block {
  margin: 1.5rem 0;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
}

.video-iframe,
.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.video-player {
  object-fit: contain;
  background-color: #000;
}

.video-caption {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .video-wrapper {
    background-color: #1f2937;
  }

  .video-caption {
    color: #9ca3af;
  }
}
</style>
