const rfs = require("rotating-file-stream");
const appRoot = require("app-root-path");

const accessLogStream = rfs.createStream("access.log", {
    interval: "3d",
    path: `${appRoot}/log`,
});

module.exports = accessLogStream;
