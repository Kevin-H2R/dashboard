<template>
  <v-dialog width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon> New result
      </v-btn>
    </template>
    <v-card class="py-5">
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <v-select
              :items="sessions"
              label="Session"
              :loading="loading"
              item-value="id"
              v-model="selectedSession"
            >
              <template slot="selection" slot-scope="data">
                {{ data.item.title }} ({{ data.item.date.substring(0, 10) }})
              </template>
              <template slot="item" slot-scope="data">
                {{ data.item.title }} ({{ data.item.date.substring(0, 10) }})
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10">
            <v-textarea
              v-model="performance"
              auto-grow
              background-color="grey darken-3"
              solo
              hide-details
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn color="primary" @click="upload()">Upload</v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from "axios";

export default {
  name: "new-result-form",
  created() {
    axios
      .get("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/session")
      .then((response) => {
        this.sessions = response.data;
        this.loading = false;
      });
  },
  methods: {
    upload() {
      axios.post("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/session", 
        {id: this.selectedSession, performance: this.performance})
        .then(() => {

        })
    },
  },
  data() {
    return {
      sessions: [],
      loading: true,
      selectedSession: null,
      performance: ""
    };
  },
};
</script>