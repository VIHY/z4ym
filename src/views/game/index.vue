<template>
  <div class="games">
    <h1>This is a games page</h1>
    <mineSweeper></mineSweeper>
  </div>
</template>

<script>
import mineSweeper from '@/components/games/Minesweeper'
export default {
  components:{
    mineSweeper,
  },
  methods:{
  }
}
</script>

<style scoped>

</style>