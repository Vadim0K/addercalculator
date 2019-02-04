import React from 'react';

const Calc = () => {
    let inputRefOfFirstNum, inputRefOfSecondNum, resultRef;
    const onClick = () => {
        resultRef.innerText= parseFloat(inputRefOfFirstNum.value)+ parseFloat(inputRefOfSecondNum.value);
    };
    return (
        <div>
            <div>
                <label>
                    Перше число: <input ref={node=> inputRefOfFirstNum = node} type="number" />
                </label>
            </div>
            <div>
                <label>
                    Друге число: <input ref={node=> inputRefOfSecondNum = node} type="number" required/>
                </label>
            </div>
            <button onClick={onClick}>Додати</button>
            <div>
                <span ref={node=>resultRef=node}></span>
            </div>
        </div>
    );
};

export default Calc;