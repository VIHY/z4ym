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
  data() {
    return {
      wind: {
        direction: "right",
        level: 3,
      },
      snowCount:500,
    };
  },
  created() {
    this.initSnow();
  },
  methods: {
    initSnow() {
      class Snow {
        constructor(data, opt = {}) {
          this.data = data; // 获得vue对象的data，实时监听风向风力
          this.type = opt.type || "normal";
          this.el = null;
          this.width = opt.width || Math.floor(Math.random() * 25 + 10);
          this.speed = opt.speed || 0;
          this.x = 0;
          this.y = 0;
          // this.opacity = (Math.floor(Math.random() * 5) + 6) / 10;
          this.opacity = this.randomTrueOrFalse() ? opt.width / 80 : (Math.floor(Math.random() * 5) + 6) / 10;
          this.maxWidth = window.innerWidth;
          this.maxHeight = window.innerHeight;
          this.lastSpeed = opt.speed || 0;
          this.count = 0; // 移动超过X次后随机改变横向速度
          this.init();
        }
        randomTrueOrFalse(){
          return Math.random() > 0.5 ? true : false
        }
        init() {
          this.x =
            Math.floor(Math.random() * this.maxWidth) *
            (Math.random() > 0.5 ? 1 : -1);
          this.y = Math.floor(Math.random() * this.maxHeight - this.maxHeight);
        }
        setStyle() {
          this.el.style.cssText = `
          position:fixed;
          left:0;
          top:0;
          display:block;
          width:${this.width}px;
          height:${this.width}px;
          opacity:${this.opacity};
          background-image:radial-gradient(#fff 0%,rgba(255,255,255,0) 60%);
          border-radius:50%;
          z-index:9999999;
          pointer-events:none;
          `;
        }
        move() {
          this.count++;
          if (this.count > 10) {
            this.speed = this.lastSpeed + Math.floor(Math.random() * 3) - 1;
            this.count = 0;
          }
          this.speed = this.speed > 3 ? 3 : this.speed < -3 ? -3 : this.speed;
          this.lastSpeed = this.speed;
          if (this.data.wind.direction == "left") {
            this.x = this.x - Number(this.data.wind.level) + this.speed;
          } else {
            this.x = this.x + Number(this.data.wind.level) + this.speed;
          }
            this.y = this.y + this.width / 15;
            this.y = this.y + this.width / 15;
          if (this.y > this.maxHeight) {
            this.x =
              Math.floor(Math.random() * this.maxWidth) *
              (Math.random() > 0.5 ? 1 : -1);
            this.y = 0;
          }
          this.el.style.left = this.x + "px";
          this.el.style.top = this.y + "px";
        }
        render() {
          this.el = document.createElement("div");
          this.setStyle();
          document.body.appendChild(this.el);
        }
      }
      let snowList = [];
      for (let i = 0; i < this.snowCount; i++) {
        let count = 0
        let width = Math.ceil(Math.random() * 100 +10)
        while(width > 70 && count < 5){
          width = Math.ceil(Math.random() * 100 +10)
          count++
        }
        let snow = new Snow(this.$data, { width})
        snow.render();
        snowList.push(snow);
      }
      function moveSnow() {
        window.requestAnimationFrame(() => {
          for (let i = 0; i < snowList.length; i++) {
            snowList[i].move();
          }
          moveSnow();
        });
      }
      moveSnow();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("./assets/bj/snow1.jpg");
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
