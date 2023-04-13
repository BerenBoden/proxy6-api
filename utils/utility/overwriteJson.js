const fs = require("fs");

function overwriteJson(filePath, newData) {
  fs.writeFile(
    filePath,
    JSON.stringify(newData, null, 2),
    "utf8",
    (writeErr) => {
      if (writeErr) {
        console.error("Error writing to JSON file:", writeErr.message);
        return;
      } else {
        return;
      }
    }
  );
}

module.exports = overwriteJson;
