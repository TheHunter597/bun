const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun is here boyyyes!");
  },
});
console.log("where the tango");
console.log("new lets make it new two");
console.log("new lets make it new three");

console.log(`Listening on http://localhost:${server.port} ...`);