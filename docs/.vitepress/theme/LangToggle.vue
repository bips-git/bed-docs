<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import { computed } from 'vue'

const { site, lang } = useData()
const route = useRoute()
const isBn = computed(() => lang.value.startsWith('bn'))

// route.path already includes the configured base (e.g. /bed-docs/),
// so we must strip it before doing bn/en path math, then let withBase()
// add it back exactly once. Doing math directly on route.path is what
// caused the base to compound on every click.
function stripBase(path) {
  const base = site.value.base
  if (base !== '/' && path.startsWith(base)) {
    return '/' + path.slice(base.length)
  }
  return path
}

const targetPath = computed(() => {
  const p = stripBase(route.path)
  return isBn.value
    ? (p.replace(/^\/bn\/?/, '/') || '/')
    : (p === '/' ? '/bn/' : `/bn${p}`)
})

const targetHref = computed(() => withBase(targetPath.value))

function remember() {
  localStorage.setItem('bed-docs-lang', isBn.value ? 'en' : 'bn')
}
</script>

<template>
  <a :href="targetHref" class="lang-toggle" @click="remember" :aria-label="isBn ? 'Switch to English' : 'বাংলায় দেখুন'">
    <svg class="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
    </svg>
    <span class="lang-label">{{ isBn ? 'বাং' : 'EN' }}</span>
  </a>
</template>

<style scoped>
.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: border-color .15s ease, color .15s ease, background-color .15s ease;
}

.lang-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-elv);
}

.globe-icon {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.lang-label {
  line-height: 1;
}
</style>
