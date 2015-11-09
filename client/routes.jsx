var {  
  Router,
  Route,
  IndexRoute,
  Redirect
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

          <Redirect from="evaluation" to="/questions/1" />
          <Route path="evaluation" component={Evaluation}>
            <Route path="/questions/:id" component={Question} />
          </Route>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    );
  }
});
