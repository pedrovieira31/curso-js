import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    contToken => !contToken.msg ? 'Operação realidada com sucesso!' : contToken.msg,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    contToken => !contToken.msg ? 'Oops.. Erro inesperado.' : contToken.msg,
    { type : 'error', icon : 'times' }
)