English | [中文](README_CN.md)

# vue-tree-chart

[![npm](https://img.shields.io/npm/v/vue-tree-chart.svg)](https://www.npmjs.com/package/vue-tree-chart/) [![license](https://img.shields.io/github/license/tower1229/Vue-Tree-Chart.svg)]()

> :deciduous_tree: A Vue component to display tree chart

![logo](https://refined-x.com/asset/vtc-logo.png)

Vue3.x version [is here](https://github.com/tower1229/Vue-Tree-Chart/tree/vue3)

## Install

```bash
npm i vue-tree-chart --save
```

## Usage

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

## Prop

### json

Component data to support those field：

```text
- name[String] to display a node name
- image_url[String] to display a node image
- children[Array] node`s children
- mate[Array] node`s mate
- class[Array] node`s class
- extend[Boolean] show/hide node`s children, default True
```

## Examples

### Example 1

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

### Example 2

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

## Event

### click-node(node)

Click on the node triggered, receive the current node data as a parameter

## Run a demo

```bash
npm run serve
```

## Build

```bash
npm run build-bundle
```

Copyright (c) 2017-present, [前端路上](http://refined-x.com)
