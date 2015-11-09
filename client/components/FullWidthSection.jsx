const {
  ClearFix,
  Styles,
  Mixins
} = mui;

let { StylePropable, StyleResizable } = Mixins;

FullWidthSection = React.createClass({

  mixins: [StylePropable, StyleResizable],

  getStyles() {

    let DesktopGutter = Styles.Spacing.desktopGutter;
    
    return  {
      root: {
        padding: DesktopGutter + 'px',
        boxSizing: 'border-box',
      },
      content: {
          maxWidth: '1200px',
          margin: '0 auto',
      },
      rootWhenSmall: {
          paddingTop: (DesktopGutter * 2) + 'px',
          paddingBottom: (DesktopGutter * 2) + 'px',
      },
      rootWhenLarge: {
          paddingTop: (DesktopGutter * 3) + 'px',
          paddingBottom: (DesktopGutter * 3) + 'px',
      },
    };
  },

  render: function() {

    let style = this.props.style;

    let styles = this.getStyles();

    let content = this.props.children;
    
    return (

      <ClearFix
        style={this.mergeAndPrefix(
          styles.root,
          style,
          this.isDeviceSize(StyleResizable.statics.Sizes.SMALL) && styles.rootWhenSmall,
          this.isDeviceSize(StyleResizable.statics.Sizes.LARGE) && styles.rootWhenLarge)}>
        {content}
      </ClearFix>
      
    );
  }
  
});
