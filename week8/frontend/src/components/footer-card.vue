<script>
export default {
    name: "footerCard"
}
</script>
<template>
  <!-- Site footer -->
    <footer class="site-footer">
        <div class="row">
        <p class="text-justify">This project designed by <a href="https://www.linkedin.com/in/bilge-demirkaya/">Bilge Demirkaya</a> for the purpose of WTMB course. </p>
                      <p class="copyright-text"> Developed with Node.js & Vue.js  </p>

        <hr>
      </div>
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021</p>
          </div>
        </div>
</footer>
</template>

<style scoped>

.site-footer
{
  background-color:#edf7fa;
  margin-top: 48px;
  font-size:15px;
  line-height:24px;
  color:#504f4f;
  padding: 5px;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer a
{
  color:#000000;
}
.site-footer a:hover
{
  color:#757677;
  text-decoration:none;
}
</style>