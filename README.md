English

# vue-binary-tree

> :deciduous_tree: A vue2 component to display tree chart

![logo](https://refined-x.com/asset/vtc-logo.png)

## Install

```
npm i vue-binary-tree --save
```

## Usage

in template: 

```
<TreeChart :json="treeData" />
```

in script:

```
import TreeChart from "vue-binary-tree";

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
- mate[Object] node`s mate
- extend[Boolean] show/hide node`s children, default True
```

Example：

```
  {
    name: 'root',
    image_url: "https://static.refined-x.com/avat.jpg",
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

