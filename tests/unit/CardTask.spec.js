import { shallowMount } from '@vue/test-utils'
import CardTaskVue from '@/components/CardTask.vue'
// import { BIconTrash, BIconClock } from 'bootstrap-vue';

describe("CardTask.vue", () => {
  const wrapper = shallowMount(CardTaskVue, {
    stubs: ['b-card-text', 'b-card', 'BIconTrash', 'BIconClock'],
    propsData: {
      DueDate: "11/12/23"
    }
  });

  test('ensure it has child component', ()=>{
    expect(wrapper.find('.colTasks__taskCard').exists()).toBe(true);
  });
  
  test("ensure there's due date", ()=>{
    expect(wrapper.find('.colTasks__cardDate').text()).toBe("Due 11/12/23");
  })

  test("emit the btn-delete", ()=>{
    wrapper.find(".colTasks__iconDeleteCard").trigger('click')
    expect(wrapper.emitted()['btn-delete']).toBeTruthy();
  })

});

