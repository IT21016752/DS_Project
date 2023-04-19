// import cloudinary from 'cloudinary'

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_KEY,
//     api_secret: process.env.CLOUD_KEY_SECRET
// });

// const opts = {
//     overWrite: true,
//     invalidate: true,
//     resource_type: "auto"
// };

// module.exports = (itemImage) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.UploadStream.upload(itemImage, opts, (error, result) => {
//             if(result && result.secure_url) {
//                 console.log(result.secure_url);
//                 return resolve(result.secure_url);
//             }
//             console.log(error.message);
//             return reject({message: error.message});
//         })
//     })
// }

// export default cloudinary;