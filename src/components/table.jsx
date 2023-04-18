import TableRow from "./tableRow"

const TableList = ({contactos, deleteContact, setContacto}) => {
    return (
        <div className="card">
            <div className="card-header">Lista de resultados</div>
            <div className="card-body">
                <h5 className="card-title">Resultados</h5>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th className="text-end">Editar</th>
                            <th className="text-end">Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contactos.map(info => (
                                <TableRow deleteContact={deleteContact} setContacto={setContacto} contacto={info} key={info.nombre} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableList