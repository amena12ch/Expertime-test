import axios from 'axios'

import { GET_BRANDS} from "./actions.type";
import {FETCH_BRANDS} from "./mutations.type";

  const store = {
       state : { 
        brandList: []
       },
       actions : {
          [GET_BRANDS](context) {
              return new Promise(resolve => {
                axios.get('/static/brands.json')
                  .then(({data}) => {
                    context.commit(FETCH_BRANDS, data);                    
                  })
                  .catch(({error}) => {
                    console.log(error)
                  });
              });
            }
        },
       mutations : {
          [FETCH_BRANDS](state, brandList) {
              state.brandList = brandList; 
          }
      }, 
       getters : {
        brandList (state){
            return state.brandList
          }
      }
  }
  
  export default store;