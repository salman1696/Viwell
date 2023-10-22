import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../store';
import RewardModal from './RewardModal';

test('render correctly', () => {
    const component = (
        <Provider store={store}>
            <RewardModal />
        </Provider>
    );

    render(component);

    const wrapper = screen.getByTestId('brand-img-wrapper');
    const img = screen.getByTestId('brand-img');

    expect(wrapper.props.style.height).toBe(200);
    expect(wrapper.props.style.width).toBe(200);
    expect(img.props.resizeMode).toBe('contain');
});