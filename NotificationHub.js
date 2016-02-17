import React from 'react'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'

import Badge from './Badge'
import { containerStyleDefaults } from './defaults'
import { containerStyleOverrides } from './overrides'

class NotificationHub extends React.Component {

  componentDidUpdate (prevProps) {
    let badge = this.refs.badge
    if (badge !== null && prevProps.count < this.props.count) {
      badge.animate()
    }
  }

  render () {
    let badge = null
    if (this.props.count > 0) {
      badge = <Badge ref="badge" style={this.props.badgeStyle} count={this.props.count} />
    }
    let style = update(containerStyleDefaults,
      {$merge: this.props.style},
      {$merge: _styleOverride})
    return (
      // Pass on all props, and render the badge
      <div style={style}>{this.props.children}{badge}</div>
    )
  }
}

NotificationHub.propTypes = {
  // The count to display on the component's badge element.
  count: React.PropTypes.number,
  // The NotificationHub component must have exactly one child.
  children: React.PropTypes.element.isRequired,
  // Styles for the NotificationHub component
  style: React.PropTypes.object,
  // Styles for the inner Badge component
  badgeStyle: React.PropTypes.object
}

NotificationHub.defaultProps = {
  count: 0,
  style: _styleOverride,
  badgeStyle: _defaultBadgeStyle
}

export default NotificationHub
