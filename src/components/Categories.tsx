import {Component} from "react";

export type CategoriesType = {
    key: string
    name: string
}

export class Categories extends Component<any, any> {
    constructor(props: CategoriesType) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'lights',
                    name: 'Lights'
                },
                {
                    key: 'TVs',
                    name: 'TVs'
                }
            ]
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map((el: CategoriesType) => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}