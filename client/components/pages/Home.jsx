const {
  Styles,
  Mixins,
  RaisedButton
} = mui;

const {
  Colors,
  Spacing,
  Typography
} = Styles;

const {
  StylePropable
} = Mixins;

Home = React.createClass({

  mixins: [
    StylePropable
  ],

  onAppBarLeftIconClick: function() {
    this.refs.leftNav.toggle();
  },
  
  render() {
    return (
      <div>
        <Header onLeftIconClick={this.onAppBarLeftIconClick} title="睡吧" />
        <AppLeftNav ref="leftNav" history={this.props.history} />
        <div>
          {this._getHomePageContent()}
        </div>
      </div>
    )
  },

  _getHomePageContent() {

    let styles = {
      root: {
        backgroundColor: Colors.grey200,
      },
      
      content: {
        backgroundColor: Colors.grey100,
        textAlign: 'center'
      },
      
      label: {
        fontSize: 20,
        fontWeight: Typography.fontWeightLight,
        padding: 40
      }
    };
    
    return (
      <FullWidthSection style={styles.content}>
        <RaisedButton
backgroundColor={Colors.lightGreen700}
primary={true}
onTouchTap={this._onStartEvaluate}
labelStyle={styles.label}
label="开始睡眠评估" />
      </FullWidthSection>
    );
  },

  _onStartEvaluate() {
    this.props.history.pushState(null, '/evaluation');
  }
});
