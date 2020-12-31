<template>
  <div class="compo">
    <div>难度：{{level}}</div>
    <div>count：{{mines - suspected}}</div>
    <div v-for="(line, lineIndex) in minesweeper" :key="line" class="line">
      <div
        v-for="(column, columnIndex) in line"
        :key="column"
        class="column"
        @click="dig(lineIndex, columnIndex)"
      >
        <span>{{ column }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      level: "easy", // easy,middle,hard
      box: [],
      mines: 0,
      square: 0,
      suspected:0
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    minesweeper() {
      let res = [];
      for (let i = 0; i < this.square; i++) {
        let arr = [];
        for (let j = 0; j < this.square; j++) {
          if (this.box[i][j].front == true) {
            arr.push(this.box[i][j].value == -1 ? '雷' : this.box[i][j].value);
          } else {
            arr.push("");
          }
        }
        res.push(arr);
      }
      return res;
    },
  },
  methods: {
    init() {
      switch (this.level) {
        case "easy":
          this.mines = 10;
          this.square = 10;
          break;
        case "middle":
          this.mines = 20;
          this.square = 20;
          break;
        case "hard":
          this.mines = 30;
          this.square = 30;
          break;
        default:
          break;
      }
      for (let i = 0; i < this.square; i++) {
        let arr = [];
        for (let j = 0; j < this.square; j++) {
          arr.push({ value: 0, front: false });
        }
        this.box.push(arr);
      }
      let minesNumber = this.mines
      while (minesNumber > 0) {
        let x = Math.floor(Math.random() * this.square);
        let y = Math.floor(Math.random() * this.square);
        if (this.box[x][y].value == 0) {
          this.setMine(x, y);
          minesNumber--;
        }
      }
    },
    setMine(x, y) {
      this.box[x][y].value = -1;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let cx = x + i;
          let cy = y + j;
          if (cx < 0 || cx >= this.square || cy < 0 || cy >= this.square) {
            continue;
          } else if (this.box[x + i][y + j].value != -1) {
            this.box[x + i][y + j].value++;
          }
        }
      }
    },
    dig(x, y) {
      if (this.box[x][y].value == -1) {
        this.box[x][y].front = true
        alert("你输了！");
        return;
      } else if (this.box[x][y].value == 0) {
        this.deepSearch(x, y);
      } else {
        this.box[x][y].front = true;
      }
      let count = 0;
      for (let i = 0; i < this.square; i++) {
        for (let j = 0; j < this.square; j++) {
          if (this.box[i][j].front == true) {
            count++;
          }
        }
      }
      console.log(this.mines)
      if (count + this.mines == Math.pow(this.square, 2)) {
        alert("你赢了！");
      }
    },
    deepSearch(x, y) {
      if (
        x < 0 ||
        y < 0 ||
        x >= this.square ||
        y >= this.square ||
        this.box[x][y].value == -1 ||
        this.box[x][y].front == true
      ) {
        return;
      }
      this.box[x][y].front = true;
      if (this.box[x][y].value == 0) {
        this.deepSearch(x - 1, y);
        this.deepSearch(x - 1, y - 1);
        this.deepSearch(x + 1, y - 1);
        this.deepSearch(x, y - 1);
        this.deepSearch(x + 1, y);
        this.deepSearch(x + 1, y + 1);
        this.deepSearch(x, y + 1);
        this.deepSearch(x - 1, y + 1);
      }
    },
  },
};
</script>

<style scoped>
.compo {
  width: 400px;
  height: 500px;
  border: 1px solid red;
  background-color: rgb(192, 192, 192);
  padding: 10px;
}
.line {
  width: 400px;
  height: 39px;
}
.column {
  display: inline-block;
  width: 35px;
  cursor: pointer;
  height: 35px;
  margin: 2px;
  line-height: 35px;
  box-shadow: -1px -1px 0 1px #fff, 1px 1px 0 1px #aaa;
  vertical-align: middle;
}
</style>