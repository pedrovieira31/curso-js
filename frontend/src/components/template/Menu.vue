<template>
    <aside class = "menu" v-show="isMenuVisible">

    </aside>
    </template>

<script>
import { mapState } from 'vuex'


export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #424242, #858484);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer{
        grid-area: menu;
        background: linear-gradient(to right,#858484,#DDD);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>