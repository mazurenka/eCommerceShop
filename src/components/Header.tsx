import React from "react";

export default function Header() {
    return (
        <header>
            <div>
                <span className={'logo'}>House Staff</span>
                <ul className={'nav'} >
                    <li>about</li>
                    <li>contacts</li>
                    <li>home</li>
                </ul>
            </div>
            <div className={'presentation'}></div>
        </header>
    )
}