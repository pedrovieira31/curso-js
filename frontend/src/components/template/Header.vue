<template>
    <header class ="header">
        <a class="toggle">
            <i class="fa fa-lg"></i>
        </a>
        <h1 class="titulo">{{titulo}}
        </h1>
        <menuUsuario v-if="!hidemenuUsuario"/>
        </header>
</template>

<script>
import menuUsuario from './menuUsuario'
export default {
    name: 'Header',
    components:{menuUsuario},
    props:{
        titulo: String,
        hidemenuUsuario: Boolean
    },
    computed:{
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .titulo{
        color: #fff;
        flex-grow: 1;
        text-align: center;
    }
    .titulo a{
        color: #fff;
        text-decoration: none;
    }
</style>