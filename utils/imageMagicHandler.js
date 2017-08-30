var imageMagicHandler = {};
var sizeOf = require('image-size');
//Return the bollean value depending upon the ratio of image
imageMagicHandler.is3dImage = function (dir, filename) {
    var dimensions = sizeOf(dir + "\\" + filename);
    var dimensionRatio = dimensions.width / dimensions.height;
    // Calculation of dimension ratio for normal and 360 degree images
    dimensionRatio = Math.round(dimensionRatio * 100) / 100
    if (dimensionRatio > 1.90) {
        return true
    } else {
        return false
    }
};

module.exports = imageMagicHandler;