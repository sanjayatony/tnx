<template>
  <div class="fixed w-full bottom-0">
    <div class="footer p-2 bg-yellow-200 text-center">
      <p class="mb-0 text-xs">
        Want to chat? Mention
        <a href="https://twitter.com/sanjayatony" target="_blank"
          >@sanjayatony</a
        >, or email
        <a href="mailto:tony@sanjaya.info" target="_blank">tony@sanjaya.info</a
        >. <br class="md:hidden" />
        <span class="text-red-500">
          <span v-if="!needMoney"
            >Currently I'm not looking for a new project.</span
          >
          <span v-if="needMoney" class="uppercase font-bold"
            >I am open for a new project.</span
          >
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      needMoney: true
    };
  }
};
</script>
