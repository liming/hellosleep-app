
const {
  RadioButtonGroup,
  RadioButton,
  TimePicker
} = mui;

RadioChoice = React.createClass({
  
  render() {

    const isSinglePage = this.props.isSinglePage;

    let style = {
      width: isSinglePage ? 'auto' : '100%',
      marginRight: '16px',
      marginTop: '8px'
    };

    if (isSinglePage) {
      style.display = 'inline-block';
    }

    return (
      <RadioButtonGroup name={this.props.name} defaultSelected="0">
        {
          this.props.data.map((item, i) => {
            
            return [
              <RadioButton
                  style={style}
                  key={"radio" + i}
                  value={i.toString()}
                  label={item.text}>
              </RadioButton>
            ]
            
          })
        }
      </RadioButtonGroup>
    );
  }
});
