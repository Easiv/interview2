import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fullName } from 'user-management/helpers/full-name';

module('Integration | Helper | fullName', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it computes the name', async function(assert) {
    const user = { firstName: 'lucc', lastName: 'brucc' }

    assert.equal(fullName([user]), 'lucc brucc');
  });
});
