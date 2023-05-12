const dynamoService = require("../../support/dynamo-service");
const { getNewPumpState } = require("../../support/pump-service");

exports.handler = async function (event, _context) {
  const pumps = getNewPumpState(event.multiValueQueryStringParameters.pumps[0]);

  await dynamoService.updatePumps(pumps);

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
