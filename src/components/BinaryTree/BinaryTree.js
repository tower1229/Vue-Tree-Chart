import { VTooltip, Tooltip } from 'floating-vue';

import 'floating-vue/dist/style.css';

export default {
  name: "BinaryTree",
  props: ["json"],
  data() {
    return {
      treeData: {},
    };
  },
  directives: {
    'tooltip': VTooltip
  },
  components: {
    VTooltip: Tooltip
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

      if (node && Object.keys(node) && Object.keys(node).length > 0) {
        for (let index = 0; index < Object.keys(node).length; index++) {
          const element = Object.keys(node)[index];

          if (element && element.includes('tooltip')){
            const keyFormatted = element.replace(/^tooltip_/, "");
            result[keyFormatted] = node[element];
          }
        }
      }

      return result;
    },
    _toggleExtend: function (treeData) {
      treeData.extend = !treeData.extend;
      this.$forceUpdate();
    },
  },
};
