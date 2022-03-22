<template>
  <v-container fluid pa-5>
    <v-row justify="space-around">
      <v-col cols="12" sm="6" lg="4">
        <v-row align="center">
          <v-col cols="12" sm="6">
            <time-clock class="mb-2" />
          </v-col>
          <v-col cols="12" sm="6">
            <meteo-container class="mb-2" />
          </v-col>
        </v-row>
        <todo-container class="mb-2" />
        <v-card>
          <v-card-title>Coding language (last 7 days)</v-card-title>
          <v-divider />
          <v-card-text>
            <figure><embed src="https://wakatime.com/share/@Kebinou/d370d33f-31fe-44d4-a49f-436834de6b8f.svg"/></figure>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <wod-container class="mb-2" />
        <attendance-calendar class="mb-2" />
        <v-card>
          <v-card-title>Coding activity (last 7 days)</v-card-title>
          <v-divider />
          <v-card-text>
            <figure><embed src="https://wakatime.com/share/@Kebinou/d0f1d797-681b-4cc1-a9ed-d0dafc7bbda1.svg"/></figure>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <result-container class="mb-2" />
        <nba-container class="mb-2" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WodContainer from "../components/crossfit/WodContainer.vue";
import TodoContainer from "../components/todo/TodoContainer.vue";
import MeteoContainer from "../components/meteo/MeteoContainer.vue";
import AttendanceCalendar from "../components/crossfit/AttendanceCalendar.vue";
import NbaContainer from "../components/nba/NbaContainer.vue";
import TimeClock from '../components/TimeClock.vue';
import ResultContainer from '../components/crossfit/ResultContainer.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    TodoContainer,
    WodContainer,
    MeteoContainer,
    AttendanceCalendar,
    NbaContainer,
    TimeClock,
    ResultContainer,
  },
};
</script>,