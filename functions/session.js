export async function onRequestPost(context) {

  const body = await context.request.json();

  const minutes = body.minutes;

  // VALIDATION
  if (!minutes || minutes < 1 || minutes > 600) {
    return Response.json({
      success: false,
      error: "Invalid session"
    }, {
      status: 400
    });
  }

  // SERVER-SIDE SCORE
  const points = minutes * 2;

  return Response.json({
    success: true,
    points
  });
}
