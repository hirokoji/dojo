import React from "react";
import styles from './index.module.css';

type Props = {
    plusNum: 1 | 2 | 3| 4 | 5
}

type State = {
    value: number,
}

export class ClassStyleSample extends React.Component<Props, State> {

    state = {value: 0};
    static defaultProps = {
        plusNum: 1
    }

    countUP() {
        this.setState({value: this.state.value + this.props.plusNum})
    }

    render() {
        return <div className={styles.div}>
            <h2 className={styles.h2}> Class Style: value is {this.state.value} </h2>
            <button className={styles.button} onClick={() => this.countUP()}> +</button>
        </div>
    }

};


