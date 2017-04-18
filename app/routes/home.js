import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { title: 'foo', isComplete: false },
            { title: 'bar', isComplete: false },
            { title: 'baz', isComplete: false }
        ];
    }
});
