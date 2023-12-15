<template>
    <FactoryDetailTable :factoryDetail=factoryDetail></FactoryDetailTable>
    <FactoryDetailForm />
   
    
</template>
  
<script>
    import FactoryDetailTable from '@/components/Factory/FactoryDetailTable.vue'
    import FactoryDetailForm from '@/components/Factory/FactoryDetailForm.vue'
  
    import { useFactoryDetailStore } from '@/store/FactoryDetail.js'
  
    export default {
        components: {
        FactoryDetailTable:FactoryDetailTable,
        FactoryDetailForm:FactoryDetailForm,
        },
        setup(){
        const factoryDetailStore = useFactoryDetailStore();
        const factoryDetail=factoryDetailStore.getFactoryDetails;
    
        return { factoryDetail}
        }
    }
</script>
  