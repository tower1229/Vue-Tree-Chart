<template>
    <table v-if="treeData && treeData.name">
      <template v-if="treeData.children">
        <tr>
          <td :colspan="treeData.children.length * 2">
            <div class="node" :class="{hasMate: treeData.mate}">
              <div class="person" @click="$emit('click-node', treeData)">
                <div class="avat">
                  <img :src="treeData.image_url" />
                </div>
                <div class="name">{{treeData.name}}</div>
              </div>
              <div class="person" v-if="treeData.mate" @click="$emit('click-node', treeData.mate)">
                <div class="avat">
                  <img :src="treeData.mate.image_url" />
                </div>
                <div class="name">{{treeData.mate.name}}</div>
              </div>
            </div>
          </td>
        </tr>
        <tr class="lines">
          <td :colspan="treeData.children.length * 2">
            <div class="lineDown"></div>
          </td>
        </tr>
        <tr class="lines">
          <template v-for="(td, index) in treeData.children.length * 2">
            <td :key="td" :class="classObject(index, treeData.children.length * 2)">&emsp;</td>
          </template>
        </tr>
        <tr>
          <td v-for="(children, index) in treeData.children" :key="index" colspan="2">
            <TreeChart :json="children" @click-node="$emit('click-node', $event)"/>
          </td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td>
            <div class="node" :class="{hasMate: treeData.mate}">
              <div class="person" @click="$emit('click-node', treeData)">
                <div class="avat">
                  <img :src="treeData.image_url" />
                </div>
                <div class="name">{{treeData.name}}</div>
              </div>
              <div class="person" v-if="treeData.mate" @click="$emit('click-node', treeData.mate)">
                <div class="avat">
                  <img :src="treeData.mate.image_url" />
                </div>
                <div class="name">{{treeData.mate.name}}</div>
              </div>
            </div>
          </td>
        </tr>
      </template>
      
    </table>
</template>

<script>

export default {
  name: "TreeChart",
  props: ["json"],
  data () {
    return {
      
    }
  },
  computed: {
    treeData: function(){
      return this.json || {}
    }
  },
  methods: {
    classObject: function(index, length){
      return {
        leftLine: !!(index%2),
        rightLine: index==0 || !(index%2),
        topLine: index!=0 && index!=length-1
      }
    }
  }
}
</script>

<style scoped>
table{border-collapse: separate!important;border-spacing: 0!important;}
.node{position: relative; display: inline-block;width: 10em;box-sizing: border-box; text-align: center;}
.lines{height: 1em;}
td{vertical-align: top;padding:0;text-align: center;}
.lineDown{margin: 0px auto;   height: 20px;   width: 2px;   float: none;background: #ccc;}
.rightLine{border-right:1px solid #ccc;}
.leftLine{border-left: 1px solid #ccc;}
.topLine{border-top:2px solid #ccc;}

.node .person{position: relative; display: inline-block;z-index: 2;}
.node .person .avat{display: block;width:4em;height: 4em;margin:auto;overflow:hidden; background:#fff;border:1px solid #ccc;}
.node .person .avat img{width:100%;height: 100%;}
.node .person .name{height:2em;line-height: 2em;overflow: hidden;}
.node.hasMate::after{content: "";position: absolute;left:2em;right:2em;top:2em;border-top:2px solid #ccc;z-index: 1;}
.node.hasMate .person:last-child{margin-left:1em;}

</style>
