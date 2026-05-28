export async function onRequestGet() {

  const now = new Date();

  return Response.json({
    serverTime: now.toISOString(),
    message: "Hello from Cloudflare backend"
  });

}
