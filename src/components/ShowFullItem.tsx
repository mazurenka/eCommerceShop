import React, {Component} from "react";
import {ItemType} from "../App";

export type ShoeFullItemPropsType = {
    item: ItemType
}

export class ShowFullItem extends Component<ShoeFullItemPropsType> {
    render() {
        return (
            <div className='full-item'>
                <div>
                    {/*@ts-ignore*/}
                    <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price}$</b>
                    {/*@ts-ignore*/}
                    <div className={'add-to-cart'} onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        );
    }
}
