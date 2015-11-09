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

Evaluation = React.createClass({

  getInitialState() {
    return {
      step: this.props.params.id
    }
  },

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  mixins: [
    StylePropable
  ],
  
  render: function() {
    return (
      <div>
        <Header onLeftIconClick={this.onAppBarLeftIconClick} title="睡眠评估" />
        {this._getEvaluatonContent()}
      </div>
    );
  },

  _getEvaluatonContent() {

    let styles = {
      root: {
        backgroundColor: Colors.grey100,
        textAlign: 'center'
      },

      content: {
        boxSizing: 'border-box',
        padding: Spacing.desktopGutter + 'px',
        maxWidth: (Spacing.desktopKeylineIncrement * 14) + 'px',
        margin: '0 auto'
      }
    };
    
    return (
      <FullWidthSection style={styles.root}>
        <div style={this.prepareStyles(styles.content)}>
          {React.cloneElement(this.props.children, {step: this.state.step})}

          {this._getNavigation()}
        </div>
        
      </FullWidthSection>
    );
  },

  _getNavigation() {

    let styles = {
      label: {
        fontSize: 16,
        fontWeight: Typography.fontWeightRegular,
        padding: 20
      },
      prev: {
        float: 'left'
      },

      next: {
        float: 'right'
      }
    };

    let prevButton = (<RaisedButton
      backgroundColor={Colors.lightGreen700}
      secondary={true}
      onTouchTap={this._onPrevQuestion}
      labelStyle={styles.label}
      style={styles.prev}
      label="上一页" />);

    let nextButton = (<RaisedButton
backgroundColor={Colors.lightGreen700}
secondary={true}
onTouchTap={this._onNextQuestion}
labelStyle={styles.label}
style={styles.next}
label="下一页" />);

    return (
      <div>
        {parseInt(this.state.step) > 1 ? prevButton : null }
        {nextButton}
      </div>
    );
  },

  _onNextQuestion() {
    this.setState({step: parseInt(this.state.step) + 1});
    this._navToStep();
  },

  _onPrevQuestion() {
    this.setState({step: parseInt(this.state.step) - 1});
    this._navToStep();
  },

  _navToStep() {
    this.props.history.pushState(null, '/questions/' + this.state.step);
  }

});
