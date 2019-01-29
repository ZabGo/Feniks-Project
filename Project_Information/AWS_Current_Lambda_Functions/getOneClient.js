'use strict';

const AWS = require('aws-sdk');
const	ddb = new AWS.DynamoDB.DocumentClient();

exports.getOneClient = function(event, context, callback){
    console.log("event", event.id)
	const params = {
		TableName : process.env.TABLE_NAME,
		Key: {"id": event.id}
	};
	console.log("params", params)
	ddb.get(params, function(err, data){
		console.log("data", data)
		if(err){
		    callback(err, null);
		}else{
		    callback(null, data.Item);
		}
	});
}
