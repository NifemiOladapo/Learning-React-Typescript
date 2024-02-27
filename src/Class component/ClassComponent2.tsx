import { Component, ReactNode } from "react";

type ClassComponent2Props = {
    message : string
}

type ClassComponent2State = {
    count : number
}

export class ClassComponent2 extends Component<ClassComponent2Props, ClassComponent2State> {
    state = {
        count: 0
    }

    render(): ReactNode {
        return (
            <div>
                <h1>Learning typescript in the case of class components</h1>
                <h2>{this.state.count}{this.props.message}</h2>
            </div>
        )
    }
}