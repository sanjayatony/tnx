<template>
  <div>
    <PostHeader />
    <article class="prose">
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(`${params.slug}` || "index").fetch();
    return { page };
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.excerpt,
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
          content: this.page.title,
        },
        {
          hid: "og-description",
          property: "og:description",
          content: this.page.excerpt,
        },
        {
          hid: "og-image",
          property: "og:image",
          content: this.page.img,
        },
        {
          hid: "tw-card",
          property: "tw:card",
          content: "summary_large_image",
        },
        {
          hid: "tw-title",
          property: "tw:title",
          content: this.page.title,
        },
        {
          hid: "tw-description",
          property: "tw:description",
          content: this.page.excerpt,
        },
        {
          hid: "tw-image",
          property: "tw:image",
          content: this.page.img,
        },
      ],
    };
  },
};
</script>
