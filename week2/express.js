let express = require("express");
let app = express();
app.get('/testing_router', (req, res) => {
    res.end("Testing express.router");
    console.log(express.Router());
});
app.listen(3000, () => console.log("listening on port 3000"));