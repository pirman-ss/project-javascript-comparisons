const personA = {
    name: 'Alpha',
    age: 20
  }
  
  const personB = {
    name: 'Betty',
    age: 30
  }
  
  switch (personA.age > personB.age) {
    case true:
      console.log('Benar')
      break
  
    case false:
      console.log('Salah')
      break
  
    default:
      console.log('Seumuran')
  }  