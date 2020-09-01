import {shallowMount} from '@vue/test-utils';
import SelectedPhoto from '@/components/SelectedPhoto.vue';
describe('SelectedPhoto.vue', () => {
  const createWrapper = () => {
    const photo = {
      id: 'g_gwdpsCVAY',
      alt:
        'white and pink petaled flowers on metal fence near concrete houses and tower at daytime',
      likes: 1159,
      url:
        'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1Mjk2MH0',
      ratio: 1.498371335504886,
      color: '#0D0B0A',
      download: 'https://unsplash.com/photos/g_gwdpsCVAY/download',
      user: {
        name: 'Roman Kraft',
        instagram: 'roman.kraft',
        twitter: 'bandandroll',
        portfolio: 'http://www.bandandroll.com',
      },
    };
    const wrapper = shallowMount(SelectedPhoto, {
      stubs: {
        'v-icon': true,
      },
      propsData: {
        photo,
      },
    });
    return wrapper;
  };
  let wp;
  beforeEach(() => {
    wp = createWrapper();
  });

  it('renders correctly', () => {
    expect(wp.exists()).toBe(true);
  });

  it('initial status is loading', () => {
    expect(wp.vm.isLoading).toBe(true);
  });
  it('has a picture element', () => {
    const picture = wp.find('picture');
    expect(picture.exists()).toBe(true);
  });
  it('emits close event on click', () => {
    wp.find('.fixed').trigger('click');
    expect(wp.emitted('close')).toBeTruthy();
  });
  it('emits close event on keydown ESC', () => {
    const keyEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
    });
    window.dispatchEvent(keyEvent);
    expect(wp.emitted('close')).toBeTruthy();
  });
  it('emits favorite event on click', () => {
    wp.find('button').trigger('click');
    expect(wp.emitted('favorite')).toBeTruthy();
  });
});
