/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Header from "./static/Header";
import ImageUploadBox from "./components/ImageUploadBox";
import SummaryAnalyze from "./components/SummaryAnalyze";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

    const router = useRouter();

    const routeTo = (route: string) => {
        router.push(route);
    };

    return (
        <main>
            <Header />
            <Image
                src="/interior-empty-science-laboratory-with-modern-equipment-prepared-treatment-innovation-nervous-system-using-high-tech-microbiology-tools-scientific-research-neurological-lab.jpg"
                alt="Description of the image"
                className="background-image"
                width={700}
                height={700}
            />
            <div className="image-overlay">
                <div className="image-overlay-text">
                    <div className="rating-info">
                        <h1>
                            Application de Scan médicale <br />
                        </h1>
                        <p style={{ fontWeight: 200 }}>
                            Faites vos scan d'irm de cerveau et obtenez de vos
                            resultats en moins d'une minute.
                        </p>
                        <button
                            className="btn-start-application"
                            onClick={() => routeTo("/analyse")}
                        >
                            Commencer &nbsp;
                            <FontAwesomeIcon
                                style={{ width: 15 }}
                                icon={faArrowRight}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
