<template>
  <!-- Side navigation -->
  <div class="sidenav">
    <a href="#">Delivery</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Products</a>
  </div>

  <!-- Page content -->
</template>
<script></script>
<style scoped>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  width: 130px;

  z-index: 1;
  top: 20px;
  left: 10px;
  background: rgb(43, 38, 38);
  overflow-x: hidden;
  padding: 8px 0;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #2196F3;
  display: block;
}

.sidenav a:hover {
  color: #ffffff;
}

.main {
  margin-left: 140px; /* Same width as the sidebar + left position in px */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
