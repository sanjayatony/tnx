<template>
  <div>
    <PostHeader />
    <article class="prose">
      <h1>{{ doc.title }}</h1>
      <span class="text-sm">{{ formatDate(doc.date) }}</span>
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
          hid: "og-type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "website",
        },
        {
          hid: "og-title",
          property: "og:title",
          content: this.doc.title,
        },
        {
          hid: "og-description",
          property: "og:description",
          content: this.doc.excerpt,
        },
        {
          hid: "og-image",
          property: "og:image",
          content: this.doc.img,
        },
        {
          hid: "tw-card",
          property: "tw:card",
          content: "summary_large_image",
        },
        {
          hid: "tw-title",
          property: "tw:title",
          content: this.doc.title,
        },
        {
          hid: "tw-description",
          property: "tw:description",
          content: this.doc.excerpt,
        },
        {
          hid: "tw-image",
          property: "tw:image",
          content: this.doc.img,
        },
      ],
    };
  },
};
</script>
