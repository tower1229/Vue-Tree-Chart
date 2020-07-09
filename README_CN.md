中文 | [English](README.md)

# vue-tree-chart

[![npm](https://img.shields.io/npm/v/vue-tree-chart.svg)](https://www.npmjs.com/package/vue-tree-chart/)  [![license](https://img.shields.io/github/license/tower1229/Vue-Tree-Chart.svg)]()

> :deciduous_tree: Vue2树形图组件

![logo](https://refined-x.com/asset/vtc-logo.png)

## 安装

```
npm i vue-tree-chart --save
```

## 使用

in template: 

```
<TreeChart :json="treeData" />
```

in script:

```
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

```
- name[String] 节点名称
- image_url[String] 节点图片
- children[Array] 节点后代
- mate[Array] 节点配偶
- class[Array] 节点自定义class，字符串数组
- extend[Boolean] 展开/收起节点后代，默认展开
```

示例：

```
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
        mate: {
          name: 'mate',
          image_url: "https://static.refined-x.com/avat3.jpg"
        },
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

## 事件

### click-node(node)

点击节点触发，接收当前节点数据为参数

## 演示

```
npm run serve
```

## 构建

``` bash
npm run build-bundle
```

Copyright (c) 2017-present, [前端路上](http://refined-x.com)
