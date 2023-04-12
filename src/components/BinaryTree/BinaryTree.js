import { VTooltip, Tooltip } from 'floating-vue';

import Vue from 'vue';

import 'floating-vue/dist/style.css';

Vue.directive('tooltip', VTooltip);
Vue.component('VTooltip', Tooltip);

export default {
  name: "BinaryTree",
  props: ["json"],
  data() {
    return {
      treeData: {},
    };
  },
  watch: {
    json: {
      handler: function (Props) {
        let extendKey = function (jsonData) {
          jsonData.extend =
            jsonData.extend === void 0 ? true : !!jsonData.extend;
          if (Array.isArray(jsonData.children)) {
            jsonData.children.forEach((c) => {
              extendKey(c);
            });
          }
          return jsonData;
        };
        if (Props) {
          this.treeData = extendKey(Props);
        }
      },
      immediate: true,
    },
  },
  methods: {
    _getTooltipOptions(node) {
      let result = {};

      if (node.tooltip) {
        result = node.tooltip;
      }

      return result;
    },
    _toggleExtend: function (treeData) {
      treeData.extend = !treeData.extend;
      this.$forceUpdate();
    },
  },
};
