<script lang="ts" setup>
interface Props {
  givenName: string;
  customerId: string
}

defineProps<Props>();
</script>

<template>
  <q-item class="q-pb-md q-pr-none">
    <q-item-section avatar top>
      <q-avatar size="50px" color="black" text-color="white" icon="mdi-account-circle-outline" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-body1" lines="1">{{ givenName }}</q-item-label>
      <q-item-label class="text-subtitle text-caption text-weight-bold" lines="1">
        Identifier: {{ customerId }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn dense flat round color="dark" icon="mdi-close" v-close-popup />
    </q-item-section>
  </q-item>

  <q-separator />
</template>

<style lang="sass" scoped></style>