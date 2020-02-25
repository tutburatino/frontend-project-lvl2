// eslint-disable-next-line lodash-fp/use-fp
import { has, isEqual, isObject } from 'lodash';
import Aded from './Added';
import Modified from './Modified';
import Removed from './Removed';
// eslint-disable-next-line import/no-cycle
import Intact from './Intact';


export default (key, objBefore, objAfter) => {
  const oldValue = objBefore[key];
  const value = objAfter[key];

  if (!has(objBefore, key)) {
    return new Aded(key, objAfter);
  }
  if (!has(objAfter, key)) {
    return new Removed(key, objBefore);
  }
  if (isEqual(oldValue, value) || (isObject(value) && isObject(oldValue))) {
    return new Intact(key, objBefore, objAfter);
  }
  return new Modified(key, objBefore, objAfter);
};
