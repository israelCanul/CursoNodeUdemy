function doWork(){
  throw new Error('something do wrong');
}



try {
  doWork();
} catch (e) {
    console.log(e.message);
} finally {
    console.log('aqui llega finalmente');
}

/*try {
  doWork();
} catch (e) {
  console.log('something went wrong!');
} finally {
  console.log('aqui');
}*/
