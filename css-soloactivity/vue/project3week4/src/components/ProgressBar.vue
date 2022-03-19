 <template>
  <body>
    <h1>Nutrishion Facts</h1>

    <p>Calories</p>
    <div class="container">
      <div class="skills html">19%</div>
    </div>

    <p>Fiber</p>
    <div class="container">
      <div class="skills css">12%</div>
    </div>

    <p>Carbohydrate</p>
    <div class="container">
      <div class="skills php">9%</div>
    </div>

    <p>Vitamin C</p>
    <div class="container">
      <div class="skills js">17%</div>
    </div>
  </body>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

.container {
  width: 100%;
  background-color: #ddd;
}

.skills {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
}

.html {
  width: 19%;
  background-color: #04AA6D;
}
.css {
  width: 12%;
  background-color: #2196F3;
}
.js {
  width: 17%;
  background-color: #f44336;
}
.php {
  width: 9%;
  background-color: #808080;
}
</style>
