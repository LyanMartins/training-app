import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
  components: {},

  data() {
    return {
      login: {
        email:'',
        password:''
      },
      hasEmailInvalid: false,
      errorMsg: '',
      data: []
    }
  },

  methods:{
    onSubmit() {
      this.validateEmail(this.login.email)
      axios
        .post('http://localhost:3000/login', this.login)
        .then(response => (this.data = response.data))
      this.$router.push('Home') 
    },
    validateEmail(value: any) {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      {
          this.errorMsg = 'Email inválido!';
          return this.hasEmailInvalid = true;
      }
      this.errorMsg = '';
      return this.hasEmailInvalid = false;
    },  
    
  },

  watch: {
    'login.email'(value){
      // binding this to the data value in the email input
      this.login.email = value;
      if(this.hasEmailInvalid){
        this.validateEmail(value);
      }
      
    },
  },

  mounted() {
  },
 
});
