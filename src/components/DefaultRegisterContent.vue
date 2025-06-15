<template>
    <h3 class="text-2xl mb-6">
        {{ pageTitle }}
    </h3>



    <div class="flex justify-end gap-4 mb-6">
        <button class=" hover:bg-dark bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
            {{ buttonCreateText }}
        </button>

        <button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            {{ buttonDeleteManyText }}
        </button>
    </div>

    <div class="relative w-full mb-6">
        <input type="text" :placeholder="inputPlaceholder"
            class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
        <span class="absolute left-3 top-2.5 text-gray-400">
            🔍
        </span>
    </div>

    <table class="min-w-full rounded-md overflow-hidden shadow-md bg-dark-translucent text-white">
        <thead class="bg-[var(--color-hover-row)] text-[var(--text-muted)] uppercase text-sm">
            <tr>
                <th v-for="column in columns" class="px-6 py-3 text-left font-semibold">{{ column }}</th>
                <th class="px-6 py-3 text-center font-semibold">Editar</th>
                <th class="px-6 py-3 text-center font-semibold">Excluir</th>
            </tr>
        </thead>
        <tbody>
            {{ console.log(columns) }}
            <tr v-for="row in rows"  class="hover:bg-[var(--color-hover-row)] transition">
                {{ console.log(row) }}
                <td v-for="content in row" class="px-6 py-4 text-sm">{{ content }}</td>
                <td class="px-6 py-4 text-center">
                    <button @click="editarunidade(row[0])" class="text-[var(--color-primary)] hover:underline">
                        ✏️ Editar
                    </button>
                </td>
                <td class="px-6 py-4 text-center">
                    <button @click="excluirunidade(row[0])" class="text-[var(--color-danger)] hover:underline">
                        🗑️ Excluir
                    </button>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- {{ children }} -->

</template>

<script setup>

defineProps({
    pageTitle: {
        type: String,
        required: true,
    },
    buttonCreateText: {
        type: String,
        required: true,
    },
    buttonDeleteManyText: {
        type: String,
        required: true,
    },
    inputPlaceholder: {
        type: String,
        required: true,
    },
    columns: {
        type: Array,
        required: true,
    },
    rows: {
        type: Array,
        required: true,
    }
});

import { ref } from 'vue'
function editarunidade(unidade) {
    console.log("Editar:", unidade)
}

function excluirunidade(unidade) {
    console.log("Excluir:", unidade)
}

</script>