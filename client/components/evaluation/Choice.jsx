
Choice = React.createClass({

  render() {

    const ChocieType = this.getChoiceType();

    let style = {
      marginBottom: "10px"
    }

    let {
      ... other
    } = this.props;

    other.style = style;
    
    return (
      <div>
        <ChocieType {...other} />
      </div>
      
    );
  },

  getChoiceType() {
    return eval(this.props.type);
  }
});
