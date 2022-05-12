import React from "react";
import {ItemType} from "../App";
import {FaTrash} from "react-icons/fa";

type OrderPropsType = {
    item: ItemType
    onDelete: (id: any) => void
}

export class Order extends React.Component<OrderPropsType> {
    render() {
        return (
            <div className={'item'}>
                <img src={'./img/' + this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <FaTrash className={'delete-icon'} onClick={() => this.props.onDelete(Number(this.props.item.id))}/>
            </div>
        )
    }
}