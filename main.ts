
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(String(import.meta), {
      status: 200,
      headers: { "content-type": "text/plain" },
    }),
   );
});
