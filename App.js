import React from 'react'
import NotificationHub from './NotificationHub'

class App extends React.Component  {

  constructor () {
    super()
    this.state = {
      messageCount: 0
    }
  }

  increment () {
    this.setState({
      messageCount: this.state.messageCount + 1
    })
  }

  decrement () {
    if (this.state.messageCount > 0) {
      this.setState({
        messageCount: this.state.messageCount - 1
      })
    }
  }

  render () {
    let style = {
      color: 'black',
      borderRadius: 3,
      fontSize: 72
    }
    let badgeStyle = {
      color: 'white',
      backgroundColor: 'red',
      fontSize: 15,
      top: 12
    }
    return (
      <div>
        <NotificationHub style={style} badgeStyle={badgeStyle} count={this.state.messageCount}>

          <img src={'http://st.deviantart.net/communityrelations/contestbadges/trollface.jpg'} />
        </NotificationHub>
        <br />
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    )
  }
}

export default App
