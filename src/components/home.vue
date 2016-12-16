<template>
  <div class="home">
    <header-component></header-component>
    <div class="banner-view">
      <div class="banner-warp-view">
        <div class="banner-title">THIS IS MY <span>RESUME</span></div>
        <div class="banner-item">I'm a UI & WEB designer,and through this resume you will understand me.</div>
        <div class="banner-btn">
          <span>LEARN MORE</span>
          <i class="angle down icon"></i>  
        </div>
      </div>
    </div>
    <div class="home-main">
      <ul class="step-table-view">
        <li class="step-table-cell">
            <div class="hexagon"></div>
        </li>
        <li class="step-table-cell">
            <div class="hexagon"></div>
        </li>
        <li class="step-table-cell">
            <div class="hexagon"></div>
        </li>
        <li class="step-table-cell">
            <div class="hexagon"></div>
        </li>
      </ul>
    </div>
    <!--<div class="banner-warp">
      <div class="button pre-view">
        <i class="pre chevron circle left icon"></i>
      </div>
      <div class="wrap">
        <div class="carousel">
          <div id="banner1"></div>
          <div id="banner2"></div>
        </div>
      </div>
      <ul class="slider-number-view">
        <li class="slider-number-cell" v-for='(item, index) in sliderItem'>
          <i :class="item.active"></i>
        </li>
      </ul>
      <div class="button next-view">
        <i class="next chevron circle right icon"></i>
      </div>
    </div>-->
  </div>
</template>

<script src="../js/home.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="../style/home.less" scoped></style>