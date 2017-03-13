self.addEventListener('message', function(e) {
  var data = e.data;
  var n=1;
  search:while(n<data){
    n+=1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    postMessage(n);
  
  }

}, false);

/*var n = 1;
primelist = "";
search: while (n<parseInt(document.getElementById("formulario").input.value)) {
  n += 1;
  for (var i = 2; i <= Math.sqrt(n); i += 1){
    if (n % i == 0)
      continue search;

    postMessage(n);
  }
  // found a prime!
  primelist += " " + n;

  //document.getElementById('result').innerHTML = primelist;
}*/
