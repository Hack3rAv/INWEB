"use client";

import { useEffect, useState } from "react";

export default function ServerStatus() {
    const [online, setOnline] = useState(false);
    const [players, setPlayers] = useState(0);

    async function fetchStatus() {
        try {
            const res = await fetch("https://rplayer.neopix.in/");
            const data = await res.json();

            // ✅ use API value directly
            setOnline(data.online === true);
            setPlayers(
                typeof data.players === "number" ? data.players : 0
            );
        } catch (err) {
            setOnline(false);
            setPlayers(0);
        }
    }

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="server-status">
            <span
                className={`status-dot ${online ? "online" : "offline"}`}
            ></span>

            {online ? (
                <span className="status-text">
                    Online ({players})
                </span>
            ) : (
                <span className="status-text">Offline</span>
            )}
        </div>
    );
}
