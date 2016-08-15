import Ember from 'ember';

export default Ember.Controller.extend({
    model: ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'],
    actions: {
        addSci: function() {
            let sci = this.get('scientistName');
            this.get('model').pushObject(sci);
        }
    }
});
