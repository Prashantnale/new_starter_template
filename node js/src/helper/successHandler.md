# successHandler Documentation

File: `src/helper/successHandler.js`

---

## Functions

### `handle200(res, data, message)`
Sends a `200 OK` JSON response with data and an optional message.

```js
const { handle200 } = require("../helper/successHandler");
return handle200(res, users, "Users fetched successfully");
```

### `handle201(res, data, message)`
Sends a `201 Created` JSON response. Used for successful creation of a resource.

```js
const { handle201 } = require("../helper/successHandler");
return handle201(res, newUser, "User created successfully");
```

### `handle204(res, message)`
Sends a `204 No Content` JSON response. Usually used for successful deletions.

```js
const { handle204 } = require("../helper/successHandler");
return handle204(res, "User deleted successfully");
```
