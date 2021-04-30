import axios from 'axios'

import { GET_REQUEST_LIST, GET_REQUEST} from "./actions.type";
import {FETCH_REQUEST_LIST, FETCH_REQUEST,EDIT_REQUEST} from "./mutations.type";

  const store = {
       state : { 
        requestList: [],
        request:{}
       },
       actions : {
          [GET_REQUEST_LIST](context) {
              return new Promise(resolve => {
                axios.get('/static/payload-rmp.json')
                  .then(({data}) => {
                    context.commit(FETCH_REQUEST_LIST, data.requests);                    
                  })
                  .catch(({error}) => {
                    console.log(error)
                  });
              });  
            },
            [GET_REQUEST](context, id) {
              return context.commit(FETCH_REQUEST, context.state.requestList.filter(e =>e.requestId==id));                        
        },
      },
       mutations : {
          [FETCH_REQUEST_LIST](state, requestList) {
              state.requestList = requestList; 
          },
          [FETCH_REQUEST](state, request) {
            state.request = request[0]; 
        },
        [EDIT_REQUEST](state, payload){
          state.request.brand = payload.brand
          state.request.campaignName = payload.campaignName
          state.request.decisionDeadline = payload.decisionDeadline
          state.request.media = payload.media
          state.requestList.splice(state.requestList.findIndex(r =>r.requestId === state.request.requestId),1)
          state.requestList.push(state.request) 
        }
      }, 
       getters : {
        request (state){
            return state.request
          },
      }
  }
  
  export default store;