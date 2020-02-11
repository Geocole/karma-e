if (process.BROWSER_BUILD && window) {

    require('bootstrap')
}

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)