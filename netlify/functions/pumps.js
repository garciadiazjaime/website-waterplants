const { getPumps } = require("../../support/dynamo-service");

exports.handler = async function (event, _context) {
  const results = await getPumps();
  const pumps = Array.isArray(results.Items) && results.Items[0].values?.S || "0000"

  const _p = `${pumps}<<pumps`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      _p
    },
  };
};
