import { helper } from '@ember/component/helper';

export function formatAge(date) {
  let timeInMs = Date.now() - date.firstObject.getTime();
  return Math.floor(timeInMs / 1000 / 60 / 60 / 24 / 365);
}

export default helper(formatAge);
