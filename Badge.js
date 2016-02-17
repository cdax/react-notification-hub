import React from 'react'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'
import { VelocityComponent } from 'velocity-react'
import './animation'

import { badgeStyleOverrides } from './overrides'

class Badge extends React.Component {

  animate () {
    this.refs.velocity.runAnimation({finish: true})
  }

  render () {
    // Default badge styles. These can be overriden via the NotificationHub
    // prop `badgeStyle`
    let style = update(this.props.style, {$merge: badgeStyleOverrides})
    return (
      <VelocityComponent ref='velocity' animation={'callout.flash'}>
        <div style={style}>{this.props.count}</div>
      </VelocityComponent>
    )
  }
}

Badge.propTypes = {
  // The count to display on the badge.
  count: React.PropTypes.number.isRequired
}

export default Badge
