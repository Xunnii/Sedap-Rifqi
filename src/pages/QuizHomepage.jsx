import HeroQuiz from "../components/Quiz/HeroQuiz";
// import Features from "../components/Homepage/FItur";
// Import komponen lain yang dikomentari jika diperlukan
import AboutQuiz from "../components/Quiz/AboutQuiz";
// import CallToAction from "../components/CallToAction";
import ProdukQuiz from "../components/Quiz/ProdukQuiz";
// import NewsSection from "../components/NewsSection";
// import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Quiz/Testibos";

export default function QuizHomepage() {
    return (
        <div>
            <HeroQuiz />
            <AboutQuiz />
            <ProdukQuiz />
            <Testimonials />
        </div>
    );
}