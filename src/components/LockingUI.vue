<template>
  <div id="lockingUI">

    <div id="lockingFormWrapper">
      <div id="lockingForm">
        <div id="lockingClose">
          <a
            onclick="gtag('event', 'Project', {'event_category': 'Click', 'event_label': 'Cancel to Unlock Project.'})">
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
              <g transform="translate(-1041 -732)">
                  <rect class="a" width="39" height="39" transform="translate(1041 732)"/>
                  <line class="b" y2="38" transform="translate(1047.5 738.5) rotate(-45)"/>
                  <line class="b" y2="38" transform="translate(1074.37 738.5) rotate(45)"/>
              </g>
            </svg>
         </a>
        </div>
        
        <h1>Protected<br/>Page</h1>
        <p>Please ask me for the password<br/>if you wish to proceed</p>
        <br/>
        <label>Password</label>
        
        <div style="position: relative;">
          <input type="password" id="lockingPassword"/>

          <div style="display: inline-block; position: absolute; right: 0;">
            <div id="lockingSubmit">
              <!-- gtag 손볼 것 -->
              <a onclick="gtag('event', 'Project', {'event_category': 'Click', 'event_label': 'Unlock Project.'})">
                <span>G O&nbsp;&nbsp;</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="17.417" height="12" viewBox="0 0 17.417 12">
                  <rect class="a" width="17" height="12" transform="translate(0.417)"/>
                  <path class="b" d="M10,0H25.667" transform="translate(-10 6.292)"/>
                  <path class="b" d="M1658.573,18177.992l5.1,5.105-5.1,5.1" transform="translate(-1647.366 -18176.949)"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id="lockingPasswordErrorField">
          Please enter the correct password :(
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LockingUI",
  props: {
    wantToShowProjectWork: {
      type: Object,
      required: false
    }
  },
  watch: {
    wantToShowProjectWork(old) {

    }
  },
  mounted() {
    $('body').bind('touchmove', function(e){e.preventDefault()})
    $('body').addClass('stop-scrolling');

    $("#lockingUI").addClass("show")
    $("#lockingPassword").focus();
      
    $("#lockingUI").on("click", () => {
      this.closeLockUI(false)
    });

    $("#lockingForm").on("click", (e) => {
      e.stopPropagation();
    });

    $("#lockingPassword").keypress((e) => {
      if (e.keyCode === 13) {
        $("#lockingSubmit").click()    
      }
    })

    $("#lockingSubmit").on("click", (e) => {
      const password = $("#lockingPassword").val();
      const answer = this.retrieveCurrentLockedProjectPassword()

      if (password == answer) {
        this.closeLockUI(true)
      } else {
        $("#lockingPassword").addClass("error")
        $("#lockingPasswordErrorField").addClass("error")
      }
    });

    $("#lockingClose a").on("click", () => {
      this.closeLockUI(false)
    });
  },

  methods: {
    closeLockUI(isSuccess) {
      this.reset()
      $('body').unbind('touchmove')
      $('body').removeClass('stop-scrolling')

      $("#lockingUI").removeClass("show")
      this.$emit("doUnlock", isSuccess)
    },
    reset() {
       $("#lockingPassword").val("");
       $("#lockingPassword").removeClass("error");
       $("#lockingPasswordErrorField").removeClass("error");
    },
    retrieveCurrentLockedProjectPassword() {
      if (this.wantToShowProjectWork == null ||
        this.wantToShowProjectWork.unlockedInfo == null || 
        this.wantToShowProjectWork.unlockedInfo.password == null) {
        throw Error("!!!!!!!!!!!!!!!!!")
      }
      
      return this.wantToShowProjectWork.unlockedInfo.password
    }
  }
}
</script>

<style>
#lockingUI {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.6);
  /* display: none; */
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

#lockingUI.show {
  display: block;
  opacity: 1;
}

#lockingFormWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 10% 0;
  min-height: 200px;
  align-items: center;
}

#lockingForm {
  position: relative;
  width: 420px;
  height: 372px;
  padding: 60px;
  border: 1px solid black;
  background-color: white;
}

#lockingClose {
  position: absolute;
  right: 30px;
  top: 30px;
}

#lockingClose a {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

#lockingForm h1 {
  font-family: Questrial;
  letter-spacing: -0.68px;
  color: #000000;
  opacity: 1;
  margin-bottom: 18px;
  font-size: 34px;
}

#lockingForm p {
  font-family: HelveticaNeue;
  font-size: 19px;
  letter-spacing: -0.38px;
  color: #000000;
  opacity: 0.3;
}

#lockingForm label {
  font-size: 14px;
  font-family: Questrial;
  letter-spacing: 1.4px;
  color: #000000;
  text-transform: uppercase;
  opacity: 0.3;
  margin-bottom: 0px;
}

#lockingPassword {
  width: 190px;
  border: none;
  border-bottom: 1px solid black;
  margin-right: 30px;
  height: 42px;
}

#lockingPassword.error {
  border-bottom: 1px solid red;
}

#lockingSubmit {
  width: 75px;
  height: 42px;
  background-color: white;
  border: 1px solid black;
  color: black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition-property: opacity, background-color;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
  cursor: pointer;
}

#lockingSubmit:hover {
  opacity: .9;
}

#lockingSubmit .a{fill:rgba(255,0,0,0);}
#lockingSubmit .b{fill:none;stroke:#000;}

#lockingClose .a,.b{fill:none;}
#lockingClose .b{stroke:#000;}

#lockingPasswordErrorField {
  font-size: 14px;
  display: none;
  font: HelveticaNeue;
  letter-spacing: -0.14px;
  color: red;
  margin-top:6px;
}

#lockingPasswordErrorField.error {
  display: block;
}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

@media (max-width: 767px) {
  #lockingFormWrapper {
    width: 100%;
    height: 100%;
  }

  #lockingForm {
    width: 100%;
    height: 100%;
    border: none;
    padding-top:60px;
  }

  #lockingClose {
    top: 10px;
  }

  #lockingPassword {
    width: 170px;
  }
}

#lockingUI input:focus{
  outline: none;
}
</style>