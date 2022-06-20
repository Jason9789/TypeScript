type Name = string
type Age = number
type Player = {
  readonly name: Name,
  age?: Age
}


function playerMaker(name: string) : Player {
  return {
    name
  }
}

const nico = playerMaker("nico")
nico.age = 12
nico.name = "aaa" // Cannot assign to 'name' because it is a read-only property.

const playerMaker2 = (name: string): Player => ({name})

const nico2 = playerMaker2("nico2")
nico2.age = 13
console.log(nico2)


// ============================

const numbers: readonly number[] = [1, 2, 3]