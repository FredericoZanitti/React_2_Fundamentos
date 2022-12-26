const TemplateExpressions = () => {
    
    const name = "Frederico Zanitti"
    const data = {
        age: 45,
        job: "Analista de Sistemas"
    }
    
    return(
        <div>
            <h1>Template Expressions</h1>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Profissão: {data.job}; idade {data.age}</p>
            {/* Eu consigo executar javascript aqui  */}
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
};

export default TemplateExpressions;