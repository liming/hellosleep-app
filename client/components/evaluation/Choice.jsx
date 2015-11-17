
Choice = React.createClass({

  render() {

    const ChocieType = this.getChoiceType();

    let {
      ... other
    } = this.props;
    
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
