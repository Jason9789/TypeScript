type Name = string
type Age = number
type Player = {
  name: Name,
  age?: Age
}


function playerMaker(name: string) : Player {
  return {
    name
  }
}

const nico = playerMaker("nico")
nico.age = 12
console.log(nico)

const playerMaker2 = (name: string): Player => ({name})

const nico2 = playerMaker2("nico2")
nico2.age = 13
console.log(nico2)