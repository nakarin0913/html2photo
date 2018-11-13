const exportfile = require('./index');

const entity ={
    title: 'คนน่ารัก มักใจร้าย'
}

exportfile.createFileImage(entity).then((res) => {
    console.log('Export => ', res);
}).catch((err) => {
    console.log('Export => ', err);
});