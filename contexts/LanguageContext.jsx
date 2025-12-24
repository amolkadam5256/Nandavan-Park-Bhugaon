import { createContext, useContext, useEffect, useState } from "react";
import { translateText } from "../src/utils/translate";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(
        localStorage.getItem("lang") || "English"
    );

    const [translations, setTranslations] = useState({});

    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language]);

    async function translate(key, text) {
        if (language === "English") return text;

        const cacheKey = `${language}_${key}`;

        // 🔹 Use cache
        if (translations[cacheKey]) {
            return translations[cacheKey];
        }

        // 🔹 Translate
        const translated = await translateText(text, language);

        setTranslations(prev => ({
            ...prev,
            [cacheKey]: translated
        }));

        return translated;
    }

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, translate }}
        >
            {children}
        </LanguageContext.Provider>
    );
}
