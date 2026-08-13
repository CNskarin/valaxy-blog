<script lang="ts" setup>
import type { Post } from 'valaxy'
import { formatDate } from 'valaxy'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps<{
  // FrontMatter
  frontmatter: Post
}>()

const { t } = useI18n()
const route = useRoute()

// 是否文章详情页（/posts/xxx）——只有详情页显示到分钟，列表/卡片显示日期
const isPostDetail = computed(() => /^\/posts\/.+/i.test(route.path))

const template = computed(() => isPostDetail.value ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD')
const timestampTemplate = computed(() => isPostDetail.value ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD HH:mm:ss')

function fmt(date?: string | number | Date, tpl?: string) {
  if (!date)
    return ''
  return formatDate(date, { template: tpl })
}
</script>

<template>
  <div v-if="frontmatter.date" class="post-time flex items-center gap-4">
    <span class="posted-time inline-flex-center gap-1" :title="t('post.posted') + fmt(frontmatter.date, timestampTemplate)">
      <div class="inline-block" i-ri-calendar-line />
      <time class="op-80">{{ fmt(frontmatter.date, template) }}</time>
    </span>

    <span
      v-if="frontmatter.updated && frontmatter.updated !== frontmatter.date"
      class="edited-time inline-flex-center gap-1" :title="t('post.edited') + fmt(frontmatter.updated, timestampTemplate)"
    >
      <div i-ri-calendar-2-line />
      <time class="op-80">{{ fmt(frontmatter.updated, template) }}</time>
    </span>
  </div>
</template>
