const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento!");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Rendereizando isso</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                {/* Não se coloca o parenteses aqui porque só queremos que a função seja executada no click */}
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou também!")}>Clique aqui também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};

export default Events;