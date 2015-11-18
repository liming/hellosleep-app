
const {
  DropDownMenu
} = mui;

DropDownChoice = React.createClass({
  
  render() {

    let menuItems = this.props.data.map((v, i) => {
      return {
        payload: i + 1,
        text: v.text
      }
    });

    return (
      <div>
        <h3>{this.props.text}</h3>
        <SelectField menuItems={menuItems} />
      </div>
    )
  }
});
