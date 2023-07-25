import { shallowMount } from '@vue/test-utils'
import CardTaskVue from '@/components/CardTask.vue'
import { BIconTrash, BIconClock } from 'bootstrap-vue';

test('ensure it has child component', () => {
  const wrapper = shallowMount(CardTaskVue, {
    stubs: ['b-card-text', 'b-card']
  });
  expect(wrapper.findComponent(BIconTrash).exists()).toBe(true);
  expect(wrapper.findComponent(BIconClock).exists()).toBe(true);
});
