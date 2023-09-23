const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun is here boyyyes!");
  },
});
console.log("what the hell");

console.log(`Listening on http://localhost:${server.port} ...`);