 <template>
    <div class="cadastroAtividade" >
        <tituloPagina icon="fa fa-pencil" main=" Cadastro de Atividade"/>
            <b-form>
                <input id="processo-atividade" type="hidden" v-model="user.id" />
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Escolha a Atividade:" >
                            <b-form-select codigo="atividade" class="picker">
                                <option value="AE001">AE001: Cursos e minicursos de extensão (presencial ou à distância) realizados</option>
                                <option value="AE002">AE002: Curso, minicursos e palestras ministrados</option>
                                <option value="AE003">AE003: Participação em congressos, seminários ou outros eventos, sem apresentação de trabalho ou outros eventos</option>
                                <option value="AE004">AE004: Participação em congressos, seminários ou outros eventos, com apresentação de trabalho ou outros eventos</option>
                                <option value="AE005">AE005: Participação na organização de eventos acadêmicos e científicos</option>
                                <option value="AE006">AE006: Publicação de artigo completo</option>
                                <option value="AE007">AE007: Publicação de artigo curto (shortpaper), resumo</option>
                                <option value="AE008">AE008: Estágio não obrigatório</option>
                                <option value="AE009">AE009: Monitoria</option>
                                <option value="AE010">AE010: Atividade de iniciação cientifica</option>
                                <option value="AE011">AE011: Atividade de iniciação à extensão</option>
                                <option value="AE012">AE012: Viagens de estudo/visita técnica</option>
                                <option value="AE013">AE013: Prestação de serviços relevantes à comunidade</option>
                                <option value="AE014">AE014: Casos Omissos</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Descrição:" label-for="processo-descricao">
                            <b-form-input id="processo-descricao" type="text"
                            v-model="user.info" required 
                            placeholder="Ex: Minicurso"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group label="Minutos:" label-for="processo-minutos">
                            <b-form-input senha="processo-minutos" type="text"
                            v-model="user.minutos" required />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="4" sm="12">
                        <b-form-group class="btn btn-outline-primary btn-lg" style="margin:0px 0px 10px 0px ">
                           <div class="fileUpload">
                                <span>Enviar Certificado</span>
                                <input type="file" class="upload" />
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-button variant="primary" @click="save" >Cadastrar</b-button>
            </b-form>
    </div>
</template>

<script>
import tituloPagina from "@/components/template/tituloPagina";
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "cadastroAtividade",
  components: { tituloPagina },
  data: function() {
    return {
      mode: "save",
      user: {},
      users: []
    };
  },
  methods: {
    save() {
      const method = this.user.id ? "put" : "post";
      const id = this.user.id ? `/${this.user.id}` : "";
      axios[method](`${baseApiUrl}/users${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    }
  }
};
</script>

<style>
</style>