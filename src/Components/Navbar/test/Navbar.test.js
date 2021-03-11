import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Component Navbar debe funcionar correctamente', () => {
    const wrapper = shallow(<Navbar />);

    test('snapshot ', () => {

        expect(wrapper).toMatchSnapshot();
    });
    test('Onclick debe mostrar true a hacer click', () => {
        const input = wrapper.find('i');
        input.simulate('click');

        
    })
    
    
    
})
