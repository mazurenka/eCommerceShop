import React from "react";
import {ItemType} from "../App";

type OrderPropsType = {
    item: ItemType
}

export class Order extends React.Component<OrderPropsType> {
    render() {
        return (
            <div className={'item'}>
                <img src={'./img/' + this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
            </div>
        )
    }
}