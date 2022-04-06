<template>
  <v-card>
    <v-card-title>Crossfit Attendance calendar</v-card-title>
    <v-card-text>
      <v-container class="overflow-y-auto mylist" style="max-height: 350px">
        <v-row justify="center">
          <v-col cols="12" class="my-2 text-center">
            <h3>Kevin ({{ datesKebinou.length }} sessions)</h3>
            <v-date-picker
              no-title
              v-model="datesKebinou"
              multiple
              readonly
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  name: "attendance-calendar",
  created: function () {
    axios.get("http://" + process.env.VUE_APP_HOST + ":3000/attendance/kebinou")
      .then((res) => {
        this.datesKebinou = res.data;
      });
      
    axios.get("http://" + process.env.VUE_APP_HOST + ":3000/attendance/nara")
      .then((res) => {
        this.datesNara = res.data;
      });
  },
  data() {
    return {
      datesKebinou: [],
      datesNara: [],
    };
  },
};
</script>