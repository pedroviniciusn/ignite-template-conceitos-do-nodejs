const app = require('./');

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`server is listening in port ${port}`));