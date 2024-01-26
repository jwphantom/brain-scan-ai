"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { usePathname, useSearchParams } from "next/navigation";
import Header from "./static/Header";
import ImageUploadBox from "./components/ImageUploadBox";

export default function Home() {
    function handleDragOver(e: { preventDefault: () => void }) {
        e.preventDefault(); // Empêcher le comportement par défaut
    }

    function handleDrop(e: {
        preventDefault: () => void;
        dataTransfer: { files: any[] };
    }) {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange(e.dataTransfer.files[0]);
        }
    }

    function handleFileChange(file: any) {
        // Traiter le fichier téléchargé
        // Par exemple, afficher l'image téléchargée ou la stocker
    }

    return (
        <main>
            <Header />

            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12  col-sm-12">
                            <ImageUploadBox />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
