<template>
  <div class="hello">
    <h1>Componente Info</h1>
    <ul v-for="(link, index) in links" v-bind:key="index">
      <li>
      {{ index +1 }} - {{ link }}
      </li>
    </ul>
    <p>El Numero de Links Es: {{ contarlinks }}</p>
    <p> El contenido de tu array: {{ posicion }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Info',
  props: {
  },
  computed: {
    ...mapState(['links']),
    ...mapGetters(['contarlinks', 'posicion'])
  },
}
</script>


