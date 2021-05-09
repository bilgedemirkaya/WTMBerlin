<script>
import FooterCard from "./components/footer-card.vue"
export default {
  name: "App",
  components: {
    FooterCard
  }
}
</script>

<template>
<div>
  <div style="min-height: 100%">
  <div id="nav">
    <router-link to="/">Phones</router-link> |
    <router-link to="/apps">Apps</router-link>
  </div>
  <router-view/>
<footer-card id="footer" />
</div>
</div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  height: 100%;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #3f7973;
}
</style>
