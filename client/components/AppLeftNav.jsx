const {
  LeftNav,
  Styles,
  Mixins
} = mui;

const {
  Colors,
  Spacing,
  Typography
} = Styles;

const {
  StylePropable
} = Mixins;

const menuItems = [
  { route: 'about', text: 'About' }
];

AppLeftNav = React.createClass({
  
  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func,
  },

  toggle() {
    this.refs.leftNav.toggle();
  },

  render: function() {
    
    let headerStyles = {
    fontSize: '24px',
    color: Typography.textFullWhite,
    lineHeight: Spacing.desktopKeylineIncrement + 'px',
    fontWeight: Typography.fontWeightLight,
    backgroundColor: Colors.cyan500,
    paddingLeft: Spacing.desktopGutter,
    paddingTop: '0px',
    marginBottom: '8px',
    };
    
    let header = (
      <div style={this.prepareStyles(headerStyles)}>
        睡吧
      </div>
    );
    
    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        onChange={this._onLeftNavChange} />
    );
  },

  _onLeftNavChange: function(e, key, item) {
    this.props.history.pushState(null, item.route);
  }

});

