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
  --hover-color: #68b5fb;
  --url-visited: #609;
}
html {
  @apply text-gray-700;
}
.header a {
  @apply text-purple-600 no-underline;
  &:hover {
    @apply underline;
  }
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
  @apply text-purple-600;

  &:hover {
    @apply underline transition ease-out duration-700;
  }
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
