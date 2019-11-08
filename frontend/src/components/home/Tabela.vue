<template>
    <div class = "tabela">
        <div class = "info-tabela">
            <span class="atividade">{{atividade}}</span>
            <span class="descricao">{{descricao}}</span>
            <span class="horas">{{horas}}</span>
            <span class="certificado">{{certificado}}</span>
            <span class="validacao">{{validacao}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Tabela",
  props: ["atividade", "descricao", "horas", "certificado", "validacao"]
};
</script>

<style>
table {
  display: inline-block;
  margin-bottom: 8px;
  background-color: #e9e9e9;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0,0.2);
  border-radius: 15px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}
.info-tabela {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
thead {
  background: #e9e9e970;
}
tr:hover {

  background: rgb(56, 138, 219);
  color: #ffffff;
}
thead tr:hover {
  background-color: transparent;
  color: inherit;
}
th {
  font-weight: bolder;
  text-align: center;
}
th,
td {
  padding: 0.1em 1em;
}

</style>