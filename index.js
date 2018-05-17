// beatles play

function theBeatlesPlay(musicians, instr) {
  var array = []
 
  for(var i = 0; i< musicians.length; i++) {
    var string = `${musicians[i]} plays ${instr[i]}`
    array[i] = string
  }
  return array
}

function johnLennonFacts(array) {
  var i=0;
  var array1 =[]
  while(i<array.length) {
    array1[i] = `${array[i]}!!!`
    i++
  }
  array = array1
  return array
}

function iLoveTheBeatles(n) {
   var array = []
   do {
     i = 0
     array[i] = "I love the Beetles!"
     n++
     i++
   } while (n < 15)
}