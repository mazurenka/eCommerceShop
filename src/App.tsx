import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Items} from "./components/Items";
import {v1} from 'uuid';


export type ItemType = {
    id: string,
    title: string,
    img: string,
    desc: string,
    category: string,
    price: string
}

export const App = () => {
    let itemId = v1()

    let [items, setItems] = useState<Array<ItemType>>([
        {
            id: itemId,
            title: 'Chair grey',
            img: 'chair_grey.jpeg',
            desc: 'abcdefg',
            category: 'chairs',
            price: '49.99'
        }, {
            id: itemId,
            title: 'Table',
            img: 'table.jpeg',
            desc: 'abcdefg',
            category: 'tables',
            price: '149.99'
        }, {
            id: itemId,
            title: 'Sofa',
            img: 'sofa.jpeg',
            desc: 'abcdefg',
            category: 'sofas',
            price: '349.99'
        }, {
            id: itemId,
            title: 'Lamp',
            img: 'lamp.jpeg',
            desc: 'abcdefg',
            category: 'lamps',
            price: '59.99'
        }, {
            id: itemId,
            title: 'TV',
            img: 'tv.jpeg',
            desc: 'abcdefg',
            category: 'TVs',
            price: '1149.99'
        }
    ])

    let [odrer, setOrder] = useState<Array<ItemType> | null>([])

    function addToOrder(id: string, title: string, img: string, desc: string, category: string, price: string) {
        let newItemId = v1()
        let newItem: ItemType = {id: newItemId, title, img, desc, category, price}
        debugger
        setOrder({
            ...items,
            [newItemId]: [newItem]
        })
        debugger
    }

    return (
        <div className={'wrapper'}>
            <Header/>

            <Items items={items} addToOrder={addToOrder}/>

            <Footer/>
        </div>
    );
}

export default App;

