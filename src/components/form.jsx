import { useEffect } from "react";
import { useState } from "react"

const Formulario = ({setContactos, contactos, contacto}) => {
    const[nombre, setNombre]     = useState('');
    const[apellido, setApellido] = useState('');
    const[telefono, setTelefono] = useState('');

    const sendForm = (e) => {
        e.preventDefault();

        const getId = (() => {
            return Math.random(10).toString(10).substring(2)
        })

        const obj = {nombre, apellido, telefono};

        if (contacto.id){
            obj.id = contacto.id
            console.log('Se cargo el id: ' + id)

        } else {
            let id = getId()
            obj.id = id
            console.log('Se genero el siguiente id: ' + id)
        }

        setContactos([...contactos, obj]);
        clearForm();
    };

    const clearForm = () => {
        setNombre('')
        setApellido('')
        setTelefono('')
    }

    useEffect(() => {
        if (contacto.nombre && contacto.nombre !== ''){
            setNombre(contacto.nombre)
            setApellido(contacto.apellido)
            setTelefono(contacto.telefono)
        }
    }, [contacto]) 
    
    return (
        <form action="" onSubmit={sendForm}>
            <div className="card">
                <div className="card-header">Formulario nuevo</div>
                <div className="card-body">
                    <h5 className="card-title">Formulario pruebas</h5>
                    <div className="pt-3">
                        <label>Nombre</label>
                        <input type="input" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="pt-3">
                        <label>Apellido</label>
                        <input type="input" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="pt-3">
                        <label>Telefono</label>
                        <input type="input" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="pt-3">
                        <input type="submit" id="btnSave" className="btn btn-primary" value="Guardar"/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Formulario