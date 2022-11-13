import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  data() {
    return {
      login: {
        email:'',
        password:''
      },
      hasEmailInvalid:false
    }
  },

  methods:{
    onSubmit() {

        console.log(this.hasEmailInvalid)
    },
    validateEmail(value: any){
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      {
          this.hasEmailInvalid = true;
      }
      this.hasEmailInvalid = true;
    },  
  },

  watch: {
    'email.login'(value){
      // binding this to the data value in the email input
      this.login.email = value;
      this.validateEmail(value);
    },
  },

  mounted() {
  },
 
});
