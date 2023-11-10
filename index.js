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

//for each file in folder,
//if file in Object.values(extensions)
//if not, get extension and add to respective folder
//if not in extensions, add to Unspecified

let files = [];

fs.readdir("/Users/joelhuckle/Downloads", "", (err, data) => {
  if (err) throw err;
  data.forEach((file) => {
    const ext = path.extname(file);
    if (ext) {
    }
  });
});
