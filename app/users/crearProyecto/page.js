export default function crearProyecto(){
    return(
        <main>
            <div className="container mt-5 p-5 bg-light">
                <form className="">
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Titulo del proyecto</h3>
                            <p>Este título debe ser llamativo para que logres atraer donadores.</p>
                        </div>
                        <input className="col form-control" type="text" placeholder="Título"></input>
                    </div>
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Descripción general</h3>
                            <p>Describe de manera clara de qué se trata tu proyecto.</p>
                        </div>
                        <textarea className="col form-control" type="text" placeholder="Descripción"></textarea>
                    </div>
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Ubicación del proyecto</h3>
                            <p>Indica de qué país o lugar viene tu proyecto.</p>
                        </div>
                        <input className="col form-control" type="text" placeholder="Ubicación"></input>
                    </div>
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Imágenes del proyecto</h3>
                            <p>Agrega imágenes correspondientes a tu proyecto.</p>
                        </div>
                        <input className="col form-control" type="file" multiple></input>
                    </div>
                    <div className="row m-5">
                        <div className="col-4">
                            <h3>Historia del proyecto</h3>
                            <p>
                                Escribe de manera clara cómo se van a emplear los fondos recaudados, 
                                la importancia del proyecto, etc. Todo aquello lo cuál tenga que ver con el proyecto.
                            </p>
                        </div>
                        <textarea className="col form-control" type="text" placeholder="Redacta todo acerca del proyecto"></textarea>
                    </div>
                    <button className="btn btn-dark m-3 mx-5">Guardar</button>
                </form>
            </div>
        </main>
    )
}