import { GlobalConstants } from "@/app/lib/constant";

export default class uploadImageService {
    public async sendImage(base64: string | ArrayBuffer | null) {
        // Collectez toutes les données du formulaire depuis l'état formData

        const uid = `uid_${Date.now().toString(36)}_${Math.random()
            .toString(36)
            .substr(2, 9)}`;

        console.log(uid);

        // return await fetch(`${GlobalConstants.apiURL}/analyse/analyse-mri`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         uid: uid,
        //         base64: base64
        //     })
        // });
    }
}
