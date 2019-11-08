<template>
    <div class="menu-usuario">
        <div class="botao-usuario">
            <span class="d-none d-sm-block">{{usuario.nome}}</span>
            <div class="imagem-usuario">
                <Gravatar :matricula="usuario.matricula" alt="Usuario"/>
            </div>
            <router-link to="">
                <i class="fa fa-angle-down"></i>
            </router-link>
        </div>
        <div class="conteudo-menu-usuario">
            <a href><i class="fa fa-sign-out"></i>Sair</a>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Gravatar from 'vue-gravatar'
export default {
    nome: 'menuUsuario',
    components: {Gravatar},
    computed: mapState(['usuario'])
}
</script>

<style>
    .menu-usuario{
        position: relative;
        height: 100%;
    }
    .botao-usuario{
        display: flex;
        align-items: center;
        color:#fff;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
    }
    .botao-usuario:hover{
        background-color: rgba(0,0,0,0.2);
    }
    .imagem-usuario{
        margin:0px 10px;
    }
    .imagem-usuario > img{
        max-height: 37px;
        border-radius: 5px;
    }
    .conteudo-menu-usuario{
        position: absolute;
        right: 0px;
        background-color: #e9e9e9;
        min-width: 170px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 10px;
        z-index:1;
        
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
    }
    .menu-usuario:hover .conteudo-menu-usuario{
        visibility: visible;
        opacity:1;
    }
    .conteudo-menu-usuario a{
        text-decoration: none;
        color:#000;
        padding: 10px;
    }
    .conteudo-menu-usuario a:hover{
        text-decoration: none;
        color:#000;
        background-color: #ededed;
    }
</style>