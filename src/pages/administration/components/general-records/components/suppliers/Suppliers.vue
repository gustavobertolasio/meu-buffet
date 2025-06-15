<template>
    <DefaultRegisterContent :pageTitle="'Fornecedores'" :buttonCreateText="'Novo fornecedor'"
        :buttonDeleteManyText="'Deletar fornecedores'" :inputPlaceholder="'Buscar fornecedores'" :rows :columns>

    </DefaultRegisterContent>
</template>

<script setup>
import { ref } from 'vue'
import DefaultRegisterContent from '../../../../../../components/DefaultRegisterContent.vue'

const columns = ['ID', 'Nome', 'Tipo de fornecedor']

const rows = [
    [1, 'Distribuidora ABC', 'Bebidas'],
    [2, 'Floricultura Primavera', 'Decoração'],
]

function editarFornecedor(fornecedor) {
    console.log("Editar:", fornecedor)
}

function excluirFornecedor(fornecedor) {
    console.log("Excluir:", fornecedor)
}

</script>