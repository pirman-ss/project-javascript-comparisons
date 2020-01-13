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
      console.log('Benar, Alpha lebih tua dari Betty')
      break
  
    case false:
      console.log('Salah, Alpha lebih muda dari Betty')
      break
  
    default:
      console.log('Seumuran')
  }  