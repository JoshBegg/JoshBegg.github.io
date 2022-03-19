<template>
  <div class="navbar">
    <a href="#Home">Home</a>
    <a href="#Facts">Facts</a>
    <a href="#Nutrishion">Nutrishion</a>
    <a href="#History">History</a>
    <a href="#Types">Types</a>
    <a href="#Price">Price</a>
    <a href="#SignUp">Sign Up</a>
  </div>
</template>

<style>
body {
  margin: 0;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background: #ddd;
  color: black;
}

.main {
  padding: 16px;
  margin-top: 30px;
  height: 1500px; /* Used in this example to enable scrolling */
}
</style>