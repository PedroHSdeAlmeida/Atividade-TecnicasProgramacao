/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props){
    
    return (
        <div>
            <div className="container-fluid">
                <div className="list-group">
                    <a onClick={(x) => props.seletorView('FormularioAlteraCliente', x)}
                        className="list-group-item list-group-item-action">Cliente 1</a>
                    <a onClick={(x) => props.seletorView('FormularioAlteraCliente', x)}
                        className="list-group-item list-group-item-action">Cliente 2</a>
                    <a onClick={(x) => props.seletorView('FormularioAlteraCliente', x)}
                        className="list-group-item list-group-item-action">Cliente 3</a>
                    <a onClick={(x) => props.seletorView('FormularioAlteraCliente', x)}
                        className="list-group-item list-group-item-action">Cliente 4</a>
                    <a onClick={(x) => props.seletorView('FormularioAlteraCliente', x)}
                        className="list-group-item list-group-item-action">Cliente 5</a>
                    <a onClick={(x) => props.seletorView('FormularioAlteraCliente', x)}
                        className="list-group-item list-group-item-action">Cliente 6</a>
                </div>
            </div> <br />
            <div className="text-center">
                <button type="button" className="btn btn-info" onClick={(x) => props.seletorView('FormularioCadastroCliente', x)}>
                    Cadastrar cliente</button>
            </div>
        </div>
    )
    
}