<template lang="pug">
  .timeline
    ul(:style='{width:scrollWidth}')
      li.card(v-for='item in items')
        .poster
        .info
          .name {{item.name}}
          .time 年份： {{year(item.yearRange)}}
          .place 发现地： {{item.place}}
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import IScroll from '../modules/iscroll'

export default {
  methods: {
    year (range) {
      return range.map((year) => {
        if (year < 0) {
          return -year + 'BC'
        }
        return year
      }).join('~')
    }
  },
  mounted () {
    this.iscroll = window.iscroll = new IScroll(this.$el, {
      mouseWheel: true,
      scrollX: true,
      scrollY: false,
      preventDefaultException: {
        tagName: /^(A)$/
      },
      snapStepX: 210,
      snap: true,
      click: true
    })
  },
  watch: {
    items () {
      console.log('this.items', this.items)
      Vue.nextTick(() => {
        this.iscroll.refresh()
      })
    }
  },
  computed: {
    scrollWidth () {
      return 210 * this.items.length + "px"
    },
    ...mapState('map', ['items'])
  }
}
</script>

<style lang="less">
.timeline {
  position: absolute;
  bottom: 0;
  height: 110px;
  width: 100%;
  overflow: hidden;
  ul {
    white-space: nowrap;
    display: flex;
    .card {
      display: inline-block;
      border-radius: 3px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      width: 200px;
      height: 80px;
      margin-right: 10px;
      padding: 10px;
      box-sizing: border-box;
      float: left;
      background-color: #fff;
      list-style: none;
      font-size: 14px;
      line-height: 1.5;
      .info {
        overflow: hidden;
      }
      .place {
        // white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
  }
}
</style>
