import VTooltip from "v-tooltip";
import Vue from "vue";

Vue.use(VTooltip);

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
      if (node.tooltip) {
        const result = (node.tooltip);
        return result;
      } else {
        return {};
      }
    },
    toggleExtend: function (treeData) {
      treeData.extend = !treeData.extend;
      this.$forceUpdate();
    },
  },
};
