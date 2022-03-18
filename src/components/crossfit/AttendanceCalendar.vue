<template>
  <v-card>
    <v-card-title>Crossfit Attendance calendar</v-card-title>
    <v-card-text>
      <v-container>
        <v-row justify="center">
          <v-date-picker
            no-title
            v-model="dates"
            multiple
            readonly
          ></v-date-picker>
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
    axios
      .get("http://" + process.env.VUE_APP_HOST + ":3000/attendance/kebinou")
      .then((res) => {
        this.dates = res.data;
      });
  },
  data() {
    return {
      dates: [],
    };
  },
};
</script>