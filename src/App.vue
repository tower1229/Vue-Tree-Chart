<template>
  <div id="app">
    <label>
      切换为横向
      <input type="checkbox" v-model="landscape" value="1">
    </label>
    <TreeChart :json="data" :class="{landscape: landscape.length}" @click-node="clickNode" />
    <footer class="foot">
        <p>© 2018 - 3018 Author
            <a href="https://refined-x.com/" target="_blank">雅X共赏</a> 
            Github 
            <a href="https://github.com/tower1229/Vue-Tree-Chart" target="_blank">Vue-Tree-Chart</a>
        </p>
    </footer>
  </div>
</template>

<script>
import TreeChart from "@/components/TreeChart";

export default {
  name: 'app',
  components: {
    TreeChart
  },
  data() {
    return {
      landscape: [],
      data: {
        name: 'root',
        image_url: "https://static.refined-x.com/static/avatar.jpg",
        class: ["rootNode"],
        children: [
          {
            name: 'children1',
            image_url: "https://static.refined-x.com/static/avatar.jpg"
          },
          {
            name: 'children2',
            image_url: "https://static.refined-x.com/static/avatar.jpg",
            mate: [
              {
                name: 'mate',
                image_url: "https://static.refined-x.com/static/avatar.jpg"
              }
            ],
            children: [
              {
                name: 'grandchild',
                image_url: "https://static.refined-x.com/static/avatar.jpg"
              },
              {
                name: 'grandchild2',
                image_url: "https://static.refined-x.com/static/avatar.jpg"
              },
              {
                name: 'grandchild3',
                image_url: "https://static.refined-x.com/static/avatar.jpg"
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    clickNode: function(node){
      // eslint-disable-next-line
      console.log(node)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .avat{border-radius: 2em;border-width:2px;}
#app .name{font-weight:700;}
#app .rootNode .name{
  color: red;
}

.foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #333;
    padding: 24px;
    overflow: hidden;
    color: #999;
    font-size: 14px;
    text-align: center;
}
.foot a{color:#fff;margin:0 .5em}
</style>
