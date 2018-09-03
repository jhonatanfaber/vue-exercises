new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight : true,
      shrink : false
    },
    float : 'float',
    userClass : "",
    isVisible: true,
    myStyle: {
    	width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
    	width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.effectClasses.highlight = !this.effectClasses.highlight
        this.effectClasses.shrink = !this.effectClasses.shrink
      },1500)
    },
    startProgress(){
      var width = 0
      setInterval(() => {
        width = width + 10
        if(this.checkProgressBarLength(width)) width = 0
        this.progressBar.width = width + "px"
      },500)
    },
    checkProgressBarLength(width){
      if(width > 100){
        return true
      }
    }
  }
});
