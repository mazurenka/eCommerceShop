import React, {Dispatch, SetStateAction, useState} from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {ItemType} from "../App";
import {Order} from "./Order";

type HeaderPropsType = {
    orders: ([]) => void
    //orders: Dispatch<SetStateAction<ItemType[] | null>>
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

                {cartOpen && (<div className='shop-cart'>{props.orders.map(el => (<Order key={el.id} item={el}/>)
                )}</div>)}

            </div>
            <div className={'presentation'}></div>
        </header>
    )
}