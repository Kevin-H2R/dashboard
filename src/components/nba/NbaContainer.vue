<template>
  <v-card>
    <v-card-title>NBA</v-card-title>
    <v-divider />
    <v-card-text>
      <v-container v-if="loading">
        <v-progress-circular indeterminate />
      </v-container>
      <v-container v-else class="overflow-y-auto mylist" style="max-height: 600px; ">
        <v-row justify="center" class="my-6">{{ yesterdayDate }}</v-row>
        <nba-result
          v-for="(result, index) in results"
          :key="'result_' + index"
          :homeTeam="result.home_team"
          :homeTeamScore="result.home_team_score"
          :visitorTeam="result.visitor_team"
          :visitorTeamScore="result.visitor_team_score"
        />
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
import NbaResult from "./NbaResult.vue";
export default {
  name: "nba-container",
  components: { NbaResult },
  created() {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    this.yesterdayDate = `${yesterday.getFullYear()}-${
      (yesterday.getMonth() + 1).toString().padStart(2, '0')
    }-${yesterday.getDate()}`;
    axios
      .get(
        `https://www.balldontlie.io/api/v1/games?start_date=${this.yesterdayDate}&end_date=${this.yesterdayDate}`
      )
      .then((response) => {
        this.results = response.data.data;
        this.loading = false;
      });
  },
  data() {
    return {
      loading: true,
      results: [],
      yesterdayDate: null,
    };
  },
};
</script>