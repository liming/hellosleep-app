const {
  AppCanvas,
  Styles
} = mui;

var { ThemeManager, LightRawTheme } = Styles;

App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {};
  },

  getInitialState: function () {
    return {};
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  render() {
    return (
      <AppCanvas>
        {this.props.children}
      </AppCanvas>
    )
  }
  
});
