<template>
  <div>
    <Nuxt class="max-w-2xl ml-0 lg:ml-20 p-4 pb-20" />
    <Footer />
  </div>
</template>
<style>
html {
  @apply text-gray-900;
}
.prose a,
.footer a {
  @apply text-indigo-600 no-underline;
}
.prose a:hover {
  @apply bg-yellow-200 text-gray-700;
}
.footer a:hover {
  @apply underline;
}
.prose img {
  @apply mx-auto;
}
.resp-embed {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}
.resp-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
