中文 | [English](README.md)

# vue-tree-chart

[![npm](https://img.shields.io/npm/v/vue-tree-chart.svg)](https://www.npmjs.com/package/vue-tree-chart/) [![license](https://img.shields.io/github/license/tower1229/Vue-Tree-Chart.svg)]()

> :deciduous_tree: Vue 树形图组件

![logo](https://refined-x.com/asset/vtc-logo.png)

Vue3.x 版本[在这](https://github.com/tower1229/Vue-Tree-Chart/tree/vue3)

## 安装

```bash
npm i vue-tree-chart --save
```

## 使用

in template:

```html
<TreeChart :json="treeData" />
```

in script:

```js
import TreeChart from "vue-tree-chart";

export default {
	components: {
    	TreeChart
	},
	data() {
		return {
			treeData: {
				...
			}
		}
	}
	...
```

## 属性

### json

组件数据，支持字段：

```text
- name[String] 节点名称
- image_url[String] 节点图片
- children[Array] 节点后代
- mate[Array] 节点配偶
- class[Array] 节点自定义class，字符串数组
- extend[Boolean] 展开/收起节点后代，默认展开
```

## 示例

### 样例 1

![](C:\Users\Spring-_-Bear\Desktop\样例1.png)

```js
  {
    name: 'root',
    image_url: "https://static.refined-x.com/avat.jpg",
    class: ["rootNode"],
    children: [
      {
        name: 'children1',
        image_url: "https://static.refined-x.com/avat1.jpg"
      },
      {
        name: 'children2',
        image_url: "https://static.refined-x.com/avat2.jpg",
        mate: [{
          name: 'mate',
          image_url: "https://static.refined-x.com/avat3.jpg"
        }],
        children: [
          {
            name: 'grandchild',
            image_url: "https://static.refined-x.com/avat.jpg"
          },
          {
            name: 'grandchild2',
            image_url: "https://static.refined-x.com/avat1.jpg"
          },
          {
            name: 'grandchild3',
            image_url: "https://static.refined-x.com/avat2.jpg"
          }
        ]
      },
      {
        name: 'children3',
        image_url: "https://static.refined-x.com/avat.jpg"
      }
    ]
  }
```

### 样例 2

![](C:\Users\Spring-_-Bear\Desktop\红楼梦.png)

```json
{
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
}
```

## 事件

### click-node(node)

点击节点触发，接收当前节点数据为参数

## 演示

```bash
npm run serve
```

## 构建

```bash
npm run build-bundle
```

Copyright (c) 2017-present, [前端路上](http://refined-x.com)
