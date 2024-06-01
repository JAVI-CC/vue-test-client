<script lang="ts" setup>
import { useClient } from '../composables/useClient';
import { clientColumnsTable, clientSelectOptions } from '../helpers';
import { ClientEnum } from '../interfaces';
import { messageErrorServer } from 'src/modules/common/helpers';
import ProductDialog from 'src/modules/product/components/ProductDialog.vue';
import ClientDetailDialog from '../components/ClientDetailDialog.vue';
import TableSkeleton from 'src/modules/common/components/TableSkeleton.vue';
import DialogError from 'src/modules/common/components/DialogError.vue';

const { clientsFilter, isLoading, messageErrorFetch, tableFilter, clientDetailSelected, showProductsByCustomerId } = useClient();
</script>

<template>
  <TableSkeleton v-if="isLoading" />
  <q-table v-else title="Client list" :rows="clientsFilter" :columns="clientColumnsTable"
    :row-key="ClientEnum.PRIMARY_KEY" hide-bottom :rows-per-page-options="[0]">
    <template #top-right>

      <q-input class="width200 q-mr-md input-margin-bottom" outlined dense v-model="tableFilter.filter" label="Filter">
        <template #append>
          <q-icon name="mdi-magnify" />
        </template>
      </q-input>

      <q-select class="width200 q-mr-xs input-margin-bottom" outlined dense v-model="tableFilter.sortBy"
        :options="clientSelectOptions" emit-value map-options label="Sort by column" />

      <q-toggle :label="tableFilter.isDescending ? 'Descending' : 'Ascending'" size="sm" color="primary"
        v-model="tableFilter.isDescending" />

    </template>

    <template #body-cell-seeClientDetail="props">
      <q-td :props="props">
        <q-btn color="primary" icon="mdi-file-eye-outline" flat round dense @click="clientDetailSelected = props.row" />
      </q-td>
    </template>

    <template #body-cell-seeProducts="props">
      <q-td :props="props">
        <q-btn color="primary" icon="mdi-table-eye" flat round dense
          @click="showProductsByCustomerId = props.row.customerId" />
      </q-td>
    </template>

    <template #loading>
      <q-inner-loading showing color="dark" />
    </template>

  </q-table>

  <ClientDetailDialog :isShow="!!clientDetailSelected" @close="clientDetailSelected = null" />

  <ProductDialog v-if="!!showProductsByCustomerId" :customerId="showProductsByCustomerId"
    @close="showProductsByCustomerId = ''" />

  <DialogError :isShow="!!messageErrorFetch" :title="messageErrorServer" :message="messageErrorFetch"
    @close="messageErrorFetch = ''" />
</template>

<style lang="sass" scoped>
.width200
  width: 200px
  max-width: 200px

@media (max-width: 500px)
  .input-margin-bottom
    margin-bottom: 12px 
</style>