

export default function Login(){


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
                    </table>*/}
                </div>
            </div>
        </main>
    );

}