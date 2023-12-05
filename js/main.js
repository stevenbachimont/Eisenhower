new Vue({
  el: '#app',
  data: {
    tasks: [
      { id: 1, name: '', quadrant: 1 },
      { id: 2, name: '', quadrant: 2 },
      { id: 3, name: '', quadrant: 3 },
      { id: 4, name: '', quadrant: 4 }
    ],
    newTask: '',
    newTaskQuadrant: '1'
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          id: this.tasks.length + 1,
          name: this.newTask,
          quadrant: parseInt(this.newTaskQuadrant)
        });
        this.newTask = '';
        this.newTaskQuadrant = '1';
      }
    }
  }
});
