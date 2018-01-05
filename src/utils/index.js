const randomColor = () => {
  const array = getColorArray()
  if (array.length > 0) {
    return array[Math.floor(Math.random() * (array.length - 1 + 0 + 1))]
  }
  return ''
}

const getColorArray = () => {
  return ['avatar-red', 'avatar-pink', 'avatar-purple', 'avatar-deep-purple',
    'avatar-indigo', 'avatar-blue', 'light-blue', 'avatar-cyan', 'avatar-teal', 'avatar-green'
  ]
}
export {randomColor}
