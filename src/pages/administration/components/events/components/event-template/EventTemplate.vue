<template>
    <DefaultRegisterContent :pageTitle="'Modelos de evento'" :buttonCreateText="'Novo modelo de evento'"
        :buttonDeleteManyText="'Deletar modelos'" :inputPlaceholder="'Buscar modelos'" :rows :columns>
    </DefaultRegisterContent>
</template>

<script setup>
import { ref } from 'vue'
import DefaultRegisterContent from '../../../../../../components/DefaultRegisterContent.vue';
const columns = ['ID', 'Nome', 'Tipo de evento']

const rows = [
    [1, 'Standard', 'Aniversario infantil'],
    [2, 'Inesquecivel', 'Casamento'],
    [3, 'Plus', 'Aniversario adulto'],
]

function editarunidade(unidade) {
    console.log("Editar:", unidade)
}

function excluirunidade(unidade) {
    console.log("Excluir:", unidade)
}

</script>