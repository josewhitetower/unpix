import {shallowMount} from '@vue/test-utils';
import PhotoCard from '@/components/PhotoCard.vue';

describe('PhotoCard.vue', () => {
  const createWrapper = () => {
    const wrapper = shallowMount(PhotoCard, {
      propsData: {
        photo: {},
      },
    });
    return wrapper
  }
  let wp;
  beforeEach(() => {
    wp = createWrapper();
  });

  afterEach(() => {
    wp.destroy()
  })

  it('initial status is loading', () => {
    expect(wp.vm.isLoading).toBe(true);
  });

  it('has a picture element', () => {
    const picture = wp.find('picture');
    expect(picture.exists()).toBe(true);
  });

  it('emits custom event on click', () => {
    wp.trigger('click')
    expect(wp.emitted('select')).toBeTruthy();
  });

});
