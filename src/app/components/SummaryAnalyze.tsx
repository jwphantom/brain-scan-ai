"use client";

import { useState } from "react";
import Image from "next/image";
import ToastCenter from "./Toast/ToastCenter";
import uploadImageService from "../api/sendImage";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons/faRotateRight";

interface SummaryAnalyzeProps {
    resAnalyse: any;
    imageData: any;
    setAnalyseIsFinish: any;
    setResAnalyse: any;
    setImageData: any;
}

const SummaryAnalyze: React.FC<SummaryAnalyzeProps> = ({
    resAnalyse,
    imageData,
    setAnalyseIsFinish,
    setResAnalyse,
    setImageData
}) => {
    const reload = () => {
        setAnalyseIsFinish(false);
        setResAnalyse(null);
        setImageData(null);
    };

    return (
        <>
            <div className="col-sm-12 col-lg-6 col-md-12 transition-width">
                <div className="cardBoxUpload">
                    <div>
                        <div className="imageContainer">
                            <Image
                                width={400}
                                height={300}
                                src={resAnalyse?.campath || "/logo.png"}
                                alt="Uploaded"
                                unoptimized={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="buttonValidateDivBlock">
                    <button className="col-12 btn" onClick={reload}>
                        <FontAwesomeIcon icon={faRotateRight} />
                        &nbsp;Recommancer
                    </button>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 transition-width">
                <div className="cardBox">
                    <div className="cardBoxMetadata">
                        <div className="title">
                            <h4>Métadonées</h4>
                        </div>
                        <div className="metadata-table">
                            <table className="col-12">
                                <tbody>
                                    <tr>
                                        <td className="td_gray">Nom</td>
                                        <td className="td_bol">
                                            {imageData?.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_gray">Taille</td>
                                        <td className="td_bol">
                                            {(imageData?.size / 1024).toFixed(
                                                2
                                            )}{" "}
                                            KB
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_gray">Type</td>
                                        <td className="td_bol">
                                            {imageData?.type}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_gray">Classe</td>
                                        <td className="td_bol">
                                            {resAnalyse?.classname}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_gray">Précision</td>
                                        <td className="td_bol">
                                            {(resAnalyse?.precision).toFixed(2)}
                                            %
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SummaryAnalyze;
