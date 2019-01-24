// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'eu-west-2', 'endpoint': 'http://localhost:8000' });

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

var params = {
  TableName: 'F_CLIENT_LIST',
  Key: {
    'CLIENT_ID' : {N: '001'},
  },
  ProjectionExpression: 'LAST_NAME'
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});
