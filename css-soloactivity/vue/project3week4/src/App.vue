<template>
  <div id="app">
    <Nav></Nav>
    <a name="Home" />
    <Main msg="Bananas!" />
    <Card></Card>
    <a name="Facts" />
    <h2>Banana Facts</h2>
    <Accordin class="mb-1">
      <template v-slot:title>
        <span class="font-semibold text-xl">Fact 1</span>
      </template>
      <template v-slot:content>
        <p>
          A banana is a berry not a fruit. This is because botanically a berry
          contains seeds inside the flesh, not outside.
        </p>
      </template>
    </Accordin>

    <Accordin class="mb-8">
      <template v-slot:title>
        <span class="font-semibold text-xl">Fact 2</span>
      </template>
      <template v-slot:content>
        <p>
          Banana does not grow on a tree but on an herb. A tree’s stem is made
          of wood unlike the banana’s, which is made of fibres.
        </p>
      </template>
    </Accordin>
    <Accordin class="mb-8">
      <template v-slot:title>
        <span class="font-semibold text-xl">Fact 3</span>
      </template>
      <template v-slot:content>
        <p>
          Bananas are sterile; you can’t sow seeds and grow them. Bananas are
          grown by cutting a piece from another plant, sort of cloning. Which
          means the banana you are eating today is genetically the same as the
          banana your grandfather ate.
        </p>
      </template>
    </Accordin>
    <Accordin class="mb-8">
      <template v-slot:title>
        <span class="font-semibold text-xl">Fact 4</span>
      </template>
      <template v-slot:content>
        <p>
          Bananas have been cultivated for the past 10,000 years or so in
          Southeast Asia. From there it moved to West Asia and Africa.
        </p>
      </template>
    </Accordin>
    <Accordin class="mb-8">
      <template v-slot:title>
        <span class="font-semibold text-xl">Fact 5</span>
      </template>
      <template v-slot:content>
        <p>
          Bananas are radioactive! They contain small amounts of the isotope
          potassium-40. But for the radiation to be harmful you need to eat
          close to 700 bananas daily for over 80 years.
        </p>
      </template>
    </Accordin>
    <a name="Nutrishion" />
    <ProgressBar></ProgressBar>
    <a name="History" />
    <Timeline></Timeline>
    <a name="Types" />
    <Table></Table>
    <a name="Price" />
    <product-list-one></product-list-one>

    <a name="SignUp" />
    <SignupSheet></SignupSheet>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";

import Accordin from "./components/Accordin";
import Card from "./components/Card";
import Main from "./components/Main";
import Nav from "./components/Nav";
import ProgressBar from "./components/ProgressBar";

import SignupSheet from "./components/SignupSheet";
import Timeline from "./components/Timeline";
import Table from "./components/Table";

export default {
  name: "app",
  components: {
    "product-list-one": ProductListOne,

    Nav,

    Main,
    Accordin,
    Card,
    ProgressBar,
    SignupSheet,
    Timeline,
    Table,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(185, 185, 219);
}
Nav {
  position: fixed;
}
</style>
