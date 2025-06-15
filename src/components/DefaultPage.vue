<template>
    <div class="flex flex-col w-full h-full">
        <h2 class="text-3xl mb-6">
            {{ pageTitle }}
        </h2>
        <div class="bg-dark-translucent rounded-md p-6">
            <RouterView />
        </div>
    </div>
</template>

<script setup>

defineProps({
    pageTitle: {
        type: String,
        required: true,
    },
});
</script>