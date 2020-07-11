<template>
  <div>
    <Header></Header>
    <Nuxt class="max-w-2xl mx-auto p-4" />
    <Footer></Footer>
  </div>
</template>
<style>
:root {
  --text-color: #4d5156;
  --url-color: #1a0dab;
  --url-visited: #609;
}
html {
  color: var(--text-color);
  @apply text-gray-800;
}
h1 {
  @apply text-5xl;
}
h2 {
  @apply text-4xl;
}
h3 {
  @apply text-3xl;
}
h4 {
  @apply text-2xl;
}
p,
ul {
  @apply text-lg mb-4 leading-loose;
}
hr {
  @apply my-8;
}
a {
  @apply text-purple-700 transition ease-in-out;
}
a:hover {
  @apply underline;
}
.nav ul {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.header h1 {
  @apply font-serif;
}
</style>
