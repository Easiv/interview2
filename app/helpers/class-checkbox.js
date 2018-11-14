import { helper } from '@ember/component/helper';

export function classCheckbox(id) {
  return `checkbox${id}`
}

export default helper(classCheckbox);
