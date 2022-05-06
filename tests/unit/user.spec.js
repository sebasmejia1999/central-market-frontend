import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import User from '@/components/User.vue';

describe('User Component', () => {
  it('renders components child user', () => {
    const wrapper = shallowMount(Home);

    const detaildCharacter = wrapper.findComponent(User);

    expect(detaildCharacter.exists()).toBe(true);
  });
});
