import { Component, ReactNode } from "react";
import { ClassComponent2 } from "./ClassComponent2";

export class ClassComponent1 extends Component {
    render(): ReactNode {
        return (
            <div>
                <ClassComponent2 message="Heloo world"/>
            </div>
        )
    }
}