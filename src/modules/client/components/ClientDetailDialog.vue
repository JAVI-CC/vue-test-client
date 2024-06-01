<script lang="ts" setup>
import { computed, ref, toRef } from 'vue';
import { useClient } from '../composables/useClient';
import ClientDetailDialogItem from './ClientDetailDialogItem.vue'
import ClientDetailDialogHeader from './ClientDetailDialogHeader.vue'

interface Props {
  isShow: boolean;
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

const { clientDetailSelected: client } = useClient();
</script>

<template>
  <q-dialog v-model="formData.isShowDialog" @hide="$emit('close')" persistent>
    <q-card style="width: 500px;">
      <q-card-section>
        <q-list>
          <ClientDetailDialogHeader :givenName="client?.givenName ?? ''" :customerId="client?.customerId ?? ''" />

          <ClientDetailDialogItem label="Document" :value="`${client?.docType}: ${client?.docNum}`"
            icon="mdi-card-account-details" />

          <ClientDetailDialogItem label="Family" :value="client?.familyName1 ?? ''" icon="mdi-account-group" />

          <ClientDetailDialogItem label="Email" :value="client?.email ?? ''" icon="mdi-email"
            :href="`mailto:${client?.email}`" />

          <ClientDetailDialogItem label="Phone" :value="client?.phone ?? ''" icon="mdi-phone-classic"
            :href="`tel:${client?.phone}`" :isSeparator="false" />
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped></style>