<template>
    <li>
        <div v-if="item.children?.length" class="block py-2 pr-4 transition-colors duration-200"
            :class="[styleClass, paddingClass, borderClass]">
            {{ item.name }}
        </div>
        <RouterLink v-else :to="item.path"
            class="block py-2 pr-4 transition-colors duration-200 hover:bg-[var(--color-hover)]"
            :class="[styleClass, paddingClass, borderClass]">
            {{ item.name }}
        </RouterLink>

        <ul v-if="item.children?.length">
            <MenuItem v-for="child in item.children" :key="child.name" :item="child" :depth="depth + 1" />
        </ul>
    </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    item: { type: Object, required: true },
    depth: { type: Number, default: 0 },
})

// Estilo visual por profundidade
const styleClass = computed(() => {
    if (props.depth === 0) {
        return 'text-white font-semibold text-base  border-dark-translucent'
    } else if (props.depth === 1) {
        return 'text-white font-medium text-sm hover:text-white '
    } else {
        return 'text-[var(--color-muted)] text-sm italic hover:text-white '
    }
})

// Padding controlado
const paddingClass = computed(() => {
    const paddingMap = ['pl-4', 'pl-6', 'pl-8', 'pl-10', 'pl-12', 'pl-14']
    return paddingMap[Math.min(props.depth, paddingMap.length - 1)]
})

// Borda apenas para o menu principal
const borderClass = computed(() => {
    return props.depth === 0 ? 'border-l-1 border-[var(--color-primary)]' : ''
})
</script>
