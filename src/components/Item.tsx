import React from "react";
import {ItemType} from "../App";

type ItemsPropsType = {
    item: ItemType
    addToOrder: (id: string,
                 title: string,
                 img: string,
                 desc: string,
                 category: string,
                 price: string) => void
}

export const Item = (props: ItemsPropsType) => {
    let order = () => {
        props.addToOrder(props.item.id,
            props.item.title, props.item.img, props.item.desc, props.item.price, props.item.category)
    }
    return (

        <div className={'item'}>
            <img src={'./img/' + props.item.img}/>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <div className={'add-to-cart'} onClick={order}>+</div>
        </div>
    )
}