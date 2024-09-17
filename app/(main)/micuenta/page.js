"use client"
import UserNavBar from "@/components/userNavbar";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function micuenta(){
    return(

        <main className="m-0">
            <header>
                <UserNavBar></UserNavBar>
            </header>
            <section className="vh-100">
                <div className="container py-0 h-100">
                    <div className="container-fluid p-0">
                        <div className="row bg-white m-0">
                            <div className="container container-fluid bg-dark text-white w-100% p-4">
                                <div className="row">
                                    <div className="col-6 ">
                                        <h2>Mi cuenta</h2>
                                    </div>

                                <div className=" col-6 ">
                                    <div className="row">
                                        <div className=" col-4 ">
                                            <h4>Saldo disponible</h4>
                                        </div>
                                        <div className=" col-4">
                                            <h2> 500 </h2>
                                        </div>
                                        <div className=" col-4">
                                            <Image
                                            scr = "/goofycoin.png"
                                            width={50} // Ancho de la imagen
                                            height={50} // Alto de la imagen
                                            />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>




    );
}