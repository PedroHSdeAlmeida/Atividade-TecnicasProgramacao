export default function FormularioCadastroServico(props) {

    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do serviço" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Preço do serviço" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Tipo do serviço" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={(x) => props.seletorView('Serviços', x)}
                    >Cadastrar serviço</button>
                </div>
            </form>
        </div>
    )
    
}