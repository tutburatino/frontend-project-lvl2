// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';


const compare = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));

  const difference = keys.map((name) => {
    const oldValue = obj1[name];
    const value = obj2[name];

    if (!_.has(obj1, name)) {
      return { name, type: 'added', value };
    }
    if (!_.has(obj2, name)) {
      return { name, type: 'deleted', oldValue };
    }
    if (_.isEqual(value, oldValue)) {
      return { name, type: 'unchanged', value };
    }
    if (_.isObject(value) && _.isObject(oldValue)) {
      return { name, type: 'parent', children: compare(oldValue, value) };
    }
    return {
      name, type: 'changed', value, oldValue,
    };
  });

  return difference;
};


export default compare;
