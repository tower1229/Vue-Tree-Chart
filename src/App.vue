<template>
  <div id="app">
    <label>
      切换为横向
      <input type="checkbox" v-model="landscape" value="1">
    </label>
    <TreeChart :json="data" :class="{landscape: landscape.length}" @click-node="clickNode"/>
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
        name: '贾太公',
        children: [
          {
            name: '贾演',
            children: [
              {
                name: '贾代化',
                children: [
                  {name: '贾敷'},
                  {
                    name: '贾敬',
                    children: [
                      {
                        name: '贾珍',
                        image_url: "https://img01.yzcdn.cn/vant/cat.jpeg",
                        children: [
                          {
                            name: '贾蓉',
                            mate: [
                              {name: '秦可卿'}
                            ]
                          }
                        ],
                        mate: [
                          {name: '尤氏'},
                        ],
                      },
                      {name: '贾惜春'},
                    ]
                  },
                ]
              },
            ]
          },
          {
            name: '贾源',
            children: [
              {
                name: '贾代善',
                image_url: "https://img01.yzcdn.cn/vant/cat.jpeg",
                mate: [
                  {name: '史太君'}
                ],
                children: [
                  {
                    name: '贾赦',
                    children: [
                      {
                        name: '贾琏',
                        image_url: "https://img01.yzcdn.cn/vant/cat.jpeg",
                        mate: [
                          {name: '王熙凤'},
                          {name: '尤二姐'}
                        ],
                        children: [
                          {name: '巧姐'},
                        ]
                      },
                      {name: '贾迎春'},
                    ]
                  },
                  {
                    name: '贾政',
                    image_url: "https://img01.yzcdn.cn/vant/cat.jpeg",
                    children: [
                      {
                        name: '贾宝玉',
                        image_url: "https://img01.yzcdn.cn/vant/cat.jpeg",
                        mate: [
                          {name: '薛宝钗'}
                        ],
                      },
                      {name: '贾元春'},
                      {name: '贾珠'},
                      {name: '贾探春'},
                      {name: '贾环'},
                    ],
                    mate: [
                      {name: '王夫人',},
                      {name: '赵姨娘',},
                    ],
                  },
                  {
                    name: '贾敏',
                    image_url: "https://img01.yzcdn.cn/vant/cat.jpeg",
                    children: [
                      {name: '林黛玉'},
                    ],
                    mate: [{name: '林如海',}],
                  }
                ]
              }
            ]
          }
        ]
      },
      // data: {
      //   name: 'root',
      //   image_url: "https://static.refined-x.com/static/avatar.jpg",
      //   class: ["rootNode"],
      //   children: [
      //     {
      //       name: 'children1',
      //       image_url: "https://static.refined-x.com/static/avatar.jpg"
      //     },
      //     {
      //       name: 'children2',
      //       image_url: "https://static.refined-x.com/static/avatar.jpg",
      //       mate: [
      //         {
      //           name: 'mate',
      //           image_url: "https://static.refined-x.com/static/avatar.jpg"
      //         }
      //       ],
      //       children: [
      //         {
      //           name: 'grandchild',
      //           image_url: "https://static.refined-x.com/static/avatar.jpg"
      //         },
      //         {
      //           name: 'grandchild2',
      //           image_url: "https://static.refined-x.com/static/avatar.jpg"
      //         },
      //         {
      //           name: 'grandchild3',
      //           image_url: "https://static.refined-x.com/static/avatar.jpg"
      //         }
      //       ]
      //     }
      //   ]
      // }
    }
  },
  methods: {
    clickNode: function (node) {
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

#app .avat {
  border-radius: 2em;
  border-width: 2px;
}

#app .name {
  font-weight: 700;
}

#app .rootNode .name {
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

.foot a {
  color: #fff;
  margin: 0 .5em
}
</style>
