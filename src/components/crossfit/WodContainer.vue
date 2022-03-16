<template>
  <v-card>
    <v-card-title>WOD</v-card-title>
    <v-card-text>
      <v-container id="wod_content">
        <v-progress-circular color="primary" indeterminate />
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  name: "wod-container",
  created() {
    axios.get("http://crossfitzone.cafe24.com/wod.php")
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>
<style lang="scss">
</style>