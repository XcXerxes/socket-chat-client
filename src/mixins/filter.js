export default {
  filters: {
    setName (val) {
      return val ? val.substr(0, 1).toLocaleUpperCase() : ''
    }
  }
}
