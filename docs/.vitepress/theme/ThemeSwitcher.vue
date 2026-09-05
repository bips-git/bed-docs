<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const STORAGE_KEY = 'qubes-theme'

const themes = [
  { id: 'default', label: 'Default', swatch: 'linear-gradient(135deg, #0071e3 50%, #1d1d1f 50%)' },
  { id: 'teal', label: 'Teal', swatch: '#0d9488' },
  { id: 'nord', label: 'Nord', swatch: '#88c0d0' },
  { id: 'neon', label: 'Neon', swatch: 'linear-gradient(135deg, #00e5ff 50%, #ff2fb0 50%)' },
  { id: 'navy-blue', label: 'Navy Blue', swatch: '#4d8dff' },
]

const activeId = ref('default')
const open = ref(false)
const root = ref(null)

function current() {
  return themes.find((t) => t.id === activeId.value) || themes[0]
}

function apply(id) {
  activeId.value = id
  if (id === 'default') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', id)
  }
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch (e) {
    // localStorage unavailable (private mode etc.) — theme just won't persist
  }
}

function select(id) {
  apply(id)
  open.value = false
}

function onDocClick(e) {
  if (root.value && !root.value.contains(e.target)) open.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  let saved = 'default'
  try {
    saved = localStorage.getItem(STORAGE_KEY) || 'default'
  } catch (e) {
    // ignore, fall back to default
  }
  apply(saved)
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="qubes-theme-picker" ref="root">
    <button
      class="picker-trigger"
      type="button"
      :aria-expanded="open"
      aria-haspopup="listbox"
      aria-label="Choose theme"
      @click="open = !open"
    >
      <span class="trigger-swatch" :style="{ background: current().swatch }" />
      <svg class="chevron" :class="{ flipped: open }" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <transition name="pop">
      <ul v-if="open" class="picker-menu" role="listbox" aria-label="Theme">
        <li
          v-for="t in themes"
          :key="t.id"
          role="option"
          :aria-selected="t.id === activeId"
          class="picker-item"
          :class="{ active: t.id === activeId }"
          @click="select(t.id)"
        >
          <span class="item-swatch" :style="{ background: t.swatch }" />
          <span class="item-label">{{ t.label }}</span>
          <svg v-if="t.id === activeId" class="check" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.2L5 8.7L9.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.qubes-theme-picker {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.picker-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.1s ease;
}

.picker-trigger:hover {
  border-color: var(--vp-c-brand-1);
}

.picker-trigger:active {
  transform: scale(0.96);
}

.trigger-swatch {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

.chevron {
  color: var(--vp-c-text-2);
  transition: transform 0.18s ease;
}

.chevron.flipped {
  transform: rotate(180deg);
}

.picker-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  left: auto;
  min-width: 152px;
  margin: 0;
  padding: 6px;
  list-style: none;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.08);
  z-index: 100;
}

.picker-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  transition: background-color 0.12s ease;
  white-space: nowrap;
}

.picker-item:hover {
  background: var(--vp-c-bg-alt);
}

.picker-item.active {
  background: var(--vp-c-bg-alt);
  font-weight: 600;
}

.item-swatch {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

.item-label {
  flex: 1;
}

.check {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.14s ease, transform 0.14s ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
}

@media (max-width: 420px) {
  .picker-menu {
    min-width: 132px;
    max-width: calc(100vw - 32px);
  }
}
</style>
