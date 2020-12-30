<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div>
    <h1>敬请期待~~~</h1>
  </div>
</template>

<script>
export default {
  created(){
    this.initSnow()
  },
  methods:{
    initSnow(){
      class Snow{
        constructor(opt = {}){
          this.el = null
          this.width = 0
          this.speed = opt.speed ? opt.speed : 2
          this.x = 0
          this.y = 0
          this.maxWidth = window.innerWidth
          this.maxHeight = window.innerHeight
          this.init()
        }
        init(){
          this.width = Math.floor(Math.random() * 20 + 20)
          this.x = Math.floor(Math.random() * this.maxWidth) * (Math.random() > 0.5 ? 1 : -1)
          this.y = Math.floor(Math.random() * this.maxHeight - this.maxHeight)
          this.spacity = Math.random()
        }
        setStyle(){
          this.el.style.cssText = `
          position:fixed;
          left:0;
          top:0;
          display:block;
          width:${this.width}px;
          height:${this.width}px;
          opacity:${this.opacity}px;
          background-image:radial-gradient(#fff 0%,rgba(255,255,255,0) 60%);
          border-radius:50%;
          z-index:9999999;
          pointer-events:none;
          `
        }
        move(){
          this.x = this.x + this.speed
          this.y = this.y + this.speed
          if(this.y > this.maxHeight){
            this.x = Math.floor(Math.random() * this.maxWidth) * (Math.random() > 0.5 ? 1 : -1)
            this.y = 0
          }
          this.el.style.left = this.x + 'px'
          this.el.style.top = this.y + 'px'
        }
        render(){
          this.el = document.createElement('div')
          this.setStyle()
          document.body.appendChild(this.el)
        }
      }
      let snowList = []
      for(let i = 0;i<100;i++){
        let snow = new Snow()
        snow.render()
        snowList.push(snow)
      }
      function moveSnow(){
        window.requestAnimationFrame(() => {
          for(let i = 0;i<snowList.length;i++){
            snowList[i].move()
          }
          moveSnow()
        })
      }
      moveSnow() 
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('./assets/bj/snow1.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
