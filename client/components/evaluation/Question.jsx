Question = React.createClass({
  
  render: function() {
    return (
      <div>
        {this._createPage()}
      </div>
    );
  },

  _createPage() {

    const questions = _.isArray(this.props.question) ? this.props.question : [this.props.question];

    return <div> {
      questions.map((v) => {
        
        let {
          ...other
        } = v;

        other.singlePage = this.props.singlePage;
        
        return [<Choice {...other}/>]
      })
    }</div>
  }
});
