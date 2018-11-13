const Exportjs = require('./exportjs');
const path = require('path');

const basePath = path.join(__dirname, 'templates');
let templatePath='';
setbackgroundImg=path.join(basePath,'background/001.jpg');
templatePath=path.join(basePath, 'template.html');

const eAppOptions = {
  templatePath: templatePath
}; 


module.exports = {
  createFileImage: function (entity) {
    return Exportjs(eAppOptions).create(entity);
  }
};