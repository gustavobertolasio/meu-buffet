<template>
    <aside class="w-64 bg-dark-translucent shadow-md min-h-screen">
        <div class="p-4 text-xl font-bold text-white">Meu buffet</div>
        <nav class="mt-4">
            <ul class="w-full flex justify-center mb-6 px-4">
                <button
                    class="rounded-xl w-full bg-accent hover:bg-accent-hover px-6 py-2 transition cursor-pointer">Orçar
                    novo
                    evento</button>
            </ul>
            <ul>
                <MenuItem class="divide-y-4 divide-y-reverse" v-for="item in menuItems" :key="item.name" :item="item" />
            </ul>
        </nav>
    </aside>
</template>

<script setup>
import MenuItem from './MenuItem.vue';

defineProps({
    menuItems: {
        type: Array,
        required: true,
    },
});
</script>