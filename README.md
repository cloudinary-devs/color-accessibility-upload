# color-accessibility-upload
Example of accessibility analysis on upload.  Three images are uploaded to your product environment with `accessibility_analysis` requested.  The `eval` feature is used to tag the uploaded image according to the result of the accessibility analysis. If the image has a low score for `distinct_edges`, the asset is tagged 'distinct_edges_issue'. If it has a low score for `distinct_colors`, the asset is tagged 'distinct_colors_issue'.

Note: You may need to contact Cloudinary support to enable accessibility analysis on your product environment.

## Running the script

To run the script:

1. Clone this repo.
1. Open a terminal in the `color-accessibility-upload` folder.
1. Set your Cloudinary API Environment variable:
   ```
   export CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
   ```
   You can find your API Environment variable in the Account Details section of your Cloudinary console.
1. Install Cloudinary:
   ```
   npm i
   ```
1. Run the script:
   ```
   node index.js
   ```