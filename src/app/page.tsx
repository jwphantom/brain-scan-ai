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

interface ImageMetaData {
    name: string;
    size: number;
    type: string;
    // Vous pouvez ajouter d'autres champs si nécessaire
}

export default function Home() {
    const [isUpload, setIsUpload] = useState(false);
    const [imageData, setImageData] = useState<ImageMetaData | null>(null);

    return (
        <main>
            <Header />

            <div className="content">
                <div className="container">
                    <div className="row">
                        <ImageUploadBox
                            setIsUpload={setIsUpload}
                            setImageData={setImageData}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
