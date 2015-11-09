var {  
  Router,
  Route,
  IndexRoute
} = ReactRouter;

let history = History.createHistory();

Routes = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
          <Route path="evaluation" component={Evaluation} />
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    );
  }
});
