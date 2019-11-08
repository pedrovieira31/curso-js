<template>
    <div class="home">
        <tituloPagina icon="fa fa-home" main=" Página do Aluno"
            sub="Tabela de Atividades"/>
        <div class="tabelas">
        <table>
            <colgroup span="5" class="columns"></colgroup>
            <tr>
                <th>Atividades</th>
                <th>Descrições</th>
                <th>Horas</th>
                <th>Certificados</th>
                <th>Validações</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><input type="checkbox" disabled></th>
            </tr>
            <tr>
                <th>Total</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </table>
        <b-row>
        <b-button variant="primary" href="cadastroAtividade" style="margin:5px 10px 0px 20px" @click="save">Cadastrar nova atividade</b-button>
        </b-row>
        </div>
    </div>
</template>

<script>
import tituloPagina from '../template/tituloPagina'
import Tabela from './Tabela'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    nome:"home",
    components:{tituloPagina, Tabela},
    data: function(){
        return{
            tabela:{}
        }
    },
    methods:{
        getTabela(){
                axios.get(`${baseApiUrl}/tabela`).then(res =>this.tabela = res.data)
        }
    },
    mouted(){
        this.getTabela()
    }
}

</script>

<style>
    .tabelas{
        display: inline-block;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>