// const { getList } = require("../../support/dynamo-service");

// const mapper = (items) => items.map(item => ({
//   position: parseInt(item.position.N),
//   todo: item.todo.S,
//   uuid: item.uuid.S
// }))

exports.handler = async function (event, _context) {
  // const results = await getList();

  // const todos = mapper(results.Items).sort((a, b) => a.position - b.position)
  const _p = "0000<<pumps";

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      _p
    },
  };
};
