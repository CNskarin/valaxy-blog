<script setup lang="ts">
import GiscusClient from 'valaxy-addon-giscus/components/GiscusClient.vue'
</script>

<template>
  <YunCard w="full" p="4" class="comment yun-comment sm:p-6 lg:px-12 xl:px-16">
    <ClientOnly>
      <GiscusClient />
    </ClientOnly>
  </YunCard>
</template>
