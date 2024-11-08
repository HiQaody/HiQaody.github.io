import axiosConfig from "./axiosConfig";

export const getAllDomaines = async () => {
    try{
        const response = await axiosConfig.get('metierDocument/domaines');
        return response.data;

    }catch (e) {
        console.error('Erreur lors de la récupération des catégories', e);
        throw e;
    }
};

export const getCount = async () => {
    try{
        const response = await axiosConfig.get('metierDocument/comptes');
        return response.data;

    }catch (e) {
        console.error('Erreur lors de la récupération des catégories', e);
        throw e;
    }
}

export const getAllBooks = async () => {
    try{
        const response = await axiosConfig.get('metierDocument/livres');
        return response.data;

    }catch (e) {
        console.error('Erreur lors de la récupération des livres', e);
        throw e;
    }
};

export const getById = async (id_sup) => {
    try{
        const response = await axiosConfig.get(`metierDocument/getById/${id_sup}`);
        return response.data
    }catch (e) {
        console.error('Erreur lors de la sélection du livre', e);
        throw e;
    }
}

export const getAllVideos = async () => {
    try{
        const response = await axiosConfig.get('metierDocument/videos');
        return response.data;

    }catch (e) {
        console.error('Erreur lors de la récupération des videos', e);
        throw e;
    }
};

export const fetchFile = async (fileName, fileType) => {
    try {
        const response = await axiosConfig.get(`/fileSave/download/${encodeURIComponent(fileType)}/${encodeURIComponent(fileName)}`, {
            responseType: 'blob'
        });

        if (response.status !== 200) {
            throw new Error("Erreur lors du téléchargement du fichier");
        }

        const fileUrl = URL.createObjectURL(response.data);
        return fileUrl;
    } catch (error) {
        console.error("Erreur:", error);
        return null;
    }
};