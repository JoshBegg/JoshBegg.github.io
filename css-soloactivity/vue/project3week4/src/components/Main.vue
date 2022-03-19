<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      Bananas are one of my favorite fruits to eat and one of the most common
      you see but there are lots people do not know about bananas here are some
      interesting things about them.
    </p>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
