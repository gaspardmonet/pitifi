// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

export const config = { runtime: "experimental-edge" };

export default async function func(req) {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
