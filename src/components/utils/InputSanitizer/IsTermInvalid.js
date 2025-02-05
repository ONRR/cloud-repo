const IsTermInvalid = term => {
  const regex = /[^a-zA-Z0-9,.'" ]/g
  return regex.test(term)
}

export default IsTermInvalid
