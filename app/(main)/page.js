import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main>
        <div className="container">
            <div className="row justify-content-center mt-5">             
                <h1 className="col-2 text-center">FundMePls</h1>
                <img
                href="/"
                className="col-1"
                src="/logo.png"
                />
            </div>
            <div className="row m-4">
                <h1 className="col text-center">Donde tus ideas se hacen realidad</h1>
            </div>
            <div className="row">
                <div className="col text-center ">
                    <img
                        src="/home-feature-two_mobile 1.png"
                    />
                    <div className="m-4">
                        Describe tu proyecto
                    </div>
                </div>
                <div className="col text-center">
                    <img    
                        src="/idea.png"
                    />
                    <div className="m-4">
                        Descubre proyectos innovadores
                    </div>
                </div>
                <div className="col text-center">
                    <img
                        src="/cambiar-el-mundo 1.png"
                    />
                    <div className="m-4">
                        Comienza a cambiar el mundo
                    </div>
                </div>
            </div>
            <div className="row m-5">
                <Link href="/register" className="col btn btn-outline-light m-2 px-5">
                    Registrate ahora
                </Link>
                <Link href="/login" className="col btn btn-outline-light m-2 px-5">
                    Inicia sesión
                </Link>
            </div>
        </div>
    </main>
  );
}
