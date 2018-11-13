import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { firstName: 'John',
        lastName: 'Smith',
        birthDate: new Date(1999, 12, 10)
      },

      { firstName: 'John2',
        lastName: 'Smith10',
        birthDate: new Date(1998, 12, 10)
      },

      { firstName: 'John3',
        lastName: 'Smith666',
        birthDate: new Date(1995, 12, 10)
      }
    ]
  }
});
