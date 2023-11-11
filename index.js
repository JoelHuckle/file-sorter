const fs = require("fs");
const path = require("path");

const extensions = {
  ".docx": "Documents",
  ".pdf": "Documents",
  ".mp3": "Audio",
  ".wav": "Audio",
  ".png": "Images",
  ".jpeg": "Images",
  ".zip": "Zips",
  ".flp": "Flps",
};

fs.readdir("/Users/joelhuckle/Downloads", "", (err, data) => {
  if (err) throw err;
  data.forEach((file) => {
    const ext = path.extname(file);
    if (ext) {
      const oldPath = path.join("/Users/joelhuckle/Downloads", file);
      const newPath = path.join(
        "/Users/joelhuckle/Downloads",
        extensions[ext] || "Other",
        file
      );

      fs.rename(oldPath, newPath, function (err) {
        if (err) throw err;
        console.log(`${file} moved to ${newPath}`);
      });
    }
  });
});
