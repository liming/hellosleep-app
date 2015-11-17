
const {
  RadioButtonGroup,
  RadioButton
} = mui;

RadioChoice = React.createClass({
  
  render() {

    let style = {
      width: 'auto',
      display: 'inline-block',
      marginRight: '16px',
      marginTop: '8px'
    };

    return (
      <RadioButtonGroup name={this.props.name} defaultSelected="0">
        {
          this.props.data.map((item, i) => {
            
            return <RadioButton
                       style={style}
                       key={"radio" + i}
                       value={i.toString()}
                       label={item.text}>
            </RadioButton>
          })
        }
      </RadioButtonGroup>
    );
  }
});
