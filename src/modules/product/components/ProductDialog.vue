<script lang="ts" setup>
import { useProduct } from '../composables/useProduct';
import { productColumnsTable } from '../helpers';
import GridSkeleton from 'src/modules/common/components/GridSkeleton.vue';
import { messageErrorServer } from 'src/modules/common/helpers';
import DialogError from 'src/modules/common/components/DialogError.vue';

defineEmits<{
  close: [void];
}>();

interface Props {
  customerId: string;
}

const props = defineProps<Props>();
const { products, isLoading, isShowDialog, messageErrorFetch } = useProduct(props.customerId);
</script>

<template>
  <q-dialog v-if="!!!messageErrorFetch" v-model="isShowDialog" persistent @hide="$emit('close')">
    <q-card class="q-pb-md" style="max-width: 525x;">
      <q-card-section class="row items-center">
        <div class="text-h6 text-weight-medium q-mr-xl">List products by customer ID: {{ customerId }}</div>
        <q-space />
        <q-btn icon="mdi-close" padding="xs" flat round dense v-close-popup />
      </q-card-section>

      <GridSkeleton v-if="isLoading" />
      <template v-if="!isLoading && !!products.length">
        <div class="div-list">
          <template v-for="product in products">
            <q-list class="q-mb-md text-center shadow-1 q-py-sm" bordered>
              <template v-for="{ label, key } in productColumnsTable">
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-caption text-grey-7 text-weight-medium">{{ label }}</q-item-label>
                    <q-item-label>{{ product[key] }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-list>
          </template>
        </div>
      </template>

      <template v-else-if="!isLoading && !!!products.length">
        <div class="q-pa-md text-body1 text-weight-regular">You do not have any products registered!</div>
      </template>
    </q-card>
  </q-dialog>

  <DialogError :isShow="!!messageErrorFetch" :title="messageErrorServer" :message="messageErrorFetch"
    @close="messageErrorFetch = '', $emit('close')" />
</template>

<style lang="sass" scoped>
.div-list
  max-width: 275px
  margin: 0 auto
</style>