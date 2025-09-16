export const gatewayAuth = (req, res, next) => {
  const key = req.headers["x-gateway-key"];

  if (key !== process.env.GATEWAY_SECRET) {
    res.status(403).json({ error: "Forbidden: Only API Gateway allowed" });
    return;
  }

  next();
};
