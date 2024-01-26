import { useState } from "react";
import Image from "next/image";
import ToastCenter from "./Toast/ToastCenter";

export default function ImageUploadBox() {
    const [image, setImage] = useState<File | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setImage(file);
            setImageSrc(URL.createObjectURL(file));
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files && event.dataTransfer.files[0];
        if (file) {
            setImage(file);
            setImageSrc(URL.createObjectURL(file));
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleCancel = () => {
        setImage(null);
        setImageSrc(null);
    };

    const handleValidate = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            handleCancel(); // Réinitialiser l'upload après le chargement
        }, 5000);
    };

    return (
        <div
            className="cardBoxUpload"
            onClick={() => document.getElementById("fileUpload")?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {loading ? (
                <div className="loadingContainer">
                    <Image
                        src="/loading.gif"
                        alt="Loading"
                        width={100}
                        height={100}
                    />
                </div>
            ) : (
                <>
                    {!image && (
                        <div className="uploadeImageIconDiv">
                            <Image
                                width={400}
                                height={300}
                                src="/upload3.png"
                                alt="Upload"
                            />
                            <input
                                type="file"
                                id="fileUpload"
                                accept="image/*"
                                hidden
                                onChange={handleFileChange}
                            />
                            <br />
                            <span>
                                Cliquer / Déposer pour analyser votre imagerie
                            </span>
                        </div>
                    )}
                    {image && (
                        <div>
                            <div className="imageContainer">
                                <Image
                                    width={400}
                                    height={300}
                                    src={imageSrc || "/public/upload.jpg"}
                                    alt="Uploaded"
                                />
                            </div>
                            <br />
                            <div className="buttonValidateDivBlock">
                                <button
                                    className="btn"
                                    onClick={handleValidate}
                                >
                                    Valider
                                </button>
                                <button className="btn" onClick={handleCancel}>
                                    Annuler
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
            <ToastCenter />
        </div>
    );
}
