# deleteUploadedFiles Documentation

File: `src/helper/deleteUploadedFiles.js`

---

## Functions

### `deleteUploadedFiles(data)`
Recursively searches for file paths in an object (like `req.body` or a model instance's data) that start with `"uploads/"` and deletes the corresponding files from the disk if they exist.

This is useful for cleaning up old files when a record is updated or deleted.

```js
const { deleteUploadedFiles } = require("../helper/deleteUploadedFiles");

// When deleting a record
const user = await User.findByPk(id);
deleteUploadedFiles(user.toJSON());
await user.destroy();
```
