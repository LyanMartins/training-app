import { useAuthStore } from "@/stores/auth.store";
import { defineComponent } from "vue";


export default defineComponent({
  components: {},

  data() {
    return {
      login: {
        email:'',
        password:''
      },
      hasError: false,
      errorMsg: '',
      data: []
    }
  },

  methods:{
    onSubmit() {
      this.validateEmail(this.login.email)

      if(this.hasError) return;
      
      const authStore = useAuthStore();
      authStore.login(this.login);
     
    },
    validateEmail(value: any) {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      {
        return this.feedbackError(true, 'Email inválido!');
      }
      return this.feedbackError(false)
    
    },  

    feedbackError(hasError:boolean, errorMsg:string = '') {
      this.errorMsg = errorMsg;
      return this.hasError = hasError;
    }
    
  },

  watch: {
    'login.email'(value){
      // binding this to the data value in the email input
      this.login.email = value;
      if(this.hasError && (this.errorMsg === '' || this.errorMsg === 'Email inválido!') ){
        this.validateEmail(value);
      }
      
    },
  },

  mounted() {
    if ( useAuthStore().user) {
      this.$router.push('home') 
    }
  },
 
});
