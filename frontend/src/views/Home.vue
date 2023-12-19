<template>
  <Suspense>
    <template #default>
        <div v-if="factories.length > 0">
          <FactoryTable :factory="factories"></FactoryTable>
          <!--<FactoryForm />-->
        </div>
        <div v-else>
          <div class="text-center">
            <!-- Show a loading indicator or a message when data is being fetched -->
            <v-progress-circular indeterminate color="green"></v-progress-circular>
          </div>
        </div>
    </template>
  </Suspense>
</template>

<script>
import { ref, onMounted, Suspense } from 'vue';
import FactoryTable from '@/components/Factory/FactoryTable.vue';
import FactoryForm from '@/components/Factory/FactoryForm.vue';
import { useFactoryStore } from '@/store/Factory.js';

export default {
  components: {
    FactoryTable: FactoryTable,
    FactoryForm: FactoryForm,
  },
  setup() {
    const factories = ref([]);
    const factoryStore = useFactoryStore();

    onMounted(async () => {
      await factoryStore.fetchFactories();
      factories.value = factoryStore.getFactories//factoryStore.getFactories();
    });

    return { factories };
  },
};
</script>
