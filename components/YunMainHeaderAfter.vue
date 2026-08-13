<script setup lang="ts">
import { useFrontmatter, usePostCollections } from 'valaxy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const frontmatter = useFrontmatter()
const route = useRoute()

const isCollectionRoute = computed(() => route.path.startsWith('/collections/'))
const postCollections = usePostCollections(computed(() => route.path))
</script>

<template>
  <YunPostMeta :frontmatter="frontmatter" />

  <ClientOnly>
    <div class="mt-1 post-vercount inline-flex-center gap-4" text="sm" m="t-1">
      <VercountPageViews :frontmatter="frontmatter" />
    </div>
  </ClientOnly>

  <template v-if="!isCollectionRoute && postCollections.length">
    <YunCollectionNav
      v-for="{ collection, itemIndex } in postCollections"
      :key="collection.key"
      :collection="collection"
      :current-index="itemIndex"
    />
  </template>

  <YunPostCategoriesAndTags class="mt-2" :frontmatter="frontmatter" />
</template>
