Meteor.startup(function () {
  injectTapEventPlugin();
  ReactDOM.render(<Routes />, document.body);
  // ReactDOM.render(<Routes />, document.getElementById('container'));
});
