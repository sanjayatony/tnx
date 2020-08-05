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
    },
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.excerpt,
        },
        {
          hid: "og-title",
          name: "og:title",
          content: this.doc.title,
        },
        {
          hid: "og-description",
          name: "og:description",
          content: this.doc.excerpt,
        },
        {
          hid: "og-image",
          name: "og:image",
          content: this.doc.img,
        },
        {
          hid: "tw-card",
          name: "tw:card",
          content: "summary_large_image",
        },
        {
          hid: "tw-title",
          name: "tw:title",
          content: this.doc.title,
        },
        {
          hid: "tw-description",
          name: "tw:description",
          content: this.doc.excerpt,
        },
        {
          hid: "tw-image",
          name: "tw:image",
          content: this.doc.img,
        },
      ],
    };
  },
};
</script>
