{
  "version": 2,
  "env": {
      "ON_VERCEL": "true"
  },
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/now-builder",
      "config": {}
    }
  ]
}
