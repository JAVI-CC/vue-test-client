<script lang="ts" setup>
interface Props {
  numItems?: number;
}

withDefaults(defineProps<Props>(), {
  numItems: 8,
})
</script>

<template>
  <div class="row justify-center">
    <q-card class="q-py-md" style="width: 275px">
      <q-item v-for="n in numItems" :key="n">
        <q-item-section>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<style lang="sass" scoped></style>