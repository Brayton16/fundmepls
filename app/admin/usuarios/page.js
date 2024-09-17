"use client";  // Esto indica que es un Client Component
import { useEffect, useState } from 'react';


export default function Login(){
    
    const [users, setUsers] = useState([]);

    const listarUsuarios = () => {
        fetch(`http://localhost:3001/users`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifica los datos recibidos
                setUsers(data);  // Actualiza el estado con los proyectos recibidos
            })
            .catch(error => console.error('Error fetching proyectos:', error));
    };

    const cambiarEstadoUsuario = (userID, isActive) => {
        try {

            if(isActive == 1){
                isActive = 0
            }else {
                isActive = 1
            }

            const response =  fetch('http://localhost:3001/users/activate', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    isActive: isActive,
                    userID: userID
                })
            });

           
            alert('Estado de usuario cambiado con exitosamente, recarge la pagina para ver los cambios')
            
        } catch (error) {
            console.error('Error:', error);
            alert('Error');
        }

    };

    useEffect(() => {
        listarUsuarios('');
    }, []);

    return(
        <main className="m-3">
            <div className="container">
                <div className="row">
                    <h3 className="col-2 mx'">Ordenar por: </h3>
                    <select className="col-2">
                        <option>
                            Más recientes
                        </option>
                        <option>
                            Más antiguos
                        </option>
                        <option>
                            Alfabéticamente A-Z
                        </option>
                        <option>
                            Alfabéticamente Z-A
                        </option>
                    </select>
                </div>
                <div className="container mt-3">
                    {/*
                    Esta tabla se debe renderizar con todos los usuarios

                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <td colspan="3">BogosBinted</td>
                                <td className=" text-end" colspan="1"><button>Activar cuenta</button></td>
                            </tr>
                        </tbody>
                    </table>
                    */}

                    {/* Tabla que muestra los usuarios */}
                    <table className="table table-striped">
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.UserID}>
                                    <td colSpan="3">{`${user.FirstName} ${user.LastName}`}</td>
                                    <td className="text-end" colSpan="1">
                                        <button
                                            onClick={() => cambiarEstadoUsuario(user.UserID, user.IsActive)}
                                        >
                                            {user.IsActive ? 'Desactivar cuenta' : 'Activar cuenta'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );

}