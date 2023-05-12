import Head from "next/head";
import { useState, useEffect } from "react";

import { getPumps, updatePumps } from "@/support/pump-service";

const initPumps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function Home() {
  const [pumps, setPumps] = useState([...initPumps]);

  const pumpClickHandler = async (index) => {
    const nextPumps = [...initPumps];

    if (!pumps[index]) {
      if (confirm("Confirm you want to turn it on")) {
        nextPumps[index] = 1;
      }
    }

    setPumps(nextPumps);
    await updatePumps(nextPumps.join(""));
  };

  useEffect(() => {
    getPumps().then((response) => {
      const pumpsNewState = [...initPumps];
      const header = response.headers.get("_p");
      for (let i = 0; i < 12; i++) {
        const pin = header[i];
        pumpsNewState[i] = parseInt(pin) ? +pin : 0;
      }
      setPumps(pumpsNewState);
    });
  }, []);

  return (
    <>
      <Head>
        <title>💦 🌱 Water Plants</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          {pumps.map((pum, index) => (
            <div
              key={index}
              style={{
                border: "1px solid black",
                padding: 24,
                margin: "24px 0",
                textAlign: "center",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                fontSize: 48,
              }}
              onClick={() => pumpClickHandler(index)}
            >
              <span style={{ opacity: 0.7 }}>Pump {index + 1}</span>
              <span>{pumps[index] ? `🟢` : `🔴`}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
