const dynamoService = require("../../support/dynamo-service");

exports.handler = async function (event, _context) {
  const pumps = event.multiValueQueryStringParameters.pumps;

  await dynamoService.updatePumps(pumps.join());

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
