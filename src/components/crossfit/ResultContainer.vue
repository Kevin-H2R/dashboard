<template>
  <v-card>
    <v-card-title> Crossfit Performances </v-card-title>
    <v-divider />
    <v-card-text>
      <v-container v-if="loading">
        <v-progress-circular color="primary" indeterminate />
      </v-container>
      <v-container v-else>
        <v-row justify="center" class="mb-5">
          <new-result-form />
        </v-row>
        <v-row>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(result, index) in $store.getters.results"
              :key="'result_' + index"
            >
              <v-expansion-panel-header color="grey darken-3">
                {{ result.title }} ({{ result.date.substring(0, 10) }})
              </v-expansion-panel-header>
              <v-expansion-panel-content color="grey darken-4 pa-5"
                v-html="result.performance"
              ></v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
import NewResultForm from "./NewResultForm.vue";
export default {
  name: "result-container",
  components: { NewResultForm },
  created() {
    axios
      .get("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/result")
      .then((response) => {
        this.$store.commit('setResults', response.data)
        this.loading = false;
      });
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>