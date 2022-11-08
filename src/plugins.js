export default {
  install: (app, options) => {
    const shortentDescription = (text) => `${text.substr(0, 50)}...`;
    app.provide("shortentDescription", shortentDescription);
  }
}
