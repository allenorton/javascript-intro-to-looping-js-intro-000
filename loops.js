function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1){
      array.push("I am 1 strange loop.")
    }
    else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
function whileLoop(n){
  let count = n
  while (count > 0){
    console.log(--count);
  }

}
