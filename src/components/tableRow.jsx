const TableRow = ({contacto, deleteContact, setContacto}) => {
    const {id, nombre, apellido, telefono} = contacto;

    return (
        <tr>
            <th>{nombre}</th>
            <th>{apellido}</th>
            <th>{telefono}</th>
            <th className="text-end">
                <button className="btn btn-warning" onClick={() => setContacto(contacto)} >Editar</button>
            </th>
            <th className="text-end">
                <button className="btn btn-danger" onClick={() => deleteContact(nombre)} >Borrar</button>
            </th>
        </tr>
    )
}

export default TableRow