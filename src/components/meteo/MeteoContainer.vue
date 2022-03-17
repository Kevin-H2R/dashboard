<template>
  <v-card>
    <v-card-title>Meteo in 홍대</v-card-title>
    <v-divider />
    <v-card-text>
      <v-container v-if="loading">
        <v-progress-circular color="primary" indeterminate />
      </v-container>
      <v-container v-else>
        <v-row align="center">
          <v-col cols="3" class="text-center">
            <v-img
              :src="imageUrl"
              aspect-ratio="1"
              contain
              height="50"
              width="50"
              :alt="weather"
            />
          </v-col>
          <v-col>
              <div>Temparature</div><div><b class="text-h3">{{ Math.round(temperature) }}</b>°C</div>
          </v-col>
          <v-col>
              <div>Feels like:</div><div><b class="text-h3">{{ Math.round(feelsLike)}}</b>°C</div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  name: "meteo-container",
  created: function () {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=37.559079&lon=126.926567&appid=0bcb4ec7fcada4d78ca4b61072fd9bf9&units=metric"
      )
      .then((response) => {
        console.log(response.data);
        const weatherData = response.data.weather.shift();
        this.weather = weatherData.main;
        this.loading = false;
        this.imageUrl =
          "http://openweathermap.org/img/wn/" + weatherData.icon + "@2x.png";
        const temperatureData = response.data.main
        this.temperature = temperatureData.temp
        this.feelsLike = temperatureData.feels_like
      });
  },
  data() {
    return {
      weather: null,
      loading: true,
      imageUrl: null,
      temperature: null,
      feelsLike: null
    };
  },
};
</script>