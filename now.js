{
  "version": 2,
  "env": {
      "ON_VERCEL": "true"
  },
  "builds": [
      {
          "src": "api/**/*.js",
          "use": "@now/node"
      },
      {
          "src": "nuxt.config.js",
          "use": "@nuxtjs/now-builder"
      }
  ],
  "routes": [
      {  "src": "/api/(.*)", "dest": "api/index.js" },
      { "src": "/api", "dest": "api/index.js" },
      { "src": "/(.*)", "dest": "$1" }
  ]
}
