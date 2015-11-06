var {  
  Router,
  Route
} = ReactRouter;

let history = createHistory();

Routes = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={FrontPage} />
        </Route>
      </Router>
    );
  }
});
