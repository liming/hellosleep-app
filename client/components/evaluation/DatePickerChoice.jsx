
const {
  DatePicker
} = mui;

DatePickerChoice = React.createClass({
  
  render() {
    return (
      <div>
        <DatePicker hintText={this.props.text} />
      </div>
    )
  }
});
