export default function makeServicesDriver ({ service }) {
    return {
        data(){
            return{
                response: []
            }
        },
        computed:{
            items(){
                return this.response
            }
        },
        methods:{
            async list(){
                console.log(service)
             this.response = await service.list()
            }
        }
    }
}