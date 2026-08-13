<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount'

const { page } = useAddonVercount()
</script>

<template>
  <span class="inline-flex-center gap-1" title="文章阅读量">
    <i class="i-ri-eye-line" />
    <span class="page-pv">{{ page.pv }}</span>
    <span class="op-60 text-xs">次阅读</span>
  </span>
</template>
