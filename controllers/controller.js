var express = require('express');
var router = express.Router();


router.get("/david",function(req, res){
	res.send("David");
});
//My favorite food is pasta

router.get("/tims", function(req, res){
	res.send("Tims");
});
//My favorite food is cornbread

module.exports = router;