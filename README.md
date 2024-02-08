English | [中文](README_CN.md)

# vue-tree-chart-3

[![npm](https://img.shields.io/npm/v/vue-tree-chart.svg)](https://www.npmjs.com/package/vue-tree-chart/) [![license](https://img.shields.io/github/license/tower1229/Vue-Tree-Chart.svg)]()

> :deciduous_tree: A Vue component to display tree chart

![logo](https://refined-x.com/asset/vtc-logo.png)

Vue2.x version [is here](https://github.com/tower1229/Vue-Tree-Chart)

## Install

```bash
npm i vue-tree-chart-3 --save
```

## Usage

in template:

```html
<TreeChart :json="treeData" />
```

in script:

```js
import TreeChart from "vue-tree-chart-3";

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
- link_url[String] to attach a node link
- image_url[String] to display a node image
- children[Array] node`s children
- mate[Array] node`s mate
- class[Array] node`s class
- extend[Boolean] show/hide node`s children, default True
```

Example：

```js
  {
    name: 'root',
    link_url: "#root",
    image_url: null,
    class: ["rootNode"],
    children: [
      {
        name: 'children1',
        link_url: "#children1",
        image_url: "https://static.refined-x.com/static/avatar.jpg"
      },
      {
        name: 'children2',
        link_url: "#children2",
        image_url: "https://static.refined-x.com/static/avatar.jpg",
        mate: [
          {
            name: 'mate',
          }
        ],
        children: [
          {
            name: 'grandchild',
            link_url: "#grandchild",
            image_url: "https://static.refined-x.com/static/avatar.jpg"
          },
          {
            name: 'grandchild2',
            link_url: "#grandchild2",
            image_url: "https://static.refined-x.com/static/avatar.jpg"
          },
          {
            name: 'grandchild3',
            link_url: "#grandchild3",
            image_url: "https://static.refined-x.com/static/avatar.jpg"
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
