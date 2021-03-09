const app = Vue.createApp({
  data() {
    return {
      paragraph: "",
      confirmedParagraph: "",
    };
  },

  methods: {
    confirmParagraph() {
      this.confirmedParagraph = this.paragraph;
    },
    submitForm() {
      alert("You did it!");
    },

    setParagraph(event) {
      this.paragraph = event.target.value;
    },
  },
});

app.mount("#assignment");
