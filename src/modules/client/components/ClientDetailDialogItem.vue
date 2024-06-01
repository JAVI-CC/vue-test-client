<script lang="ts" setup>
interface Props {
  label: string;
  value: string;
  icon: string;
  isSeparator?: boolean;
  href?: string;
}

withDefaults(defineProps<Props>(), {
  isSeparator: true,
  href: ''
})
</script>

<template>

  <q-item v-ripple="!!href" :clickable="!!href" class="q-pt-md q-pb-sm" :href="!!!href ? undefined : href">
    <q-item-section avatar>
      <q-avatar color="grey-4" :text-color="!!!href ? 'grey-8' : 'primary'" :icon="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">{{ value }}</q-item-label>
      <q-item-label lines="1" caption>{{ label }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator v-if="isSeparator" inset="item" />
</template>

<style lang="sass" scoped></style>