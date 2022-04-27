import React, {useState} from "react";
import {FaShoppingCart} from 'react-icons/fa';

export default function Header() {
debugger
    let [cartOpen, setCartOpen] = useState<boolean>(false)
debugger
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
                    <div className='shop-cart'></div>
                )}

            </div>
            <div className={'presentation'}></div>
        </header>
    )
}