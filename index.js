const express = require("express");
const app = express();
const port = process.port || 3000;

app.get("/", (req, res) => {
	res.status(200).json({response: "Hello, world!"});
});

app.listen(port, () => {
	console.log("App listening on port", port);
});
