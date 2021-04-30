  
import Vue from "vue";
import Vuex from "vuex";

import Brand from "./Brand.module";
import Request from "./Request.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Brand,
    Request
  }
});