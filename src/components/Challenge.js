const Challenge = () => {

    const x = 10;
    const y = 20;

    const somaValores = () => {
        return console.log("A soma dos valores é: ", x + y);
    };

    return (
        <div>
            <p>O primeiro valor informado é: {x}</p>
            <p>O segundo valor informado é: {y}</p>
            <button onClick={somaValores}>Somar valores</button>
        </div>
    )
};

export default Challenge;