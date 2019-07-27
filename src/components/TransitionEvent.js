export default class TransitionEvent {
    constructor() {
        this.EASING_WAYS = {
            'easeOutCubic' : 'easeOutCubic',
            'easeInOutCubic' : 'easeInOutCubic',
        }

        // this.TRANSITION_INTERVAL_IN_MILLIS = 1500; // for debugging
        this.TRANSITION_INTERVAL_IN_MILLIS = 800;
        this.DEFAULT_EASING_WAY = this.EASING_WAYS.easeOutCubic;
    }

    beforeEnter(el) {
        
    }

    enter(el, callback) {
        callback();
    }

    afterEnter(el) {
        
    }

    beforeLeave(el) {
        const elementId = $(el).attr('id');
        if (elementId === 'portfolio-detail') {
            this._beforeLeaveDetail()
        } else if (elementId === 'portfolio') {
            this._beforeLeaveList()
        }
    }

    leave(el, callback) {
        setTimeout(() => {
            callback();
        }, this.TRANSITION_INTERVAL_IN_MILLIS);
    }

    afterLeave(el) {
        
    }

    _beforeLeaveDetail() {
        $('.detail .portfolio-item-subtitle').hide();
        $('.detail .portfolio-work-count').css({
            'visibility': 'visible'
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

        $('.list .portfolio-item-brief').animate({
            'top': '0px',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('.list .portfolio-item-subtitle').animate({
            opacity: 1,
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

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