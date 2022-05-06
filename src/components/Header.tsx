import React, {useState} from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {Order} from "./Order";

export default function Header(props: any) {

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
                        {props.orders.map((el: any) => (
                            <Order key={el.id} item={el}/>
                        ))}
                    </div>)}

            </div>
            <div className={'presentation'}></div>
        </header>
    )
}