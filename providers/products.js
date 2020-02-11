import makeProvider from './Provider'
import makeServicesDriver from "./drivers/services";
import service from '../services/products'
//import serviceContainer from '~/services/services-container'

export default makeProvider(
    makeServicesDriver({service: service})
)