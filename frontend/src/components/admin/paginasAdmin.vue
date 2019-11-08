<template>
    <div class="paginas-admin">
        <tituloPagina icon="fa fa-cogs" main=" Administração do Sistema"/>
            <div title="Tabela de Processos">
                <tabelaAdmin/>
            </div>
    </div>
</template>

<script>

import tituloPagina from '@/components/template/tituloPagina'
import tabelaAdmin from './tabelaAdmin'

export default {
  nome: 'paginasAdmin',
  components: { tituloPagina, tabelaAdmin}
};
</script>

<style>

</style>