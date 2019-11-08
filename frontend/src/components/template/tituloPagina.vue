<template>
    <div class="titulo-pagina">
        <h1><i v-if="icon" :class="icon"></i>{{main}}</h1>
        <h2>{{sub}}</h2>
        <hr>
    </div>
</template>

<script>
export default {
    nome:'TituloPagina',
    props:['icon','main','sub']
}
</script>

<style>
    .titulo-pagina h1{
        margin: 0px;
    }
    .titulo-pagina h2{
        color: #777;
        margin-top: 5px;
        font-size: 1.3rem;
    }
</style>