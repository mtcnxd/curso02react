import { useEffect } from "react";
import { useState } from "react";
import Formulario from "./components/form"
import TableList from "./components/table"

const App = () => {
  const[contacto, setContacto]   = useState({});
  const[contactos, setContactos] = useState(JSON.parse(localStorage.getItem('contactos') ?? []));

  useEffect( () => {
    localStorage.setItem('contactos', JSON.stringify(contactos)) 
  }, [contactos]);

  const deleteContact = (nombre) => {
    if (confirm('Desea eliminar el contacto: ' + nombre)){
      const nuevos = contactos.filter( res => res.nombre !== nombre )
      setContactos(nuevos)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Formulario contacto={contacto} contactos={contactos} setContactos={setContactos} />
        </div>

        <div className="col-md-6">
          <TableList deleteContact={deleteContact} setContacto={setContacto} contactos={contactos} contacto={contacto} />
        </div>
      </div>
    </div>
  )
}

export default App
