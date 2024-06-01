import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Client, ClientDirectlyBackend, ClientTableFilter } from '../interfaces';
import { sanitizeString } from 'src/modules/common/helpers';

export const useClientStore = defineStore('client', () => {
  //States
  const clientsDirectlyBackend = ref<ClientDirectlyBackend[]>([]);
  const tableFilter = ref<ClientTableFilter>({
    filter: '',
    sortBy: 'id',
    isDescending: false,
  });
  const clientDetailSelected = ref<Client | null>(null);
  //End States

  //Getters
  const clients = computed<Client[]>(() =>
    clientsDirectlyBackend.value.map((c) => {
      return {
        id: c._id,
        docType: c.docType,
        docNum: c.docNum,
        email: c.email,
        customerId: c.customerId,
        givenName: c.givenName,
        familyName1: c.familyName1,
        phone: c.phone,
      };
    })
  );

  const isLoading = computed<boolean>(() => !!!clients.value.length);

  const tableFilterSanitize = computed<string>(() => sanitizeString(tableFilter.value.filter));

  const clientsFilter = computed<Client[]>(() => {
    if (!clients.value.length) return [];
    let clientsFilterArr: Client[] = clients.value;

    //Filter
    if (tableFilter.value.filter) clientsFilterArr = onClientFilter();

    //Sort by
    const clientsFilterSort: Client[] = onClientSort(clientsFilterArr);

    //ASC or DESC
    return tableFilter.value.isDescending ? clientsFilterSort.reverse() : clientsFilterSort;
  });
  //End Getters

  //Actions
  const addClients = (clients: ClientDirectlyBackend[]): void => {
    clientsDirectlyBackend.value = clients;
  };

  const setTableFilter = (updateTableFilter: ClientTableFilter): void => {
    tableFilter.value = updateTableFilter;
  };

  const onClientFilter = (): Client[] => {
    return clients.value.filter((c) => {
      if (sanitizeString(Object.values(c).toString()).includes(tableFilterSanitize.value)) return c;
    });
  };

  const onClientSort = (clientsFilterArr: Client[]): Client[] => {
    return clientsFilterArr.sort((a, b) =>
      a[tableFilter.value.sortBy].toString().localeCompare(b[tableFilter.value.sortBy].toString())
    );
  };
  //End Actions

  return {
    //States
    tableFilter,

    //Getters
    clients,
    clientsFilter,
    isLoading,
    clientDetailSelected,

    //Actions
    addClients,
    setTableFilter,
  };
});
