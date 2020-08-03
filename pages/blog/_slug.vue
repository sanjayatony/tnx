<template>
  <div>
    <PostHeader />
    <article class="prose">
      <h1>{{ doc.title }}</h1>
      <p class="text=sm">{{ formatDate(doc.date) }}</p>
      <nuxt-content :document="doc" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`blog/${params.slug}` || "index").fetch();
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
