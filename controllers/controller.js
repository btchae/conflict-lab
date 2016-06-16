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
router.get('/', function(req,res){
	res.send('root')
});

router.get('/joe', function(req,res){
	res.send('joe');
});

module.exports = router;