const { getPumps } = require("../../support/dynamo-service");
const { getNewPumpState } = require("../../support/pump-service");
const { sendEmail } = require("../../support/email-service");
const logger = require("../../support/logger")("plants-pumps");

exports.handler = async function (event, _context) {
  const results = await getPumps();

  const pumpsRaw = results.Items[0].values?.S;

  const pumps = getNewPumpState(pumpsRaw);
  if (process.env.EMAIL_SERVICE_ENABLE === "true" && pumps !== "000000000000") {
    await sendEmail(pumps);
  }
  logger.info(pumps);

  const _p = `${pumps}<<pumps`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      _p,
    },
  };
};
