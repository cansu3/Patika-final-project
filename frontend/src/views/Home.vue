<template>
  <FactoryTable :factory="factories"></FactoryTable>
  <FactoryForm />
 
</template>

<script>
  import FactoryTable from '@/components/Factory/FactoryTable.vue'
  import FactoryForm from '@/components/Factory/FactoryForm.vue'

  import { useFactoryStore } from '@/store/Factory.js'

  export default {
    components: {
      FactoryTable:FactoryTable,
      FactoryForm:FactoryForm,
    },
    setup(){
      const factoryStore = useFactoryStore();
      const factories=factoryStore.getFactories;

      return { factories}
    }
  }
</script>
