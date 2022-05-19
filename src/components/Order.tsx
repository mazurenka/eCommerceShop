import React from "react";
import {ItemType} from "../App";
import {FaTrash} from "react-icons/fa";

type OrderPropsType = {
    item: ItemType
    onDelete: (id: any) => void
}

export class Order extends React.Component<OrderPropsType> {
    render() {
        // @ts-ignore
        return (
            <div className='item'>
                 {/*@ts-ignore*/}
                <img src={'./img/' + this.props.item.img}/>
                {/*@ts-ignore*/}
                <h2>{this.props.item.title}</h2>
                {/*@ts-ignore*/}
                <b>{this.props.item.price}$</b>
                {/*@ts-ignore*/}
                <FaTrash className={'delete-icon'} onClick={() => this.props.onDelete(Number(this.props.item.id))}/>
            </div>
        )
    }
}