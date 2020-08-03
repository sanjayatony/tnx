<template>
  <div>
    <Header />
    <article class="prose">
      <p>Hey there 👋🏼</p>
      <p>Since you already here, I will introduce myself.</p>
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
      <p>
        Besides WordPress (PHP), I also speak JS, especially Vue. But I think
        still not ready for production yet. Just wait for it. 😎
      </p>
      <h3>Thoughts & Ideas</h3>
      <ul class>
        <li v-for="doc in docs" :key="doc.slug">
          <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content("post")
      .sortBy("date", "desc")
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
