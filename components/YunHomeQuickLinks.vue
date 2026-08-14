<script lang="ts" setup>
// 首页快捷入口卡片：友链 + 留言板
const cards = [
  {
    title: '友链',
    desc: '交换友链 · 认识更多博客',
    link: '/links/',
    icon: 'i-ri-link',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: '留言板',
    desc: '有什么想说的，留言给我',
    link: '/messageboard/',
    icon: 'i-ri-chat-smile-line',
    color: 'from-violet-500 to-fuchsia-400',
  },
]
</script>

<template>
  <div class="home-quick-links w-full flex gap-4 flex-col sm:flex-row mt-6 px-4">
    <AppLink
      v-for="card in cards"
      :key="card.link"
      :to="card.link"
      class="quick-link-card group flex-1 flex items-center gap-4 rounded-lg border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 transition-all hover:scale-[1.02] hover:shadow-lg"
    >
      <div
        class="w-12 h-12 shrink-0 flex-center rounded-xl bg-gradient-to-br text-white text-2xl shadow-md"
        :class="card.color"
      >
        <div :class="card.icon" />
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-lg font-bold" text="light">
          {{ card.title }}
        </div>
        <div class="text-sm opacity-70 mt-0.5" text="light">
          {{ card.desc }}
        </div>
      </div>
      <div class="i-ri-arrow-right-s-line text-xl opacity-40 group-hover:opacity-90 group-hover:translate-x-0.5 transition-all" text="light" />
    </AppLink>
  </div>
</template>
