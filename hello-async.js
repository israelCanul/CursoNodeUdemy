function printInTwoSeconds(text){
  setTimeout(function(){
    console.log(text);
  },2000);
}

printInTwoSeconds('este es mi texto');
