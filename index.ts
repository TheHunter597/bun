const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun is here boyyyes!");
  },
});
console.log("what the weeee");
console.log("new lets make it new three");

console.log(`Listening on http://localhost:${server.port} ...`);