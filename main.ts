
addEventListener("fetch", async (event) => {
  event.respondWith(
    new Response(await (await fetch("https://raw.githubusercontent.com/AppleMayExist/word-swap/main/wordSwap.html")).text(), {
      status: 200,
      headers: { "content-type": "text/plain" },
    }),
   );
});
