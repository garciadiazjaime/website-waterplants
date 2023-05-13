const { getPumps } = require("../../support/dynamo-service");
const { getNewPumpState } = require('../../support/pump-service')

exports.handler = async function (event, _context) {
  const results = await getPumps();

  const pumpsRaw = results.Items[0].values?.S

  const pumps = getNewPumpState(pumpsRaw)
  console.log(pumps)

  const _p = `${pumps}<<pumps`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      _p,
    },
  };
};
