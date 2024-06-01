<script lang="ts" setup>
import { LocalStorage } from 'quasar';
import { useLanguage } from '../composables/useLanguage';
import { languageListItems } from '../helpers';

const { onUpdateLanguage } = useLanguage()
</script>

<template>
  <q-btn unelevated round padding="xs" class="text-white q-mr-md" icon="mdi-translate-variant">
    <q-menu :offset="[55, -10]" style="border-radius: 20px;">
      <q-list class="text-center text-grey-10" style="min-width: 75px;">
        <template v-for="{ code, label }, index in languageListItems" :key="code">
          <q-item clickable v-close-popup
            :class="LocalStorage.getItem('language') === code ? 'text-white bg-blue-7' : ''"
            @click="onUpdateLanguage(code)">
            <q-item-section>{{ $t(label) }}</q-item-section>
          </q-item>
          <q-separator v-if="languageListItems.length !== index - 1" />
        </template>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<style lang="sass" scoped></style>