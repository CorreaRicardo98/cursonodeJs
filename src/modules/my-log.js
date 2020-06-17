const info = (text) => {
  // eslint-disable-next-line no-console
  console.log('INFO:', text);
  return text;
};

const error = (text) => {
  // eslint-disable-next-line no-console
  console.log('ERROR:', text);
  return text;
};

module.exports.info = info;
module.exports.error = error;
