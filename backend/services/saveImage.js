

import fs from 'fs';
export default function (file) {
    // folder upload
    const imagePath = path.join('../public/images');
    const file_name = `${imagePath}/${uuidv4()}.jpg`;
    // call class Resize
    try {
        fs.writeFile(file_name, file,'binary');
        return file_name
    } catch (error) {
        console.log(error)
        return 0
    }

}