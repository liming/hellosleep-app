
const {
  SelectField
} = mui;

SelectChoice = React.createClass({

  getInitialState() {
    return {
      selectValue: undefined,
    };
  },
  
  render() {

    let menuItems = this.props.data.map((v, i) => {
      return {
        payload: i + 1,
        text: v.text
      }
    });

    return (
      <div>
        <SelectField hintText={this.props.text} value={this.state.selectValue} menuItems={menuItems} />
      </div>
    )
  }
});
