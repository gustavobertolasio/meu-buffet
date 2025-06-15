<template>
    <DefaultRegisterContent :pageTitle="'Marcas'" :buttonCreateText="'Nova marca'"
        :buttonDeleteManyText="'Deletar marcas'" :inputPlaceholder="'Buscar marcas'" :rows :columns>

    </DefaultRegisterContent>
</template>

<script setup>
import { ref } from 'vue'
import DefaultRegisterContent from '../../../../../../components/DefaultRegisterContent.vue'
const columns = ['ID', 'Nome']

const rows = [
    [1, 'Tivoli'],
    [2, 'Paraíso Kids'],
    [3, 'Toca do coelho'],
]

function editarunidade(unidade) {
    console.log("Editar:", unidade)
}

function excluirunidade(unidade) {
    console.log("Excluir:", unidade)
}

</script>