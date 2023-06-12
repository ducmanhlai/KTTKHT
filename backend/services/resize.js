// Resize.js
const sharp = require('sharp');
import  { v4 as uuidv4 }  from 'uuid';
const path = require('path');

class Resize {
  constructor(folder) {
    this.folder = folder;
  }
  async save(buffer) {
    const filename = Resize.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(300, 300, { // size image 300x300
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(filepath);
    
    return filename;
  }
  static filename() {
     // random file name
    return `${uuidv4()}.png`;
  }
  filepath(filename) {
    return path.resolve(`./public/images/${filename}`)
  }
}
module.exports = Resize;
