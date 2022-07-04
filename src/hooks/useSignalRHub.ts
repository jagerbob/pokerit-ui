import { HubConnection, HubConnectionBuilder, JsonHubProtocol, LogLevel } from "@microsoft/signalr"
import { useEffect, useState } from "react"

export const useSignalRHub = () => {
  const [hub, setHub] = useState<HubConnection>();

  useEffect(() => {
    const getHub = async () => {
      console.log("URL: " + process.env.REACT_APP_WS_SERVER_URL);
      console.log("PORT: " + process.env.REACT_APP_WS_SERVER_PORT);
      const connection = new HubConnectionBuilder()
        .withUrl(`https://${process.env.REACT_APP_WS_SERVER_URL}:${process.env.REACT_APP_WS_SERVER_PORT}/pokerHub`)
        .configureLogging(LogLevel.Information)
        .build();
      await connection.start();
      setHub(connection);
    }

    getHub().catch(console.error);
  }, []);

  return { hub }
}