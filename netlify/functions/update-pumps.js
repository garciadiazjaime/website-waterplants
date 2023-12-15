const dynamoService = require("../../support/dynamo-service");
const { getNewPumpState } = require("../../support/pump-service");
const logger = require("../../support/logger")("plants-update");

exports.handler = async function (event, _context) {
  const pumps = getNewPumpState(event.multiValueQueryStringParameters.pumps[0]);

  logger.info("pumps", { pumps });
  await dynamoService.updatePumps(pumps);

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
