
import { mapGetters } from "vuex";
import store from "./store";
import { GET_BRANDS } from "./store/actions.type";

export default {
  name: "mixin",
  computed:{
    ...mapGetters({brandList:'brandList'}),
  },
  data() {
      return {
        selectedBrand:''
        }
    }, 
  mounted(){
     store.dispatch(GET_BRANDS)

  }
  
}