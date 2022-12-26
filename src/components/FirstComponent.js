import MyComponent from "./MyComponent";

const FirstComponent = () => {
// exemplo de comentário fora do return
/*
    exemplo de comentários 
    com múltiplas linhas
*/

    return (
        <div>
            {/* exemplo de comentário dentro do return */}
            <h2>Meu Primeiro Componente</h2>
            <MyComponent />
        </div>
    )
};

export default FirstComponent;