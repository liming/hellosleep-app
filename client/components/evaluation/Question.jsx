const {
  EnhancedTextarea
} = mui;

Question = React.createClass({
  
  render: function() {
    return (
      <div>
        <h2> Question {this.props.step} </h2>
        <p>{JSON.stringify(this.props.question, null, 2)}</p>
      </div>
    );
  }
});
