const RemoveSearchCharacters = text => {
  const specialChars = /[+\-&|!(){}[\]^"~*?:]/g
  return text.replace(specialChars, '')
}

export default RemoveSearchCharacters
