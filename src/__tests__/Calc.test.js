import {shallow} from 'enzyme';
import React from 'react';
import Calc from '../Calc';
import '../setupTests';

describe("Тест компонента",()=>{
    it("Тести випадку show=true",()=>{
        const wrapper = shallow( <Calc show/>);
        console.log(wrapper.debug());
    });

    it("Тест на вміст div",()=>{
        const wrapper = shallow(<Calc show/>);
        expect(wrapper.find("button").length).toBeGreaterThan(0);
    });

    it("Тест на кількість div",()=>{
        const wrapper = shallow(<Calc/>);
        expect(wrapper.find("div")).toHaveLength(4);
    });

    it("Тест на вміст button",()=>{
        const wrapper = shallow(<Calc/>);
        expect(wrapper.find("button").length).toBeGreaterThan(0);
    });

    it("Тест на вміст input",()=>{
        const wrapper = shallow(<Calc/>);
        expect(wrapper.find("input").length).toBeGreaterThan(0);
    });

    it("Тест на кількість input",()=>{
        const wrapper = shallow(<Calc/>);
        expect(wrapper.find("input")).toHaveLength(2);
    });

});

