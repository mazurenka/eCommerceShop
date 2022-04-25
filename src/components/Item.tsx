import React from "react";
import {ItemType} from "../App";

type ItemsPropsType = {
    items: ItemType
}

export const Item = (props: ItemsPropsType) => {
    return (

        <div className={'item'}>
            <img src={'./img/' + props.items.img}/>
            <h2>{props.items.title}</h2>
            <p>{props.items.desc}</p>
            <b>{props.items.price}$</b>
            <div className={'add-to-cart'}>+</div>
        </div>
    )
}