import { helper } from '@ember/component/helper';

export function classRow(id) {
  return `user${id}`
}

export default helper(classRow);
