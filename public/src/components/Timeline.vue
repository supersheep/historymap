<template lang="pug">
  .timeline
    #timeline
</template>

<script>
import { mapState } from 'vuex'
import vis from 'vis'
import 'vis/dist/vis.css'
export default {
  mounted () {
    
  },
  watch: {
    items () {
      if (this.timeline) {
        this.timeline.destroy()
      }
      var container = document.getElementById('timeline');
    
      // Create a DataSet (allows two way data-binding)
      var items = new vis.DataSet(this.items.map((item) => {
        const itm = {
          content: item.name,
          start: new Date(item.yearRange[0], 1, 1)
        }
        return itm
      }))

      console.log('items', items)
      // Configuration for the Timeline
      var options = {
        width: '100%',
        height: '150px',
        margin: {
          item: 20
        }
      }

      var timeline = new vis.Timeline(container, items, options)
      timeline.on('select', (props) => {
        const id = props.items[0]
        const item = items.get(id)
        console.log('select', item)
      })
      this.timeline = timeline
    }
  },
  computed: mapState('map', ['items'])
}
</script>

<style lang="less">
.timeline {
  .years {
    height: 5px;
    background-color: #390;
  }
  .items {
    width: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    .item {
      display: inline-block;
      white-space: nowrap;
      width: 180px;
      height: 80px;
      margin: 10px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
