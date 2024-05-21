import { Box, Grid } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeedbackCard from "../../../components/FeedbackCard/FeedbackCard";

const ClientsFeedback = () => {

    return (
        <Box sx={{ mb: 10 }}>
            <SectionTitle title='Clients' colored='Feedback'> </SectionTitle>
            <Box>
                <Grid container spacing={3} >
                    {[...Array(3)].map((image, i) => <Grid key={i} item xs={12} sm={6} md={4}>
                        <FeedbackCard key={i} image={image}></FeedbackCard>

                    </Grid>)}

                </Grid>
            </Box>
        </Box>
    );
};

export default ClientsFeedback;