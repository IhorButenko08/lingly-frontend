import { io } from "socket.io-client";
import { ParsedUrlQuery } from "querystring";

let socket;

export default socket = io("http://localhost:3030/", {
  transports: ["websocket"],
});

export const createWriteSession = (id: string, uuid: string) => {
  socket.emit("write:create", { id, uuid });
};

export const writeSessionRequest = (uuid: any) => {
  socket.emit("write:request", { uuid });
};

export const answer = (uuid: string, answer: string) => {
  socket.emit("write:answer", { uuid, answer });
};
