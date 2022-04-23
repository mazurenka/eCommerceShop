import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Chair grey',
                    img: 'chair-grey.jpeg',
                    desc: 'abcdefg',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Table',
                    img: 'table.jpeg',
                    desc: 'abcdefg',
                    category: 'tables',
                    price: '149.99'
                },
                {
                    id: 3,
                    title: 'Sofa',
                    img: 'sofa.jpeg',
                    desc: 'abcdefg',
                    category: 'sofas',
                    price: '349.99'
                },
                {
                    id: 4,
                    title: 'Lamp',
                    img: 'lamp.jpeg',
                    desc: 'abcdefg',
                    category: 'lamps',
                    price: '59.99'
                },
                {
                    id: 5,
                    title: 'TV',
                    img: 'TV.jpeg',
                    desc: 'abcdefg',
                    category: 'TVs',
                    price: '1149.99'
                },
            ]
        }
    }
    render() {
        return (
            <div className={'wrapper'}>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default App;
