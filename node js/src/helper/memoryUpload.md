# memoryUpload Documentation

File: `src/helper/memoryUpload.js`

---

## Functions & Middleware

### `memoryUpload(folderName)`
Middleware that handles multipart/form-data using `multer.memoryStorage()`.
- Automatically generates unique filenames.
- Sets the `req.body` values with relative file paths.
- Pushes file information to `req.tempFiles` for later saving.

```js
const { memoryUpload } = require("../helper/memoryUpload");
router.post("/upload", memoryUpload("profiles"), controller.create);
```

### `saveRAMFiles(tempFiles)`
Saves the files stored in RAM to the disk.
- Converts images to compressed `.webp` format (1200px width, 60% quality).
- Compresses PDFs using `pdf-lib`.
- Uses `sharp` for image processing.

```js
const { saveRAMFiles } = require("../helper/memoryUpload");
await saveRAMFiles(req.tempFiles);
```
