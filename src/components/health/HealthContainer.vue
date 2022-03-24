<template>
  <v-card>
    <v-card-title>Health Report</v-card-title>
    <v-divider />
    <v-card-text>
      <v-container class="overflow-y-auto mylist" style="max-height: 600px;">
        <v-row>
          <v-col>
            <health-report
              :values="[92.1, 92.9, 91.2, 90.2, 89.9, 89.7, 89.5]"
              title="Weight (kg)"
            />
            <health-report
              :values="[44.3, 44.4, 43.6, 43.9, 45.1, 44.0, 43.9]"
              title="Muscle Mass (kg)"
            />
            <health-report
              :values="[15.5, 15.7, 15.4, 13.9, 11.7, 13.4, 13.3]"
              title="Body fat (kg)"
            />
            <health-report
              :values="[16.9, 16.9, 16.8, 15.4, 13.1, 14.9, 14.9]"
              title="Body fat (%)"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import HealthReport from "./HealthReport.vue";
export default {
  components: { HealthReport },
  name: "health-container",
};
</script>