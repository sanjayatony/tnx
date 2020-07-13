<template>
  <div>
    <p>Hey there 👋</p>
    <p>Since you already here, I will introduce myself.</p>

    <p>
      I am Tony, a web developer and a dad,
      <n-link to="/devdad">devdad</n-link>, from Indonesia. I have been
      a professional web developer since 2012.
    </p>

    <p>
      Since then, I have built
      <nuxt-link to="/works">many kinds of websites</nuxt-link>, and
      focus more on WordPress. WordPress theme, plugin, maintenance, anything
      related to WordPress, you name it.
    </p>

    <p>
      I am currenctly working for
      <a href="https://peepso.com">PeepSo</a>, a
      social network plugin for WordPress that allows you to quickly and
      effortlessly add a social network or an online community, similar to
      Facebook right inside your WordPress site.
    </p>

    <p>
      Besides WordPress (PHP), I also speak JS, especially Vue. But I think
      still not ready for production yet. Just wait for it. 😎
    </p>
  </div>
</template>
<script>
export default {
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
