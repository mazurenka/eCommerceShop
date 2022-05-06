import React from "react";
import {ItemType} from "../App";

type ItemsPropsType = {
    item: ItemType
    onAdd: (item: ItemType) => void
}

export class Item extends React.Component<ItemsPropsType> {
    render() {
        return (
            <div className={'item'}>
                <img src={'./img/' + this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}$</b>
                <div className={'add-to-cart'} onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}