
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
        <span>{this.props.text}</span>
        <DropDownMenu menuItems={menuItems} />
      </div>
    )
  }
});
