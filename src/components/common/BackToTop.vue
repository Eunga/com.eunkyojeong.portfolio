<template>
  <div id="back-to-top">
    <span id="back-to-top-btn">
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
    $("#back-to-top-btn").on('click', function() { 
      $('html, body').animate({scrollTop : 0}, 700);
		  return false;
    })
  }
}
</script>

<style>
#back-to-top {
  text-align: center;
  margin-top: 120px;
  margin-bottom: 56px;
}

#back-to-top-btn {
  cursor: pointer;
}

#back-to-top svg {
  margin-right: 10px;
}

#back-to-top span {
  text-align: center;
  font-family: Questrial;
  font-size: 22px;
  letter-spacing: -0.22px;
  color: #000000;
  opacity: .5;
  transition: opacity 0.3s ease-out;
}

#back-to-top-btn {
  padding: 10px;
}

#back-to-top:hover span, #back-to-top:hover .b {
  opacity: 1;
}

/* #back-to-top:hover .b {
  stroke:#000;
} */

#back-to-top .a{fill:#fff;}
#back-to-top .b{transition: opacity 0.5s ease-out; opacity: 0.5; fill:none;stroke:#000000;stroke-width:1.4px;}

@media (max-width: 767px) {
  #back-to-top {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  #back-to-top span {
    font-size: 14px;
  }

  #back-to-top span {
    font-size: 14px;
  }

  #back-to-top-btn svg {
    transform: scale(.6);
    margin-right: 0px;
  }
}
</style>
