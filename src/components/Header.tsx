import React, {useState} from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {Order} from "./Order";
import {ItemType} from "../App";

type HeaderPropsType = {
    orders: Array<ItemType>
    onDelete: (id: number) => void
}

const showOrders = (props: any) => {
    return (<div>
        {props.orders.map((el: any) => (
            <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
    </div>)
}

const showNothing = () => {
    return (<div className={'empty'}>
        <h2>No items</h2>
    </div>)
}

export default function Header(props: HeaderPropsType) {

    let [cartOpen, setCartOpen] = useState<boolean>(false)

    return (
        <header>
            <div>
                <span className={'logo'}>House Staff</span>
                <ul className={'nav'}>
                    <li>about</li>
                    <li>contacts</li>
                    <li>home</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                className={`shop-cart-button ${cartOpen && 'active'}`}
                />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>)}

            </div>
            <div className={'presentation'}></div>
        </header>
    )
}