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
    }
  },

  getMeteorData() {
    return {}
  },

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  mixins: [
    StylePropable,
    ReactMeteorData
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

    var step = this.props.params.step;
    var question = this.getCurrentQuestion();

    return (
      <FullWidthSection style={styles.root}>
        <div style={this.prepareStyles(styles.content)}>
          {React.cloneElement(this.props.children, {
             step: step,
             question: question
           })}

          {this._getNavigation(step)}
        </div>
        
      </FullWidthSection>
    );
  },

  _getNavigation(step) {

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

    let prevButton = (
      <RaisedButton
          backgroundColor={Colors.lightGreen700}
          secondary={true}
          onTouchTap={this._onPrevQuestion}
          labelStyle={styles.label}
          style={styles.prev}
          label="上一页" />);

    let nextButton = (
      <RaisedButton
          backgroundColor={Colors.lightGreen700}
          secondary={true}
          onTouchTap={this._onNextQuestion}
          labelStyle={styles.label}
          style={styles.next}
          label="下一页" />);

    return (
      <div>
        {parseInt(step) > 1 ? prevButton : null }
        {parseInt(step) < this.props.navmap.totalStep ? nextButton : null }
      </div>
    );
  },

  getCurrentQuestion() {
    // we need get the current question with step url params.
    
    var step = this.props.params.step;
    var stepCounts = this.props.navmap.stepCounts;

    // get question data
    var count = 0, categoryIndex = 0, questionIndex = 0;
    stepCounts.some((v, i) => {
      var prev = count;
      count += v;
      if (step <= count && step > prev) {
        categoryIndex = i;
        questionIndex = step - prev - 1;

        return true;
      }
    });

    // get question data
    var evaluation = this.props.evaluations[categoryIndex];
    var question = evaluation.page == 'single' ? evaluation.data : evaluation.data[questionIndex];

    return question;
  },

  _onNextQuestion() {
    let step = this.props.params.step;
    this._navToStep(parseInt(step) + 1);
  },

  _onPrevQuestion() {
    let step = this.props.params.step;
    this._navToStep(parseInt(step) - 1);
  },

  _navToStep(step) {
    this.props.history.pushState(null, '/evaluation/steps/' + step);
  }

});
