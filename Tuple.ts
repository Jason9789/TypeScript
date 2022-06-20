// Tuple. 튜플 -> JS에는 없다.
// 순서에 맞추어 값이 들어와야 한다.
const player: readonly [string, number, boolean] = ["nico", 1, false]


// any 타입은 ts의 통제성을 벗어난다.
// 즉, any를 사용하면 js를 사용하는 것이나 다름이 없다.
// 따라서 최대한 쓰지 않는 것을 추천함.
const a : any[] = [1, 2, 3, 4]
const b : any = true
a + b