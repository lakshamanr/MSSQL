const fs = require("fs-extra");

const src = "node_modules/electron/dist";
const dest = "Electron";

fs.copy(src, dest)
  .then(() => console.log("✅ Electron copied successfully!"))
  .catch(err => console.error("❌ Error copying Electron:", err));
