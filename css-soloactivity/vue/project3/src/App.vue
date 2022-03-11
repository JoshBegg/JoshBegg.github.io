<!--
#Original Author:    Josh Begg                                   #
#Date Created:           3/9/2022                             #
#Version:                  1.01                                #
#Date Last Modified:       3/11/2022                         #
#Modified by:                Josh Begg                           #
#Modification log:                                    #
 --added backgorund image
 added main nav
 added secondary side nav
 added accordian
 added card image
 added filler content as placeholder 
  -->
<template>
  <div id="app">
    <h1>Moo</h1>
    <Nav></Nav>
    <SideBar></SideBar>
    <Main msg="Lorem ipsum dolor sit amet" />
     <Accordin class="mb-1">
      <template v-slot:title>
        <span class="font-semibold text-xl">Duis</span>
      </template>
      <template v-slot:content>
        <p>
          <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
          porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
          accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
          itaque consectetur impedit?
        </p>
      </template>
     </Accordin>

    <Accordin class="mb-8">
      <template v-slot:title>
        <span class="font-semibold text-xl">Excepteur </span>
      </template>
      <template v-slot:content>
        <p>
          <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
          porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
          accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
          itaque consectetur impedit?
        </p>
      </template>
    
  
</Accordin>
<Card></Card>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Accordin from "./components/Accordin";
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Nav,
    SideBar,
    Main,
    Accordin,
    Card,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  
}
body{
  background-image:url("https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg");
}
</style>
