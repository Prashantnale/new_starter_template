# authHelper Documentation

File: `src/helper/authHelper.js`

---

## Functions

### `hashPassword(password)`
Hashes a plain text password using bcrypt.

```js
const { hashPassword } = require("../helper/authHelper");
const hashed = await hashPassword("mySecretPassword");
```

### `comparePassword(password, hashedPassword)`
Compares a plain text password with a hashed password.

```js
const { comparePassword } = require("../helper/authHelper");
const isMatch = await comparePassword("mySecretPassword", user.password);
```

### `generateToken(payload)`
Generates a JWT token using the `JWT_SECRET` and `JWT_EXPIRES_IN` defined in `.env`.

```js
const { generateToken } = require("../helper/authHelper");
const token = generateToken({ id: user.id });
```

### `verifyToken(token)`
Verifies a JWT token and returns the decoded payload. Returns `null` if the token is invalid or expired.

```js
const { verifyToken } = require("../helper/authHelper");
const decoded = verifyToken(token);
```
