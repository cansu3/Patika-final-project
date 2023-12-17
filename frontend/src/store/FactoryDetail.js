import { defineStore } from 'pinia'

export const useFactoryDetailStore = defineStore("factoryDetailStore", {
    state: () => ({
        factoryDetail: [
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: false},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true},
            {id: 1, baseUnit: "FactoryDetail 1", dateRange: "11.06.2023", usage: 3, usageFee:1 ,discountedPrice: true}
        ]
    }),
    getters: {
        getFactoryDetails: (state) =>{
            return state.factoryDetail
        }
    },
    actions: {
        createFactoryDetail(factoryDetail){
            this.factoryDetail.push(factoryDetail)
        },
        deleteFactoryDetail(id){
            this.factoryDetail = this.factoryDetail.filter(factoryDetail => {
                return factoryDetail.id !== id
            })
        }
    }
})