import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Items} from "./components/Items";

export type ItemType = {
    id: number,
    title: string,
    img: string,
    desc: string,
    category: string,
    price: string
}

export const App = () => {

    let items: Array<ItemType> = [{
        id: 1,
        title: 'Chair grey',
        img: 'chair_grey.jpeg',
        desc: 'abcdefg',
        category: 'chairs',
        price: '49.99'
    }, {
        id: 2,
        title: 'Table',
        img: 'table.jpeg',
        desc: 'abcdefg',
        category: 'tables',
        price: '149.99'
    }, {
        id: 3,
        title: 'Sofa',
        img: 'sofa.jpeg',
        desc: 'abcdefg',
        category: 'sofas',
        price: '349.99'
    }, {
        id: 4,
        title: 'Lamp',
        img: 'lamp.jpeg',
        desc: 'abcdefg',
        category: 'lamps',
        price: '59.99'
    }, {
        id: 5,
        title: 'TV',
        img: 'tv.jpeg',
        desc: 'abcdefg',
        category: 'TVs',
        price: '1149.99'
    }]

    return (
        <div className={'wrapper'}>
            <Header/>

            <Items items={items}/>

            <Footer/>
        </div>
    );
}

export default App;

