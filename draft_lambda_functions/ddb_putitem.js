// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'eu-west-2', 'endpoint': 'http://localhost:8000' });

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

var params = {
  TableName: 'F_CLIENT_LIST',
  // method to take inoformation (JSON object?) and produce the Item - flexible for any JSON input.
  Item: {
    'CLIENT_ID' : {N: '001'},
    'FIRST_NAME' : {S: 'Richard'},
    'LAST_NAME' : {S: 'Roe'},
    'VOICEMAIL_AUTHORISED' : {BOOL: true},
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
