import { Box } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import QuestionAccordion from "../../../components/QuestionAccordion/QuestionAccordion";

const Faq = () => {
    return (
        <Box sx={{ mb: 8 }}>
            <SectionTitle title='Frequently asked' colored='question'></SectionTitle>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 1

            }}>
                <QuestionAccordion title='How do I pay for the Essentials or Premium plan?'
                    details='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                ></QuestionAccordion>
                <QuestionAccordion title='How do I pay for the Essentials or Premium plan?'
                    details='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                ></QuestionAccordion>
                <QuestionAccordion title='How do I pay for the Essentials or Premium plan?'
                    details='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                ></QuestionAccordion>
            </Box>
        </Box>
    );
};

export default Faq;