<template>
  <div>
    <div class="max-w-2xl mx-auto p-8">
      <nuxt-content :document="doc" />
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || "index").fetch();
    return { doc };
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description
        }
      ]
    };
  }
};
</script>
