const {
  AppBar,
  FlatButton,
  IconButton
} = mui;

Header = React.createClass({
  render: function() {
    
    return (
      <AppBar title={this.props.title}
              style={{position: 'absolute', top: 0}}
              onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap} />
    )
  },

  _onLeftIconButtonTouchTap() {
    this.props.onLeftIconClick();
  },
});
