import multer from 'multer';
export default multer({
    limits: {
      fileSize: 4 * 1024 * 1024,
    }
})