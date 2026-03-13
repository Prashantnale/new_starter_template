# paginationHelper Documentation

File: `src/helper/paginationHelper.js`

---

## Functions

### `getPagination(page, size)`
Calculates the `limit` and `offset` for Sequelize queries.

```js
const { getPagination } = require("../helper/paginationHelper");
const { limit, offset } = getPagination(req.query.page, req.query.size);
```

### `getPagingData(data, page, limit)`
Formats the raw Sequelize data (`count` and `rows`) into a structured paginated response.

```js
const { getPagingData } = require("../helper/paginationHelper");
const data = await User.findAndCountAll({ limit, offset });
const response = getPagingData(data, page, limit);
```
