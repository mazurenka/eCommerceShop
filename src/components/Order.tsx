import React from "react";
import {ItemType} from "../App";

type OrderPropsType = {
    item: ItemType
}

export const Order = (props: OrderPropsType) => {
    return (
        <div className={'item'}>
            <img src={'./img/' + props.item.img}/>
            <h2>{props.item.title}</h2>
            <b>{props.item.price}$</b>
        </div>
    )
}