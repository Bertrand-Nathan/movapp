<!-- eslint-disable vue/multi-word-component-names -->
<template>
<!-- props variables des composents -->
  <div>
    <div v-on:click="showBurger" id="menu-burger">
      <span></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuBurger',
  methods: {
    showBurger () {
      const burger = document.getElementById('menu-burger')
      burger.classList.toggle('active')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* menu burger */
#menu-burger {
    width: 42px;
    height: 42px;
    margin:auto 0;
    cursor: pointer;
    position: relative;
    top: -40px;
  }
  #menu-burger span{
    width: 100%;
    height: 4px;
    background-color: black;
    display: block;
    position: absolute;
    transition: background-color 0.3s ease-in-out;
  }
  #menu-burger span::before, #menu-burger span::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: black;
    transition: transform  0.5s ease-in-out;
    left: 0;
  }
  #menu-burger span::before{
    transform: translateY(-10px);
  }
  #menu-burger span::after{
    transform: translateY(10px);
  }
  #menu-burger.active span{
    background-color: transparent;
  }
  #menu-burger.active span::before{
    transform: translateY(0px) rotateZ(45deg);
  }
  #menu-burger.active span::after{
      transform: translateY(0px) rotateZ(-45deg);
    }
  .burger{
    display: none;
  }
</style>
