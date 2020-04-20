
export default [
  {
    name: 'common',
    type: 'parent',
    children: [
      {
        name: 'setting1',
        type: 'origin',
        value: 'Value 1',
      },
      {
        name: 'setting2',
        type: 'deleted',
        oldValue: 200,
      },
      {
        name: 'setting3',
        type: 'modified',
        oldValue: true,
        value: {
          key: 'value',
        },
      },
      {
        name: 'setting6',
        type: 'parent',
        children: [
          {
            name: 'key',
            type: 'origin',
            value: 'value',
          },
          {
            name: 'ops',
            type: 'added',
            value: 'vops',
          },
        ],
      },
      {
        name: 'follow',
        type: 'added',
        value: false,
      },
      {
        name: 'setting4',
        type: 'added',
        value: 'blah blah',
      },
      {
        name: 'setting5',
        type: 'added',
        value: {
          key5: 'value5',
        },
      },
    ],
  },
  {
    name: 'group1',
    type: 'parent',
    children: [
      {
        name: 'baz',
        type: 'modified',
        oldValue: 'bas',
        value: 'bars',
      },
      {
        name: 'foo',
        type: 'origin',
        value: 'bar',
      },
      {
        name: 'nest',
        type: 'modified',
        oldValue: {
          key: 'value',
        },
        value: 'str',
      },
    ],
  },
  {
    name: 'group2',
    type: 'deleted',
    oldValue: {
      abc: 12345,
    },
  },
  {
    name: 'group3',
    type: 'added',
    value: {
      fee: 100500,
    },
  },
];
