const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h2>Master Vue and build amazing apps!</h2>",
      vueLink: "https://www.google.com/",
    };
  },
  methods: {
    outputGoal() {
      const randNumber = Math.random();
      if (randNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
