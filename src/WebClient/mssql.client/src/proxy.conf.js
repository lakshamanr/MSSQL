// require('process');

// const CommonAPI = 'https://localhost:5000';
// const PROXY_CONFIG = [ 
//   {
//     context: [
//       "/Tables",
//     ],
//     target: CommonAPI,
//     secure: false
//   },
//   {
//     context: [
//       "/Database",
//     ],
//     target: CommonAPI,
//     secure: false
//   },
//   {
//     context: [
//       "/LeftMenu",
//     ],
//     target: CommonAPI,
//     secure: false
//   },
//   {
//     context: [
//       "/common",
//     ],
//     target: CommonAPI,
//     secure: false
//   }
// ]

// module.exports = PROXY_CONFIG; 
// Define the common API target
const CommonAPI = 'http://localhost:5000';

const PROXY_CONFIG = [
  {
    context: [
      "/Tables",
      "/Database",
      "/LeftMenu",
      "/common",
      "/StoredProcedure",
      "/View"
    ],
    target: CommonAPI,
    secure: false,  // Set to true if using HTTPS
    changeOrigin: true,  // Helps when backend uses virtual hosts
    logLevel: "debug"    // Enable verbose logging for troubleshooting
  }
];

module.exports = PROXY_CONFIG;
