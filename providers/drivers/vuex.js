export default function makeVuexServiceProvider({ namespace, store }){
    return {
        computed:{
            items(){
                return store.state[namespace].items
            }
        },
        methods:{
            async list(){
                store.dispatch(`${namespace}/load`)
            }
        }
    }
}