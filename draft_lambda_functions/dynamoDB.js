
var AWS = require('aws-sdk');

AWS.config.update({region: 'eu-west-2', 'endpoint': 'http://localhost:8000' });

ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'CLIENT_ID',
      AttributeType: 'N'
    }
    // ,
    // {
    //   AttributeName: 'FIRST_NAME',
    //   AttributeType: 'S'
    // },
    // {
    //   AttributeName: 'LAST_NAME',
    //   AttributeType: 'S'
    // }
  ],
  KeySchema: [
    {
      AttributeName: 'CLIENT_ID',
      KeyType: 'HASH'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'F_CLIENT_LIST',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
