export const getPumps = async () => {
  const url = `.netlify/functions/pumps`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
};

export const updatePumps = async (pumps) => {
  const url = `.netlify/functions/update-pumps?pumps=${pumps}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
