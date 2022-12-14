import { defineComponent } from "vue";

export default defineComponent({
    props: {
      maxWidth: {
        default: 100,
        type: Number,
      },
      minWidth: {
        default: 80,
        type: Number,
      },
      height: {
        default: '200px',
        type: String,
      },
      width: {
        default: null,
        type: String,
      },
    },
    computed: {
      computedWidth() {
        return this.width || `${Math.floor((Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth)}%`;
      },
    },
})