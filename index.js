require('dotenv').config();
const server = require('./api/server.js');


const PORT = process.env.PORT || 5000;
server.listen(PORT, function() {
  console.log(`\n/////////// SERVER LISTENING ON PORT http://localhost:${PORT} ///////////\n`);
});