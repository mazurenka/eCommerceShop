import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Items} from "./components/Items";
import {Categories} from "./components/Categories";
import {ShowFullItem} from "./components/ShowFullItem";

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
            orders: [],
            currentItems: [],
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
            }],
            showFullItem: false,
            fullItem: {}
        }
        // @ts-ignore
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    render() {
        return (
            <div className={'wrapper'}>
                {/*@ts-ignore*/}
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                {/*@ts-ignore*/}
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
                {/*@ts-ignore*/}
                {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        );
    }

    onShowItem(item: ItemType, showFullItem: boolean) {
        this.setState({fullItem: item})
        // @ts-ignore
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category: any) {
        if (category === 'all') {
            // @ts-ignore
            this.setState({currentItems: this.state.items})
            return
        }
        // @ts-ignore
        this.setState({
            // @ts-ignore
            currentItems: this.state.items.filter((el: any) => el.category === category)
        })
    }

    deleteOrder(id: any) {
        // @ts-ignore
        this.setState({orders: this.state.orders.filter((el: any) => el.id !== id)})
    }

    addToOrder(item: ItemType) {
        let isInArray = false
        // @ts-ignore
        this.state.orders.forEach((el: ItemType) => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray) { // @ts-ignore
            this.setState({orders: [...this.state.orders, item]})
        }
    }
}

export default App;

