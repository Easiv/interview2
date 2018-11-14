import Controller from '@ember/controller';

export default Controller.extend({

  userDate: '',

  usersArr: [
    { id: 1,
      firstName: 'John',
      lastName: 'Smith',
      birthDate: new Date(1999, 12, 10)
    },

    {
      id: 2,
      firstName: 'John2',
      lastName: 'Smith10',
      birthDate: new Date(1998, 12, 10)
    },

    { id: 3,
      firstName: 'John3',
      lastName: 'Smith666',
      birthDate: new Date(1995, 12, 10)
    }
  ],

  actions: {
    destroyUser(user) {
      let users = this.get('usersArr');

      users.forEach((element) => {
        if(element === user) {
          let index = users.indexOf(element);
          this.get('usersArr').splice(index, 1);
          document.querySelector(`.user${user.id}`).innerHTML = ''
        }
      })
    },

    selectRow() {

    }
  }
});
