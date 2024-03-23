import fs from "fs";
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dkpjlhp3c', 
  api_key: '851213885523353', 
  api_secret: 'jReybhWuXt54d0c2MAWgwdttg9Y' 
});

// Function to upload an image to Cloudinary
function uploadImage(filePath) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.secure_url);
      }
    });
  });
}

// Example usage
async function main() {
  try {
    // Path to the PNG image file you want to upload
    const imagePath = '../images/chem.png';
    
    // Upload the image and get the URL
    const imageUrl = await uploadImage(imagePath);
    
    console.log('Image uploaded successfully. URL:', imageUrl);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}

// Call the main function
main();
