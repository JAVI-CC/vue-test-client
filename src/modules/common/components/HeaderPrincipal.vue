<script lang="ts" setup>
import HeaderButtonTranslate from './HeaderButtonTranslate.vue';

const gitHubUrl: string = 'https://github.com/JAVI-CC1/vue-test-client';
</script>

<template>
  <q-header elevated class="bg-dark text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="vue-logo.svg" />
        </q-avatar>
        Vue test client
      </q-toolbar-title>
      <HeaderButtonTranslate />
      <q-btn flat round padding="xs" icon="mdi-github" :href="gitHubUrl" target="_blank" />
    </q-toolbar>
  </q-header>
</template>

<style lang="sass" scoped></style>