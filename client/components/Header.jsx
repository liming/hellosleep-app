const {
  AppBar,
  FlatButton,
  IconButton
} = mui;

Header = React.createClass({
  render: function() {
    let styles = {
        fill: "white"
    };
    
    return (
      <AppBar title={this.props.title}
              iconElementLeft={<IconButton><SvgIcons.ActionHome /></IconButton>}
              iconElementRight={<FlatButton label="Save" />} />
              /* iconElementLeft=<SvgIcons.ActionHome style={styles} /> />*/
    )
  }
});
