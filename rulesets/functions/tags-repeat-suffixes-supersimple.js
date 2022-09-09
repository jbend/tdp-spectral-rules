module.exports = (targetVal) => {
  const errors = [];
  errors.push({
    message: `the message`,
    path: ['basepath'],
  });
  return errors;
};