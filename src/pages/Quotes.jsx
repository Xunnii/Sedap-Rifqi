import { useEffect, useState } from "react"
import axios from "axios"
import PageHeader from "../components/PageHeader"

export default function InspirationalQuote() {
    const breadcrumb = ["Dashboard", "Inspirational Quote"]
    const [quote, setQuote] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchQuote = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://api.adviceslip.com/advice")
            if (response.status === 200) {
                setQuote(response.data.slip)
                setError(null)
            }
        } catch (err) {
            setError("Failed to fetch quote. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
        <div>
            <PageHeader title="Inspirational Quote" breadcrumb={breadcrumb} />

            <div className="max-w-2xl mx-auto mt-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    {loading ? (
                        <div className="text-center text-gray-600">Loading quote...</div>
                    ) : error ? (
                        <div className="text-center text-red-600">{error}</div>
                    ) : (
                        <>
                            <blockquote className="text-xl text-gray-700 italic mb-6">
                                "{quote?.advice}"
                            </blockquote>
                            <div className="text-right text-sm text-gray-500">
                                Quote #{quote?.id}
                            </div>
                            <button
                                onClick={fetchQuote}
                                className="mt-6 w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                            >
                                Quotes baru
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
} 