new Vue({
  el: '#exercise',
  data: {
    highlightFlag : true,
    shrinkFlag : false
  },
  methods: {
    startEffect: function() {
      this.highlightFlag = !this.highlightFlag
      this.shrinkFlag = !this.shrinkFlag
      
    },
    call(){
      console.log(this.h);
      this.h = !this.h
    }
  }
});
