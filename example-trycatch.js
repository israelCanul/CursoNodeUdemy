
try {
  throw new Error('unable to decrypt accounts');
} catch (e) {
  console.log('something went wrong!');
} finally {
  console.log('aqui');
}
