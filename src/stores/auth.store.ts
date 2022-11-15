import { defineStore } from 'pinia'
import axios from 'axios';

// export const useAuthStore = defineStore('auth', () => {

//   const user:any = JSON.parse(localStorage.getItem('user')??'');
//   const error:any = {};

//   async function login(loginForm: any) 
//   {
//       await axios
//         .post('http://localhost:3000/login', loginForm)
//         .then(response => {
//           localStorage.setItem('user', JSON.stringify(response.data));
//         }).catch((error) => {
//           error = error;
//         })
//   }

//   return { user, error, login }
// })

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    login(loginForm: any) 
    {
        axios
          .post('http://localhost:3000/login', loginForm)
          .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
          }).catch((error) => {
            error = error;
          })
    }
  }
})


// export const useAuthStore = defineStore({
//     id: 'auth',
//     state: () => ({
//       user: JSON.parse(localStorage.getItem('user')??''),
//       error: {}
//     }),
//     actions: {
        
//     }
// })
  