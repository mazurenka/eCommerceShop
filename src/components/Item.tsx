import React from "react";
import {ItemType} from "../App";

type ItemsPropsType = {
    items: ItemType
}

export const Item = (props: ItemsPropsType) => {
    return (
        <div>{props.items.title}</div>
    )
}