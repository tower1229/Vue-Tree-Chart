English | [中文](README_CN.md)

# vue-tree-chart

[![npm](https://img.shields.io/npm/v/vue-tree-chart.svg)](https://www.npmjs.com/package/vue-tree-chart/)  [![license](https://img.shields.io/github/license/tower1229/Vue-Tree-Chart.svg)]()

> :deciduous_tree: A vue2 component to display tree chart

![logo](https://refined-x.com/asset/vtc-logo.png)

## Install

```
npm i vue-tree-chart --save
```

## Usage

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

## Prop

### json

Component data to support those field：

```
- name[String] to display a node name
- image_url[String] to display a node image
- children[Array] node`s children
- mate[Array] node`s mate
- class[Array] node`s class
- extend[Boolean] show/hide node`s children, default True
```

Example：

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

## Event

### click-node(node)

Click on the node triggered, receive the current node data as a parameter

## Run a demo

```
npm run serve
```

## Build

``` bash
npm run build-bundle
```

Copyright (c) 2017-present, [前端路上](http://refined-x.com)
