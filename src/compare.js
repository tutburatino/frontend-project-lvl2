// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';


const compare = (obj1, obj2) => {
  const keys = _.union(_.keys({ ...obj1, ...obj2 }));

  const difference = keys.map((name) => {
    const value = obj2[name];
    const oldValue = obj1[name];

    if (!_.has(obj1, name)) {
      return { name, type: 'added', value };
    }
    if (!_.has(obj2, name)) {
      return { name, type: 'deleted', oldValue };
    }
    if (_.isEqual(value, oldValue)) {
      return { name, type: 'origin', value };
    }
    if (_.isObject(value) && _.isObject(oldValue)) {
      return { name, type: 'parent', children: compare(oldValue, value) };
    }
    return {
      name, type: 'modified', value, oldValue,
    };
  });

  return difference;
};


export default compare;
