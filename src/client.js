import net from "net";

const socket = net.Socket();
socket.connect(8000, "localhost");

socket.write("Hola?");

socket.on("error", (err) => {
  throw err;
});

socket.on("data", (data) => console.log(data.toString()));
