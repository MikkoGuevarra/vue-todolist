var app = new Vue({
    el : '#root',
    data: {
        index: 0,
        title: 'List-to-do',
        lists : ['wake-up', 'teorical boolean', 'lunch', 'practical boolean', 'sleep', 'repeat'],
        inserted: ""
    },
    methods : {
        addToDo() {
            if (this.inserted != "") {
                this.lists.push(this.inserted);
                console.log('clicked');
            }
        },
        removeToDo(index) {
            this.lists.splice(index, 1);
        }
    }
});
