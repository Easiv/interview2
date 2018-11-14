import { helper } from '@ember/component/helper';

export function classRow(id) {
  if(document.querySelector)
  return `user${id}`
}

export default helper(classRow);
