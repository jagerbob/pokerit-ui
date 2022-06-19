import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr"
import { useEffect, useState } from "react"

export const useSignalRHub = () => {
  const [ hub, setHub ] = useState<HubConnection>();

  useEffect(() => {
    const getHub = async () => {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7255/pokerHub")
        .configureLogging(LogLevel.Information)
        .build();
      await connection.start();
      setHub(connection);
    }

    getHub().catch(console.error);
  }, []);

  return { hub }
}