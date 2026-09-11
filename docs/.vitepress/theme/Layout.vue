<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute, withBase } from 'vitepress'
import { onMounted } from 'vue'
import LangToggle from './LangToggle.vue'

const { Layout } = DefaultTheme
const { lang } = useData()
const route = useRoute()

onMounted(() => {
  const saved = localStorage.getItem('bed-docs-lang')
  if (!saved) return
  const currentIsBn = lang.value.startsWith('bn')
  const wantsBn = saved === 'bn'
  // only auto-redirect from a homepage to avoid yanking mid-article
  if (currentIsBn !== wantsBn && (route.path === '/' || route.path === '/bn/')) {
    window.location.replace(withBase(wantsBn ? '/bn/' : '/'))
  }
})
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <LangToggle />
    </template>
  </Layout>
</template>
