<script lang="ts" setup>
import { computed, ref, toRef } from 'vue';

interface Props {
  isShow: boolean;
  title: string;
  message: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [void];
}>();

const isShow = toRef(props, 'isShow');

const formData = ref({
  isShowDialog: computed({
    get() {
      return isShow.value;
    },
    set(val: boolean) {
      emit('close');
    },
  }),

});
</script>

<template>
  <q-dialog v-model="formData.isShowDialog" @hide="$emit('close')" persistent>
    <q-card style="width: 500px;">
      <q-card-section class="row items-center q-pb-none">
        <q-icon name="mdi-alert" class="q-mr-sm" size="md" color="negative" text-color="white" />
        <div class="text-h6">{{ title }}</div>
        <q-space />
        <q-btn icon="mdi-close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        {{ message }}
      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped></style>