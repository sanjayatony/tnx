<template>
  <div>
    <div class="prose prose-xl">
      <h1 class="text-center">Tony Sanjaya</h1>
      <p>
        I am Tony, a web developer and a dad,
        <n-link to="/devdad">devdad</n-link>, from Indonesia. I have been a
        professional web developer since 2012.
      </p>
      <p>
        Since then, I have built
        <nuxt-link to="/works">many kinds of websites</nuxt-link>, and focus
        more on WordPress. WordPress theme, plugin, maintenance, anything
        related to WordPress, you name it.
      </p>
    </div>
    <div class="prose mt-16">
      <h2>Thoughts & Ideas</h2>
      <ul class>
        <li v-for="doc in docs" :key="doc.slug">
          <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content("blog")
      .sortBy("updateAt", "desc")
      .fetch();
    console.log(docs);
    return { docs };
  },
  head() {
    return {
      title: "Tony Sanjaya",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "👨🏻‍💻 Web developer (especially WordPress) from Indonesia. I have been a professional web developer since 2012."
        }
      ]
    };
  }
};
</script>
