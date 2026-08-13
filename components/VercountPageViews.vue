<script lang="ts" setup>
import type { Post } from 'valaxy'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  frontmatter?: Post
}>()

const pv = ref<string | number>('-')

function fetchPv(href: string) {
  fetch('https://cn.vercount.one/api/v2/log?jsonpCallback=VisitorCountCallback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: href }),
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Network response was not ok.`)
      return response.json()
    })
    .then((response) => {
      const data = response.data
      if (data && data.page_pv !== undefined)
        pv.value = data.page_pv
    })
    .catch((error) => {
      console.error('Error fetching page view count:', error)
    })
}

onMounted(() => {
  // 优先用文章自身路径统计；否则退回当前页面 URL
  const path = props.frontmatter?.path
  const base = window.location.origin
  const href = path && path.startsWith('/')
    ? `${base}${path}`
    : window.location.href
  fetchPv(href)
})
</script>

<template>
  <span class="inline-flex-center gap-1" title="文章阅读量">
    <i class="i-ri-eye-line" />
    <span class="page-pv">{{ pv }}</span>
    <span class="op-60 text-xs">次阅读</span>
  </span>
</template>
