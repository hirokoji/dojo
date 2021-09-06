import React, {useState}  from "react";
import styles from './index.module.css';

type Props = {
    plusNum: 1 | 2 | 3| 4 | 5
}


export function FunctionalStyleSample (props:Props){

    const [state, setState] = useState({value: 0});
    const countUP = () => {
        setState({value: state.value + props.plusNum})
    }

    return <div className={styles.div}>
        <h2 className={styles.h2}> Functional Style: value is {state.value} </h2>
        <button className={styles.button} onClick={() => countUP()}> +</button>
    </div>

};

FunctionalStyleSample.defaultProps = {
    plusNum: 1
}


