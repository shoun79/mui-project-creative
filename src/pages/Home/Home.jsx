import Branding from "./Branding/Branding";
import Brands from "./Brands/Brands";
import ClientsFeedback from "./ClientsFeedback/ClientsFeedback";
import Faq from "./Faq/Faq";
import OurWorks from "./OurWorks/OurWorks";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <Branding></Branding>
            <Brands></Brands>
            <Services></Services>
            <OurWorks></OurWorks>
            <ClientsFeedback></ClientsFeedback>
            <Faq></Faq>

        </div>
    );
};

export default Home;