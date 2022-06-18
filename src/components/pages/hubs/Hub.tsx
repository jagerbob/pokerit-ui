import { useParams } from "react-router";

export const Hub = () => {
  const {hubId} = useParams();

  return (
    <p>Hey I'm hub {hubId}</p>
  );
}