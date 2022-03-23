<template>
  <v-container fluid class="pa-5">
    <v-row justify="space-around">
      <v-col>
        <v-card>
          <v-card-title>Coding language (last 7 days)</v-card-title>
          <v-divider />
          <v-card-text>
            <figure><embed src="https://wakatime.com/share/@Kebinou/d370d33f-31fe-44d4-a49f-436834de6b8f.svg"/></figure>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Coding activity (last 7 days)</v-card-title>
          <v-divider />
          <v-card-text>
            <figure><embed src="https://wakatime.com/share/@Kebinou/d0f1d797-681b-4cc1-a9ed-d0dafc7bbda1.svg"/></figure>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'coding-view'
}
</script>