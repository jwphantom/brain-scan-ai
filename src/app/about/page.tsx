/* eslint-disable react/no-unescaped-entities */
import Header from "../static/Header";

export default function about() {
    return (
        <main>
            <Header />
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="about col-lg-12 col-md-12">
                            <div className="cardAbout row">
                                <h2>À propos du modèle</h2>
                                <p>
                                    Ce modèle a été conçu pour la classification
                                    d'images de tumeurs cérébrales en utilisant
                                    le dataset{" "}
                                    <a
                                        href="https://www.kaggle.com/masoudnickparvar/brain-tumor-mri-dataset"
                                        target="_blank"
                                    >
                                        masoudnickparvar/brain-tumor-mri-dataset
                                    </a>{" "}
                                    de Kaggle.
                                </p>
                            </div>
                            <br />

                            <div className="cardAbout row">
                                <h2>Performance du modèle</h2>
                                <p>
                                    Notre modèle EfficientNetB0 a atteint les
                                    performances suivantes lors des tests :
                                </p>
                                <ul>
                                    <li>Précision: 98%</li>
                                    <li>Rappel moyen: 98%</li>
                                    <li>Score F1 moyen: 98%</li>
                                    <li>Nombre total d'échantillons: 1311</li>
                                    <li>Nombre d'erreurs trouvées: 23</li>
                                </ul>
                            </div>
                            <br />

                            <div className="cardAbout row">
                                <h3>Architecture du modèle</h3>
                                <p>
                                    L'architecture de notre modèle
                                    EfficientNetB0 est configurée comme suit :
                                </p>
                                <ul>
                                    <li>
                                        Paramètres totaux: 4,418,375 (16.85 MB)
                                    </li>
                                    <li>
                                        Paramètres entraînables: 3,688,004 (1.41
                                        MB)
                                    </li>
                                    <li>
                                        Paramètres non-entraînables: 4,045,971
                                        (15.45 MB)
                                    </li>
                                </ul>
                                <p>
                                    Le modèle comprend des couches convolutives
                                    personnalisées en plus des couches de
                                    pooling et une couche dense finale pour la
                                    classification en 4 classes.
                                </p>
                            </div>
                            <br />
                            <div className="cardAbout row">
                                <h3>Dataset utilisé</h3>
                                <p>
                                    Les ensembles de données utilisés pour
                                    l'entraînement et la validation sont les
                                    suivants :
                                </p>
                                <ul>
                                    <li>
                                        Fichiers d'entraînement: 5712 fichiers,
                                        répartis en 4 classes.
                                    </li>
                                    <li>
                                        Fichiers de validation: 1311 fichiers,
                                        répartis en 4 classes.
                                    </li>
                                </ul>

                                <p>
                                    Note: Les données ont été préparées et
                                    réparties pour assurer une répartition
                                    équilibrée, ce qui est crucial pour
                                    l'entraînement d'un modèle de classification
                                    robuste.
                                </p>
                            </div>
                            <br />
                            <div
                                className="row"
                                style={{
                                    fontWeight: 200,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                Version : 1.0.0
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
