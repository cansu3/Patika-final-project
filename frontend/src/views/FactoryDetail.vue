<template>
    <Suspense>
        <template #default>
            <FactoryDetailTable :factoryDetail=factoryDetail></FactoryDetailTable>
     
        </template>
    </Suspense>
    
</template>
  
<script>
    import FactoryDetailTable from '@/components/Factory/FactoryDetailTable.vue'
    import FactoryDetailForm from '@/components/Factory/FactoryDetailForm.vue'
  
    import { useFactoryDetailStore } from '@/store/FactoryDetail.js'
    import { ref, onMounted, Suspense } from 'vue';

    import { useRouter } from 'vue-router'
    const router = useRouter();
  
    export default {
        components: {
        FactoryDetailTable:FactoryDetailTable,
        FactoryDetailForm:FactoryDetailForm,
        },
        setup(){
        const factoryDetail = ref([]);
        const factoryDetailStore = useFactoryDetailStore();

        onMounted(async () => {
            await factoryDetailStore.fetchFactoryDetails(1); // could not find current route params, will be adjusted later.
            factoryDetail.value = factoryDetailStore.getFactoryDetails
           
    });
    
        return { factoryDetail}
        },
        methods: {
            test(){
                this.$router.pa
            }

        }
    }
</script>
  