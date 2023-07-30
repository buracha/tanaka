import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
    return (
        <section className="w-full h-[750px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle 
            subtitle="empresa"
            title="Quem somos?"
            className="text-center items-center [&>h3]:text-4xl"
            />

            <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[840px] my-6 text-sm sm:text-base">
                Nós Clínica OdontoMax, oferecemos uma ampla gama de serviços, incluindo limpeza e prevenção, restaurações dentárias,
                tratamento de canal, implantes, próteses dentárias, clareamento dental e muito mais. Independentemente do procedimento
                que você necessita, nossa equipe está comprometida em proporcionar uma experiência positiva e resultados duradouros. 
                Localizada no coração da cidade, a Clínica OdontoMax é o destino ideal para todos os seus cuidados odontológicos. Com
                uma equipe altamente qualificada e tecnologia de ponta, estamos empenhados em oferecer serviços odontológicos de
                excelência, garantindo o máximo conforto e satisfação para nossos pacientes. Dentistas são especialistas em diversas áreas, desde a odontologia preventiva até os tratamentos estéticos mais
                avançados. Independentemente de suas necessidades dentárias, nossa equipe está pronta para ajudá-lo a alcançar um
                sorriso saudável e radiante.
                </p>
                <Link href="/">
                    <HiArrowNarrowLeft size={20} />
                    Voltar para Home
                </Link>
            </div>
        </section>
    )
}