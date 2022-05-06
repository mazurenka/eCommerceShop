import React from "react";
import {ItemType} from "../App";
import {Item} from "./Item";

type ItemsPropsType = {
    items: Array<ItemType>
    addToOrder: (id: string,
                 title: string,
                 img: string,
                 desc: string,
                 category: string,
                 price: string) => void
}

export class Items extends React.Component<ItemsPropsType> {
    render() {
        return <main>

            { this.props.items.map(el => (
                <h1>{el.title}</h1>
            )) }
        </main>
    }
}