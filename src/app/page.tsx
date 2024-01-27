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

    useEffect(() => {
        console.log(imageData);
    }, [imageData]);

    return (
        <main>
            <Header />

            <div className="content">
                <div className="container">
                    <div className="row">
                        {!analyseIsFinish ? (
                            <ImageUploadBox
                                setIsUpload={setIsUpload}
                                setAnalyseIsFinish={setAnalyseIsFinish}
                                setResAnalyse={setResAnalyse}
                                setImageData={setImageData}
                                imageData={imageData}
                            />
                        ) : (
                            <SummaryAnalyze
                                resAnalyse={resAnalyse}
                                imageData={imageData}
                                setResAnalyse={setResAnalyse}
                                setAnalyseIsFinish={setAnalyseIsFinish}
                                setImageData={setImageData}
                            />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
