<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row align="center">
          <v-col class="text-center">
            <div>{{ homeTeam.abbreviation }}</div>
            <v-img
              :src="`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${homeTeam.abbreviation.toLowerCase()}.png`"
              height="100"
              width="100"
              class="ma-auto mb-5"
            />
            <div class="text-h1">{{ homeTeamScore }}</div>
          </v-col>
          <v-col class="text-center text-h4">VS</v-col>
          <v-col class="text-center">
            <div>{{ visitorTeam.abbreviation }}</div>
            <v-img
              :src="`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${visitorTeam.abbreviation.toLowerCase()}.png`"
              height="100"
              width="100"
              class="ma-auto mb-5"
            />
            <div class="text-h1">{{ visitorTeamScore }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "nba-result",
  props: {
    homeTeam: {
      type: Object,
      required: true,
    },
    homeTeamScore: {
      type: Number,
      required: true,
    },
    visitorTeam: {
      type: Object,
      required: true,
    },
    visitorTeamScore: {
      type: Number,
      required: true,
    },
  },
};
</script>