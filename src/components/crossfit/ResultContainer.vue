<template>
  <v-card>
    <v-card-title>
      Crossfit Performances
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-container v-if="loading">
        <v-progress-circular color="primary" indeterminate />
      </v-container>
      <v-container v-else>
        <v-row justify="center">
          <new-result-form />
        </v-row>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title></v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from 'axios'
import NewResultForm from './NewResultForm.vue'
export default {
  name: 'result-container',
  components: { NewResultForm },
  created() {
    axios.get("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/result")
      .then(response => {
        this.results = response.data
        this.loading = false
      })
  },
  data() {
    return {
      results: [],
      loading: true
    }
  }
}
</script>