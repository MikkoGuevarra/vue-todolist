var app = new Vue({
    el : '#root',
    data: {
        indexList: 0,
        title: 'List-to-do',
        lists : ['wake-up', 'teorical boolean', 'lunch', 'practical boolean', 'sleep', 'repeat'],
        inserted: ""
    },
    methods : {
        addToDo() {
            this.lists.push(this.inserted)
        }
    }
});
