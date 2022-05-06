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

export class App extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            orders:[],
            items: [{
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
                }]}
        this.addToOrder = this.addToOrder.bind(this)
    }

    render() {
        /* let itemId = v1()

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

         let [odrer, setOrder] = useState<Array<ItemType>>([])

         function addToOrder(id: string, title: string, img: string, desc: string, category: string, price: string) {
             let newItemId = v1()
             let newItem: ItemType = {id: newItemId, title, img, desc, category, price}
             debugger
             setOrder({
                 ...items,
                 [newItemId]: [newItem]
             })
             debugger
         }*/

        return (
            <div className={'wrapper'}>
                <Header orders={this.state.orders}/>

                <Items items={this.state.items} anAdd={this.addToOrder} />

                <Footer/>
            </div>
        );
    }
    addToOrder(item: ItemType) {
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;

