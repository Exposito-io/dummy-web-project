/**
 * This is the main function
 */
function main() {
    for(var i = 0; i < 1000000; i++) {
        // TODO
    }

}

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

function test() {
    console.log('test')
}