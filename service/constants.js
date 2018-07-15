// Web Service
const backendPort = 8080;
const localURI = `https://localhost:${backendPort}`;

module.exports.PORT = backendPort;
module.exports.ALLOWED_ORIGINS = [localURI];
module.exports.ABOUT = "Clustered Express Service";
