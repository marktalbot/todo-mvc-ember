import Ember from 'ember';

const Todo = Ember.Object.extend({
    title: '',
    isComplete: false,
    init(title) {
        this.set('title', this.title);
    }
});

let todo = Todo.create({ 
    title: 'boop3' 
});

console.log(todo);
console.log(todo.get('title'));

export default Ember.Component.extend({
    todos: [],
    submit(event) {
        event.preventDefault();
        console.log('blahhhh', event);
    },
    actions: {
        add(event) {
            event.preventDefault();
            console.log('clicked!');
        }
    }
});
