const multer = require('multer');

const storage = multer.memoryStorage({
  destination: 'file/',
});
const upload = multer({ storage });
module.exports = upload