"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { usePathname, useSearchParams } from "next/navigation";
import Header from "./static/Header";
import ImageUploadBox from "./components/ImageUploadBox";
import SummaryAnalyze from "./components/SummaryAnalyze";

interface ResAnalyse {
    campath: string;
    classname: string;
    precision: number;
    // Vous pouvez ajouter d'autres champs si nécessaire
}

interface ImageMetaData {
    name: string;
    size: number;
    type: string;
    // Vous pouvez ajouter d'autres champs si nécessaire
}

export default function Home() {
    const [isUpload, setIsUpload] = useState(false);

    const [analyseIsFinish, setAnalyseIsFinish] = useState<boolean | null>(
        false
    );

    const [imageData, setImageData] = useState<ImageMetaData | null>(null);

    const [resAnalyse, setResAnalyse] = useState<ResAnalyse | null>(null);

    const [isClickUpload, setIsClickUpload] = useState<boolean | null>(null);

    useEffect(() => {
        console.log(imageData);
    }, [imageData]);

    return (
        <main>
            <Header />

            <div className="content">
                <div className="container">
                    <div className="row">
                        <div
                            className={`col-lg-${
                                isClickUpload ? 12 : 9
                            } col-md-12`}
                        >
                            {!analyseIsFinish ? (
                                <ImageUploadBox
                                    setIsUpload={setIsUpload}
                                    setAnalyseIsFinish={setAnalyseIsFinish}
                                    setResAnalyse={setResAnalyse}
                                    setImageData={setImageData}
                                    imageData={imageData}
                                    setIsClickUpload={setIsClickUpload}
                                />
                            ) : (
                                <SummaryAnalyze
                                    resAnalyse={resAnalyse}
                                    imageData={imageData}
                                    setResAnalyse={setResAnalyse}
                                    setAnalyseIsFinish={setAnalyseIsFinish}
                                    setImageData={setImageData}
                                    setIsClickUpload={setIsClickUpload}
                                />
                            )}
                        </div>
                        {!isClickUpload && (
                            <div className="cardPriceCol col-lg-3 col-md-0">
                                <div className="cardPrice transition-width">
                                    <div className="headerPrice">
                                        <span className="titlePrice">Plan</span>
                                        <span className="price">Free</span>
                                    </div>
                                    <p className="desc">
                                        Prédiction sur 4 Classes.
                                    </p>
                                    <ul className="lists">
                                        <li className="list">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>Glioma</span>
                                        </li>
                                        <li className="list">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>Meningioma</span>
                                        </li>
                                        <li className="list">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>Notumor</span>
                                        </li>
                                        <li className="list">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>Pituitary</span>
                                        </li>
                                    </ul>
                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById("fileUpload")
                                                ?.click()
                                        }
                                        className="action"
                                    >
                                        Commencer
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
