import { useLanguage } from "../../contexts/LanguageContext";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed  top-18 right-2 z-50 group">
            <div className="relative">
                {/* Compact Language Selector */}
                <div
                    className="
            flex items-center gap-2
            bg-white/95 dark:bg-gray-800/95
            backdrop-blur-lg
            px-3 py-2
            rounded-full
            shadow-lg
            border border-gray-200 dark:border-gray-600
            cursor-pointer
            hover:shadow-2xl
            hover:border-blue-400 dark:hover:border-yellow-400
            transition-all duration-300
            hover:scale-105
          "
                >
                    {/* Globe Icon */}
                    <FaGlobe className="text-blue-600 dark:text-yellow-400 text-base animate-pulse" />

                    {/* Select Dropdown */}
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="
              bg-transparent
              text-gray-900 dark:text-white
              font-semibold
              text-xs
              outline-none
              cursor-pointer
              pr-1
            "
                        style={{
                            appearance: 'none',
                            minWidth: '70px'
                        }}
                    >
                        <option
                            value="English"
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-2"
                        >
                            🇬🇧 English
                        </option>
                        <option
                            value="Hindi"
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-2"
                        >
                            🇮🇳 हिंदी
                        </option>
                        <option
                            value="Marathi"
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-2"
                        >
                            🇮🇳 मराठी
                        </option>
                    </select>

                    {/* Custom Dropdown Arrow */}
                    <svg
                        className="w-3 h-3 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>

                {/* Tooltip on Hover */}
                <div
                    className="
            absolute top-full mt-2 right-0
            bg-gray-900 dark:bg-gray-700
            text-white
            px-2 py-1
            rounded-md
            text-xs
            font-medium
            whitespace-nowrap
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
            shadow-lg
          "
                >
                    भाषा चुनें
                </div>
            </div>
        </div>
    );
}