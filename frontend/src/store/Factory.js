import { defineStore } from 'pinia'

export const useFactoryStore = defineStore("factoryStore", {
    state: () => ({
        factory: [
            {id: 1, name: "Factory 1", startDate: "11.06.2023", endDate: "11.06.2023", numberOfEmployee:1 ,isFreeMember: false},
            {id: 2, name: "Factory 2", startDate: "10.06.2023", endDate: "11.06.2023", numberOfEmployee:5, isFreeMember: true},
        ]
    }),
    getters: {
        favs(){
            return this.factory.filter(factory => factory.isFreeMember)
        },
        favCount(){
            return this.factory.reduce((previous, current) => {
                return current.isFreeMember ? previous + 1 : previous
            }, 0)
        },
        totalCount: (state) =>{
            return state.factory.length
        },
        getFactories: (state) =>{
            return state.factory
        }
    },
    actions: {
        createFactory(factory){
            this.factory.push(factory)
        },
        toggleFav(id){
            const factory = this.factory.find(factory => factory.id === id)
            factory.isFreeMember = !factory.isFreeMember
        },
        deleteFactory(id){
            this.factory = this.factory.filter(factory => {
                return factory.id !== id
            })
        }
    }
})