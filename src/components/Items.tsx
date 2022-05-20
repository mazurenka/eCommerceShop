import React from "react";
import {ItemType} from "../App";
import {Item} from "./Item";

type ItemsPropsType = {
    items: Array<ItemType>
    onAdd: (item: ItemType) => void
    onShowItem: () => void
}

export class Items extends React.Component<ItemsPropsType> {
    render() {
        return <main>
            {this.props.items.map(el => (

                <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>
            ))}
        </main>
    }
}