
const {
  TextField
} = mui;

TextFieldChoice = React.createClass({
  
  render() {
    return (
      <div>
        <TextField floatingLabelText={this.props.text} />
      </div>
    )
  }
});
