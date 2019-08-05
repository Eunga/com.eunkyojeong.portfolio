<template>
  <div class="portfolio-works">
    <!-- Overview -->
    <div class="portfolio-work-wrap animatable fadeInUp">
      <div class="portfolio-work v-container-fluid">
        <div class="row">
          <div class="order-sm-last order-md-1 col-md-6 col-sm-12">
            <div class="portfolio-work-title subtitle-sm">Overview</div>
            <div>
              <br />
              Rivu는 영어 공부를 할 때, 영단어 및 영숙어를 외우기 위한 어플리케이션입니다. 사용자가 스스로 단어를 입력할 수 있는 기능을 제공하며, 설정된 시간에 Notification 등을 통하여 주기적으로 반복 학습을 할 수 있습니다.
            </div>
          </div>

          <div
            class="order-sm-1 order-md-last work-meta-sm offset-md-4 col-md-2 offset-sm-0 col-sm-12 offset-xs-0 col-xs-12"
          >
            <div class="work-date row">
              <div class="portfolio-work-title subtitle-sm subtitle col-md-12 col-sm-3">Date</div>
              <div class="col-md-12 col-sm-9">December 2018</div>
            </div>

            <div class="row">
              <div class="portfolio-work-title subtitle-sm subtitle col-md-12 col-sm-3">Role</div>
              <div class="col-md-12 col-sm-9">Project Owner<br/>UI Designer<br/>UX Designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Challenge -->
    <div class="portfolio-work-wrap animatable fadeInUp">
      <div class="portfolio-work v-container-fluid">
        <div class="row">
          <div class="offset-md-3 col-md-9 offset-sm-0 col-sm-12">
            <div class="portfolio-work-title subtitle-sm">Challenge</div>
          </div>
        </div>

        <!-- Better usability for heavy users -->
        <div class="row">
          <div class="offset-md-3 col-md-9 offset-sm-0 col-sm-12">
            <div class="portfolio-work-title subtitle-lg">Easy to save words</div>
          </div>
        </div>
        <div class="row">
          <div class="offset-md-3 col-md-6 offset-sm-0 col-sm-12">
            쉽게 영단어, 영숙어를 입력 할 수 있어야합니다.
          </div>
        </div>
      </div>
    </div>

    <!-- The Problem -->
    <div class="portfolio-work-wrap animatable fadeInUp">
      <div class="portfolio-work v-container-fluid">
        <div class="row">
          <div class="offset-md-3 col-md-9 offset-sm-0 col-sm-12">
            <div class="portfolio-work-title subtitle-sm">The Problem</div>
          </div>
        </div>

        <!-- Right from the user -->
        <div class="row">
          <div class="offset-md-3 col-md-9 offset-sm-0 col-sm-12">
            <div class="portfolio-work-title subtitle-lg">수많은 경쟁사</div>
          </div>
        </div>
        <div class="row">
          <div
            class="offset-md-3 col-md-6 offset-sm-0 col-sm-12"
          >
            경쟁사 앱들이 너무 많았습니다.
          </div>
        </div>

        <!-- Pain Point -->
        <div class="row" style="margin-top: 120px;">
          <div class="offset-md-3 col-md-9 offset-sm-0 col-sm-12">
            <div class="portfolio-work-title subtitle-lg">Pain Point</div>
          </div>
        </div>
        <div class="row">
          <div
            class="offset-md-3 col-md-6 offset-sm-0 col-sm-12"
          >
            만들어주는 개발자 역량이 다소 부족하였습니다 흐규ㅠ
          </div>
        </div>

        <div class="row">
          <div style="margin-top: 60px;" class="dw-one-images offset-md-1 col-md-10 offset-sm-0 col-sm-12">
            <img style="width:100%;" src="../../assets/img/portfolio/dw/portfolio-dw-painpoint.png" alt="painpoint" />
          </div>
        </div>
      </div>
    </div>


    <!-- Ideation -->
    <div class="portfolio-work-wrap animatable fadeInUp">
      <div class="portfolio-work v-container-fluid">
        <div class="row">
          <div class="offset-md-3 col-md-9 offset-sm-0 col-sm-12">
            <div class="portfolio-work-title subtitle-sm">Ideation</div>
          </div>
        </div>

        <div class="row">
          <div style="margin-top: 60px;" class="dw-one-images offset-md-1 col-md-10 offset-sm-0 col-sm-12">
            <img style="width:100%;" src="../../assets/img/portfolio/rivu/portfolio-rivu-ideation-1.png" alt="ideation1" />
            <img style="width:100%;" src="../../assets/img/portfolio/rivu/portfolio-rivu-ideation-2.png" alt="ideation2" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Workbase from "./Workbase.vue";

export default {
  extends: Workbase,
  name: "Rivu"
};
</script>

<style lang="scss">
#arrowAfterAndBefore {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#arrowAfterAndBefore svg .a {
  fill: rgba(255, 255, 255, 0);
}

#arrowAfterAndBefore svg .b {
  fill: none;
  stroke: #666;
  stroke-width: 2px;
}

#dw-ideation-frame {
  
}

#dw-ideation-anime {
  position: absolute;
  width: 39.5833333333%;
  margin-left: 47.5694444444%;
  z-index: 99;
  margin-top: 11.2970711297%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

</style>
