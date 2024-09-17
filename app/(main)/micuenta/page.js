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
                            <div className="container container-fluid text-white w-100% p-4" style={{background: "#35303D"}}>
                                <div className="row">
                                    <div className="col-6 ">
                                        <h2>Mi cuenta</h2>
                                    </div>

                                <div className=" col-6 ">
                                    <div className="row">
                                        <div className=" col-4 ">
                                            <h4>Saldo disponible</h4>
                                        </div>
                                        <div className=" col-4 text-center">
                                            <h2> 500 </h2>
                                        </div>
                                        <div className=" col-4">
                                            <img
                                            href = "/"
                                            src = "/goofycoin.png"
                                            width={70}
                                            height={70}
                                            />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col-6" style={{background: "#49454F"}}>
                                <h1>Mi bombo</h1>
                            </div>

                            <div className="col-6" style={{background: "#D9D9D9"}}>
                                <h1>Mi bombo</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>




    );
}