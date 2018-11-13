const html2pdf = require('html-pdf');
const fs = require('fs');
const ejs = require('ejs');

function create(html, htmlOptions, filePath) {
    return new Promise((resovle, reject) => {
        try {
            html2pdf
                .create(html, htmlOptions)
                .toFile(filePath, function (err, res) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(res);
                        resovle(res);
                    }
                });
        } catch (err) {
            console.log(err);
            reject(err);
        }
        
    });
}

function render(templatePath, entity) {
    
    var html = ejs.render(
        fs.readFileSync(templatePath, 'utf8'),
        entity
    );

    return html;
}

module.exports = function (eAppOptions) {
    
    let htmlOptions = {
        type: "png", // allowed file types: png, jpeg, pdf
        quality: "80", // images
        format: "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
        orientation: "portrait", // portrait or landscape
        //zoomFactor: 1, //default
        viewportSize: {
            //width: 874, height: 1240
            width:2480, height: 3508
        }
    };
    
    return {
        create: function (entity) {
            let html = render(eAppOptions.templatePath,entity);
            return create(
                html,
                htmlOptions, 
                'out/outs.'+htmlOptions.type
            );
        }
    };
};
