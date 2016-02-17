import 'velocity-animate/velocity.ui'

// The `bounce` effect
Velocity.RegisterEffect('bounce', {
  defaultDuration: 550,
  calls: [
    [ { translateY: -6 }, 0.25 ],
    [ { translateY: 0 }, 0.125 ],
    [ { translateY: -3 }, 0.125 ],
    [ { translateY: 0 }, 0.25 ]
  ]
})

// The `shake` effect
Velocity.RegisterEffect('shake', {
  defaultDuration: 800,
  calls: [
      [ { translateX: -3 }, 0.125 ],
      [ { translateX: 3 }, 0.125 ],
      [ { translateX: -3 }, 0.125 ],
      [ { translateX: 3 }, 0.125 ],
      [ { translateX: -3 }, 0.125 ],
      [ { translateX: 3 }, 0.125 ],
      [ { translateX: -3 }, 0.125 ],
      [ { translateX: 0 }, 0.125 ]
  ]
})
