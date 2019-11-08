 <template>
    <div class="cadastro" >
        <tituloPagina main="Login"/>
             <b-form>
                <input id1="user-id" type="hidden" v-model="user.id" />
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Matricula:" label-for="user-id">
                            <b-form-input id="user-id" type="text"
                            v-model="user.id" required 
                            placeholder="Ex: ER00000"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Senha:" label-for="user-senha">
                            <b-form-input senha="user-senha" type="password"
                            v-model="user.passaword" required />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-button variant="primary" href="cadastro">Cadastrar</b-button>
                <b-button variant="primary" @click="get">Entrar</b-button>
             </b-form>
    </div>
</template>

<script>
import tituloPagina from '@/components/template/tituloPagina'

export default {
    name: 'UserAdmin',
    components: { tituloPagina},
    data: function() {
        return {
            mode: 'get',
            user: {},
            users: []
        }
    }
}
</script>

<style>

</style>