var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');

app.use(cors());
 
app.use('/forecast', proxy('https://api.forecast.io', {
	forwardPath: function(req, res) {
		return req.url + 'forecast/878cba08d7d0e9f649aab3debcdab3b9/45.41,-75.7?units=ca';
	}
}));

app.listen(4000);