# errorHandler Documentation

File: `src/helper/errorHandler.js`

---

## Functions

### `formatSequelizeError(res, error)`
Formats and handles Sequelize validation, unique constraint, database, and foreign key errors. Returns a `422 Unprocessable Entity` response.

```js
const { formatSequelizeError } = require("../helper/errorHandler");

try {
  // item operation
} catch (error) {
  return formatSequelizeError(res, error);
}
```

### `handle404(res, message)`
Sends a `404 Not Found` JSON response.

```js
const { handle404 } = require("../helper/errorHandler");
if (!item) return handle404(res, "Item not found");
```

### `handle401(res, message)`
Sends a `401 Unauthorized` JSON response. Usually used for invalid or expired tokens.

```js
const { handle401 } = require("../helper/errorHandler");
return handle401(res, "Unauthorized access");
```

### `handle500(res, error)`
Sends a `500 Internal Server Error` JSON response and logs the error to the console.

```js
const { handle500 } = require("../helper/errorHandler");
return handle500(res, error);
```
