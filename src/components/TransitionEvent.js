;

export default class TransitionEvent {
  constructor() {
    this.EASING_WAYS = {
      'easeOutCubic': 'easeOutCubic',
      'easeInOutCubic': 'easeInOutCubic',
    }

    // this.TRANSITION_INTERVAL_IN_MILLIS = 1500; // for debugging
    this.TRANSITION_INTERVAL_IN_MILLIS = 600;
    this.DEFAULT_EASING_WAY = this.EASING_WAYS.easeOutCubic;
  }

  beforeEnter(srcPath, destPath) {

  }

  enter(srcPath, destPath, callback) {
    callback();
  }

  afterEnter(srcPath, destPath) {

  }

  beforeLeave(srcPath, destPath) {
    if (destPath === 'about') {
      // do nothing
      return;
    }

    if (srcPath === 'portfolio-detail') {
      this._beforeLeaveDetail()
    } else if (srcPath === 'portfolio') {
      this._beforeLeaveList()
    }
  }

  leave(srcPath, destPath, callback) {
    if (destPath === 'about') {
      callback();
      return;
    }

    setTimeout(() => {
      callback();
    }, this.TRANSITION_INTERVAL_IN_MILLIS);
  }

  afterLeave(srcPath, destPath) {

  }

  _beforeLeaveDetail() {
    $('.detail .portfolio-item-subtitle').hide();
    $('.detail .portfolio-work-count').css({
      'visibility': 'visible'
    });

    $('#portfolio-meta').attr({
      'style': 'height: 100% !important;'
    });

    $('#footer').css({
      'position': 'absolute',
      'bottom': '0px'
    });

    $('#footer div').animate({
      'opacity': '1'
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('.detail .portfolio-item-brief').attr({
      'style': 'top: initial !important',
    });

    $('.detail .portfolio-item-brief').animate({
      'bottom': '0px'
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('.detail .portfolio-item-stuff img').transition({
      'scale': '1.3',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('.detail .portfolio-detail-info').transition({
      y: 300,
      opacity: 0,
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#margin.detail #margin-left').transition({
      'x': '120',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#margin.detail #margin-right').transition({
      'x': '-120',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#margin.detail #margin-bottom').hide();

    $('#margin.detail #margin-top').transition({
      'y': '120',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#portfolio-meta').transition({
      'height': '100vh'
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);
  }

  _beforeLeaveList() {
    $('.list .portfolio-work-count').css({
      'visibility': 'hidden'
    });

    $('#footer').css({
      'position': 'relative'
    });

    $('#footer div').animate({
      'opacity': '0'
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    const widthOfWindow = window.innerWidth;
    let topOfPortfolioItemBrief = 0;
    if (widthOfWindow < 768) {
      topOfPortfolioItemBrief = 200;
    } else if ((widthOfWindow >= 768) && (widthOfWindow < 1280))  {
      topOfPortfolioItemBrief = 110;
    }
    $('.list .portfolio-item-brief').animate({
      'top': `${topOfPortfolioItemBrief}px`,
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('.list .portfolio-item-subtitle').show();

    $('.list .portfolio-item-subtitle').css({
      opacity: 1
    });
    // $('.list .portfolio-item-subtitle').animate({
    //   opacity: 1,
    // }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('.list .portfolio-item-stuff img').transition({
      'scale': '0.8',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#margin.home #margin-left').transition({
      'x': '-120',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#margin.home #margin-right').transition({
      'x': '120',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#margin.home #margin-bottom').transition({
      'y': '120',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#margin.home #margin-top').transition({
      'y': '-120',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

    $('#portfolio-bottom-mask').animate({
      'top': '640px',
    }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);
  }
}