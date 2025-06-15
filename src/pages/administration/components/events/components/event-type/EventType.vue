<template>
    <DefaultRegisterContent :pageTitle="'Tipo de eventos'" :buttonCreateText="'Novo tipo de evento'"
        :buttonDeleteManyText="'Deletar marcas'" :inputPlaceholder="'Buscar marcas'" :rows :columns>

    </DefaultRegisterContent>
</template>

<script setup>
import { ref } from 'vue'
import DefaultRegisterContent from '../../../../../../components/DefaultRegisterContent.vue';
const columns = ['ID', 'Nome']

const rows = [
    [1, 'Aniversário infantil'],
    [2, 'Aniversário adulto'],
    [3, 'Festa de debutante'],
    [4, 'Chá revelação'],
    [5, 'Casamento'],
    [6, 'Bodas'],
    [7, 'Festa temática'],
    [8, 'Festa de formatura'],
]

function editarunidade(unidade) {
    console.log("Editar:", unidade)
}

function excluirunidade(unidade) {
    console.log("Excluir:", unidade)
}

</script>