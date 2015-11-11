const {
  AppCanvas,
  Styles
} = mui;

var { ThemeManager, LightRawTheme } = Styles;

App = React.createClass({

  mixins: [
    ReactMeteorData
  ],

  getMeteorData() {
    var evaluations = Evaluations.find({}, {sort: {id: 1}}).fetch();

    // build a navigation map for the evaluation data
    var totalStep = 0, stepCounts = [];
    evaluations.forEach((v, i) => {
      if (v.page == 'single') {
        totalStep += 1;
        stepCounts.push(1);
      }
      else {
        totalStep += v.data.length;
        stepCounts.push(v.data.length);
      }
    });

    return {
      evaluations: evaluations,
      tags: Tags.find({}).fetch(),
      navmap: {
        totalStep: totalStep,
        stepCounts: stepCounts
      }
    }
  },

  getInitialState() {
    return {};
  },

  componentWillMount() {
    
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
        {React.cloneElement(this.props.children, {
           tags: this.data.tags,
           evaluations: this.data.evaluations,
           navmap: this.data.navmap
         })}
      </AppCanvas>
    )
  }
  
});
