Question = React.createClass({
  
  render: function() {

    let style = {

      container: {
        marginBottom: 20
      }
      
    };

    
    return (
      <div style={style.container}>
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
