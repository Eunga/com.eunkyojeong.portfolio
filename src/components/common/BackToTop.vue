<template>
  <div id="back-to-top">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
        <g transform="translate(-857 -14811)">
          <rect class="a" width="35" height="35" transform="translate(857 14811)"/>
          <path class="b" d="M13304.807,6200.976l7,7-7,7" transform="translate(-5332.976 28135.809) rotate(-90)"/>
        </g>
      </svg>
      <span>Back to Top</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  mounted() {
    $("#back-to-top").on('click', function() { 
      $('html, body').animate({scrollTop : 0}, 700);
		  return false;
    })
  }
}
</script>

<style>
#back-to-top {
  cursor: pointer;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 56px;
}

#back-to-top span {
  text-align: center;
  font: Questrial;
  letter-spacing: -0.22px;
  color: #AAAAAA;
  transition: opacity 0.5s ease-out;
}

#back-to-top:hover span {
  color: #000000;
}

#back-to-top:hover .b {
  stroke:#000;
}

#back-to-top .a{fill:#fff;}
#back-to-top .b{fill:none;stroke:#aaa;stroke-width:1.4px;}

@media (max-width: 767px) {
  #back-to-top {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
