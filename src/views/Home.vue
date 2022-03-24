<template>
  <v-container fluid pa-5>
    <v-row justify="space-around">
      <v-col cols="12" sm="6" lg="4">
        <v-row>
          <v-col cols="12" sm="6">
            <time-clock class="mb-2" />
          </v-col>
          <v-col cols="12" sm="6">
            <meteo-container class="mb-2" />
          </v-col>
        </v-row>
        <todo-container class="mb-2" />
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <wod-container class="mb-2" />
        <attendance-calendar class="mb-2" />
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <result-container class="mb-2" />
        <health-container/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WodContainer from "../components/crossfit/WodContainer.vue";
import TodoContainer from "../components/todo/TodoContainer.vue";
import MeteoContainer from "../components/meteo/MeteoContainer.vue";
import AttendanceCalendar from "../components/crossfit/AttendanceCalendar.vue";
import TimeClock from '../components/TimeClock.vue';
import ResultContainer from '../components/crossfit/ResultContainer.vue';
import HealthContainer from '../components/health/HealthContainer.vue'
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    TodoContainer,
    WodContainer,
    MeteoContainer,
    AttendanceCalendar,
    TimeClock,
    ResultContainer,
    HealthContainer,
  },
};
</script>,