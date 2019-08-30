// TODO....
exports.date = v => v;

exports.multiline = (values) => {
  if (values) {
    return values.split(/\r\n|\r|\n/);
  }

  return [];
};

// obj is and object with values of type array
exports.repeatingSection = (obj = {}) => {
  const items = [];
  let max = 0;
  console.log('formatting: ', obj);
  // find largest array value
  Object.values(obj).forEach((value) => {
    if (value.length > max) {
      max = value.length;
    }
  });
  console.log('max: ', max);

  // build empty objects to populate
  for (let i = 0; i < max; i += 1) {
    items.push({});
  }

  // fill items with relative values of each array
  Object.keys(obj).forEach((key) => {
    for (let i = 0; i < max; i += 1) {
      items[i][key] = obj[key][i];
    }
  });
  console.log('items: ', items);

  return items;
};
