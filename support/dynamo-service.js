const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

const documentClient = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

module.exports.getPumps = () => {
  const params = {
    TableName: "plants",
  };

  return documentClient.scan(params).promise();
};

module.exports.updatePumps = (pumps) => {
  const batch = [
    {
      PutRequest: {
        Item: {
          id: { S: "1" },
          pumps: { S: "2345" },
          values: { S: pumps },
          updated: { N: new Date().getTime().toString() },
        },
      },
    },
  ];

  const params = {
    RequestItems: {
      plants: batch,
    },
  };

  return documentClient.batchWriteItem(params).promise();
};
