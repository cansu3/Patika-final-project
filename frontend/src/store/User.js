import { defineStore } from 'pinia'

export const useUserStore = defineStore("UserStore", {
    state: () => ({
        factory: [
            {id: 1, username: "Cansu", emailAddress: "cansuucil99@gmail.com", password: "123", role:"ADMIN" },
            {id: 1, username: "Cansu", emailAddress: "cansuucil99@gmail.com", password: "123", role:"EDITOR" },
        ]
    }),
    getters: {
        getUsers(){
            return users
        },
    },
    actions: {
        createUser(user){
            this.user.push(user)
        },
    }
})