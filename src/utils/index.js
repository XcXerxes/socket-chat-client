const randomColor = () => {
  const array = getColorArray()
  if (array.length > 0) {
    return array[Math.floor(Math.random() * (array.length - 1 + 0 + 1))]
  }
  return ''
}

const getColorArray = () => {
  return ['is-red', 'is-pink', 'is-purple', 'is-deep-purple',
    'is-indigo', 'is-blue', 'light-blue', 'is-cyan', 'is-teal', 'is-green'
  ]
}
export {randomColor}
