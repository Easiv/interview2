import { helper } from '@ember/component/helper';

export function fullName([user]) {
  return `${user.firstName} ${user.lastName}`
}

export default helper(fullName);
