 <template>
    <div class="cadastro" >
        <tituloPagina icon="fa fa-pencil" main=" Cadastro de Usuário"/>
            <b-form>
                <input id1="user-id" type="hidden" v-model="user.id" />
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Nome:" label-for="user-name">
                            <b-form-input nome="user-name" type="text"
                            v-model="user.nome" required />
                        </b-form-group>
                    </b-col>
                </b-row>
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
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Confirmação de Senha:" label-for="user-confirm-senha">
                            <b-form-input confirmarSenha="user-confirm-senha" type="password"
                            v-model="user.confirmPassaword" required />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="E-mail:" label-for="user-email">
                            <b-form-input email="user-email" type="email"
                            v-model="user.email" required />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-button variant="primary" @click="save">Cadastrar</b-button>
            </b-form>
    </div>
</template>

<script>
import tituloPagina from '@/components/template/tituloPagina'
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'cadastro',
    components: { tituloPagina},
    data: function() {
        return {
            mode: 'save',
            user: {},
            users: []
        }
    },
    methods: {
        save() {
            const method = this.user.id ? 'put' : 'post'
            const id = this.user.id ? `/${this.user.id}` : ''
           axios[method](`${baseApiUrl}/users${id}`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        }
}
}
</script>

<style>

</style>