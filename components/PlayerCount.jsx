"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function PlayerCount() {
    const [players, setPlayers] = useState(null);
    const [online, setOnline] = useState(false);

    useEffect(() => {
        let interval;

        const fetchPlayerCount = async () => {
            try {
                const res = await axios.get("https://rplayer.neopix.in/", {
                    timeout: 4000
                });

                // expected: { players: number }
                if (typeof res.data?.players === "number") {
                    setPlayers(res.data.players);
                    setOnline(true);
                } else {
                    setOnline(false);
                }
            } catch (err) {
                setOnline(false);
            }
        };

        fetchPlayerCount();
        interval = setInterval(fetchPlayerCount, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                opacity: 0.9
            }}
        >
            {/* Status dot */}
            <span
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: online ? "#00ff66" : "#ff0033",
                    boxShadow: online
                        ? "0 0 10px rgba(0,255,102,0.8)"
                        : "0 0 10px rgba(255,0,51,0.8)"
                }}
            />

            {/* Text */}
            {online ? (
                <span>
                    <strong>{players}</strong> Players Online
                </span>
            ) : (
                <span>Server Offline</span>
            )}
        </div>
    );
}
