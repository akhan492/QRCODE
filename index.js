const express = require("express");
const qr = require("qr-image");
const app = express();
const cors = require("cors");
app.use(cors()); // Enable CORS
app.get("/qrcode", (req, res) => {
  const url = req.query.url;
  const qr_svg = qr.image(url, { type: "png" });
  res.type("png");
  res.setHeader("Content-disposition", "attachment; filename=qr.png");
  res.setHeader("Content-type", "ima ge/png");
  qr_svg.pipe(res);
});

app.listen(8000, () => {
  console.log("QR code generator app listening on port 8000!");
});
