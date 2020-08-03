<template>
  <article class="prose">
    <h1>{{ doc.title }}</h1>
    <p class="text=sm">{{ formatDate(doc.date) }}</p>
    <nuxt-content :document="doc" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`post/${params.slug}` || "index").fetch();
    console.log(doc);
    return { doc };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
