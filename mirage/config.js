export default function() {

  this.namespace = 'api';

  this.get('/users', () => {
    return {
      users: [
        {id: 1, firstName: 'John', lastName: 'Smith', birthDate: new Date(1989, 12, 10)},
        {id: 1, firstName: 'John', lastName: 'Smith', birthDate: new Date(1956, 12, 10)},
        {id: 1, firstName: 'John', lastName: 'Smith', birthDate: new Date(1947, 12, 10)}
      ]
    };
  });
}
