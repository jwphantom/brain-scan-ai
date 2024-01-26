import { useState } from "react";
import Image from "next/image";
import ToastCenter from "./Toast/ToastCenter";
import uploadImageService from "../api/sendImage";

interface ImageUploadBoxProps {
    setIsUpload: any;
    setImageData: any;
}

interface ImageMetaData {
    name: string;
    size: number;
    type: string;
    // Vous pouvez ajouter d'autres champs si nécessaire
}

const ImageUploadBox: React.FC<ImageUploadBoxProps> = ({}) => {
    const [image, setImage] = useState<File | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const [isUpload, setIsUpload] = useState(false);
    const [imageData, setImageData] = useState<ImageMetaData | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setIsUpload(true);
            setImage(file);
            setImageSrc(URL.createObjectURL(file));
            setTimeout(() => {
                setImageData({
                    name: file.name,
                    size: file.size,
                    type: file.type
                });
            }, 700);
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
        setIsUpload(false);
        setImage(null);
        setImageSrc(null);
        setImageData(null);
    };

    const handleValidate = () => {
        if (image) {
            const reader = new FileReader();

            reader.onloadend = async () => {
                const base64String = reader.result;
                try {
                    const upload = new uploadImageService();

                    const response: any = await upload.sendImage(base64String);
                } catch (error) {
                    console.error(
                        "Une erreur s'est produite lors de la requête :",
                        error
                    );
                }

                setLoading(true);

                setTimeout(() => {
                    setLoading(false);
                    setIsUpload(false);
                    setImage(null);
                    setImageSrc(null);
                    setImageData(null);
                    handleCancel(); // Réinitialiser l'upload après le chargement
                }, 5000);
            };

            reader.readAsDataURL(image);
        }
    };

    return (
        <>
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
                    <div
                        className={`col-sm-12 col-lg-${
                            isUpload ? "6" : "12"
                        } col-md-12 transition-width`}
                    >
                        <div
                            className="cardBoxUpload"
                            onClick={() =>
                                document.getElementById("fileUpload")?.click()
                            }
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
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
                                            Cliquer / Déposer pour analyser
                                            votre imagerie
                                        </span>
                                    </div>
                                )}
                                {image && (
                                    <div>
                                        <div className="imageContainer">
                                            <Image
                                                width={400}
                                                height={300}
                                                src={
                                                    imageSrc ||
                                                    "/public/upload.jpg"
                                                }
                                                alt="Uploaded"
                                            />
                                        </div>
                                    </div>
                                )}
                            </>

                            <ToastCenter />
                        </div>
                    </div>
                    {isUpload && imageData && (
                        <div className="col-lg-6 col-md-12 col-sm-12 transition-width">
                            <div className="cardBox">
                                <div className="cardBoxMetadata">
                                    <div className="title">
                                        <h4>Métadonées</h4>
                                    </div>
                                    <div className="metadata-table">
                                        <table className="col-12">
                                            <thead>
                                                <tr>
                                                    <th>Propriété</th>
                                                    <th>Valeur</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Nom</td>
                                                    <td>{imageData.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Taille</td>
                                                    <td>
                                                        {(
                                                            imageData.size /
                                                            1024
                                                        ).toFixed(2)}{" "}
                                                        KB
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Type</td>
                                                    <td>{imageData.type}</td>
                                                </tr>
                                                {/* Insérez d'autres métadonnées ici si nécessaire */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isUpload && (
                        <div className="buttonValidateDivBlock">
                            <button className="btn" onClick={handleValidate}>
                                Valider
                            </button>
                            <button className="btn" onClick={handleCancel}>
                                Annuler
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default ImageUploadBox;
