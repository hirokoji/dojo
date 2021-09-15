import React, {useState} from "react";

type Props = {
    title: string;
    value: number;
    increase: () => void;
    decrease: () => void;
}


export const CountButtons :React.FC<Props> = ({title, value, increase, decrease}) => {
    return (
        <>
            <div style={{ display: 'flex', }}>
                <button onClick={decrease}> - </button>
                <h2> {title} : {value} </h2>
                <button onClick={increase}> + </button>
            </div>
        </>
    )
}


export const useCountButtons= (title: string) => {
    const [value, setNum] = useState<number>(0);
    return { title, value, increase: () => setNum(value + 1), decrease: () => setNum(value - 1) }
}
