module.exports.getPumps = async () => {
  const url = `.netlify/functions/pumps`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

module.exports.updatePumps = async (pumps) => {
  const url = `.netlify/functions/update-pumps?pumps=${pumps}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

module.exports.getNewPumpState = (pumpsRaw) => {
  let pumps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 12; i++) {
    const pin = pumpsRaw[i];
    pumps[i] = pin === "1" ? pin : 0;
  }

  return pumps.join("");
};
