const app = require('./index');

const port = process.env.PORT || 4001;

app.listen(port, (error) => {
  if(error) {
    consold.error('server error', error);
  } else {
    console.log('server listening on port: ', port);
  }
});