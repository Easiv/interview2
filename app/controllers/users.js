import Controller from '@ember/controller';

export default Controller.extend({

  userDate: '',

  actions: {
    destroyUser(user) {

      let model = this.get('model')
      model.forEach(function(element) {
        if(element === user) {
          let index = model.indexOf(element);
          console.log(index);
          model.splice(index, index);
        }
      })
    },

    selectRow() {
      document.querySelectorAll('.row').classList.add('selected');
    }
  }
});
