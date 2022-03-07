<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">
html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

html::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}
</style>
