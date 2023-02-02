var express = require("express");
var cors = require('cors');

var app = express();
app.use(cors());
app.listen(3001, () => {
	 console.log("Server running on port 3001");
});

const fs = require('fs');


app.get("/get_info", (req, res, next) => {
	if (!req.query.vin){
		res.json(400, {
			error: "vin not given"
		})
	}

	try{
		let rawdata = fs.readFileSync('data/' + req.query.vin + '.json');
		let info = JSON.parse(rawdata);
		res.send(info);
	} catch (error) {
		res.json(404, {
			error: "data not found by this vin"
		})
	}
});
