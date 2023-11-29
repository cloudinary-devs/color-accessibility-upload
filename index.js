// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions.
    // Request accessibility analysis and run a script on upload to tag assets 
    // that have low results for distinct edges or distinct colors.
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      accessibility_analysis: true,
      eval: 'if (resource_info.accessibility_analysis.colorblind_accessibility_analysis.distinct_edges < 0.8){upload_options["tags"] = "distinct_edges_issue";} if (resource_info.accessibility_analysis.colorblind_accessibility_analysis.distinct_colors < 0.8) {if (upload_options["tags"]){upload_options["tags"] += ",distinct_colors_issue";}else{upload_options["tags"] = "distinct_colors_issue";}}'
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
};
    
//////////////////
//
// Main function
//
//////////////////
(async () => {

    // Upload the images
    await uploadImage('https://cloudinary-devs.github.io/cld-docs-assets/assets/images/palette.png');

    await uploadImage('https://cloudinary-devs.github.io/cld-docs-assets/assets/images/piechart.png');

    await uploadImage('https://cloudinary-devs.github.io/cld-docs-assets/assets/images/redflower.jpeg');


})();