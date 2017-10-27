function globalToJSON(schema) {
  schema.set('toJSON', {
    getters: true,
    transform(obj, json) {
      delete json.__v;
      delete json.password;
      delete json.passwordConfirmation;
    }
  });
}

module.exports = globalToJSON;
