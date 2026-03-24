<template>
  <Hero />

  <Features />
  <Pricing />
  <Footer />
</template>

<script>
import Features from "@/components/Features.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import Pricing from "@/components/Pricing.vue"


export default {
  name: "HomeView",
  components: { Footer, Features, Hero, Pricing },
};
</script>

<style scoped>
</style>