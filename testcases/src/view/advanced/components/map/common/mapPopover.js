
import { defineComponent, h } from 'vue';

export default (data = {}) => {
  return defineComponent({
    setup() {
      return () => h('div', { class: 'map-popover-content' }, [
        h('div', { class: 'item' }, [
          h('span', { class: 'label' }, '代码:'),
          h('span', { class: 'value' }, data.code),
        ]),
        h('div', { class: 'item' }, [
          h('span', { class: 'label' }, '数据:'),
          h('span', { class: 'value' }, data.data),
        ]),
        data.code === 110000 && h('div', { class: 'item extra-container' }, [
          h('span', { class: 'label' }, '重点:'),
          h('i', { class: 'tui-icon tis-star' },),
          h('i', { class: 'tui-icon tis-star' },),
          h('i', { class: 'tui-icon tis-star' },),
        ]),
      ]);
    },
  });
};