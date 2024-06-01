import { ref, computed, onMounted } from 'vue';
import { AxiosError } from 'axios';
import { useClientStore } from '../stores/client.store';
import { storeToRefs } from 'pinia';
import { api } from 'src/boot/axios';
import type { ClientDirectlyBackend } from '../interfaces';

export const useClient = () => {
  const clientStore = useClientStore();
  const { clients, clientsFilter, clientDetailSelected, isLoading, tableFilter } = storeToRefs(clientStore);
  const showProductsByCustomerId = ref<string>('');
  const messageErrorFetch = ref<string>('');

  const getClients = async (): Promise<void> => {
    try {
      const { data } = await api.get<ClientDirectlyBackend[]>('/clients');
      clientStore.addClients(data);
    } catch (error) {
      const { message } = error as AxiosError;
      messageErrorFetch.value = message;
    } finally {
    }
  };

  onMounted(async () => {
    await getClients();
  });

  return {
    // Properties
    clients,
    clientsFilter,
    isLoading,
    showProductsByCustomerId,
    clientDetailSelected,
    messageErrorFetch,
    tableFilter: computed({
      get() {
        return tableFilter.value;
      },
      // setter
      set(newValue) {
        clientStore.setTableFilter(newValue);
      },
    }),

    // Methods
  };
};
