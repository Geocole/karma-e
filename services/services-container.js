const RepositoryInterface = {
    //find() {},
    list() {},
}

function bind(repositoryFactory, Interface){
    return Object.keys(Interface).reduce((prev, method) => {
        const resolvableMethod = async (...args) => {
            //We load the repository and return the method we want with it's args
            const repository = await repositoryFactory()
            return repository.default[method](...args)
        }

        return {...prev, [method]: resolvableMethod}
    }, {})
}

export default {
    get productRepository(){
        return bind(() => import('./products'), RepositoryInterface)
    }
}