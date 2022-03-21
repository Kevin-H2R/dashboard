<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col>
          <div class="font-weight-thin">{{ date }}</div>
          <div class="text-h2">{{ time }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "time-clock",
  created() {
    this.updateTime();
  },
  methods: {
    updateTime: function () {
      const now = new Date();
      this.time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
      setTimeout(this.updateTime, 1000);
    },
  },
  data() {
    const now = new Date();
    return {
      date: `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate()}`,
      time: `${now.getHours()}:
        ${now.getMinutes().toString().padStart(2, "0")}:
        ${now.getSeconds().toString().padStart(2, "0")}`,
    };
  },
};
</script>