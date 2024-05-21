import { Box, Grid } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Service from "../../../components/Service/Service";

const Services = () => {
    const serviceImages = [
        'https://i.ibb.co/HNhykGp/iphone-1.png',
        'https://i.ibb.co/r0gHkvM/color-palette-1.png',
        'https://i.ibb.co/CvQwzKC/coding-1.png',
    ];
    return (
        <Box>
            <SectionTitle title='Provide awesome'
                colored='Services'
            > </SectionTitle>
            <Grid container spacing={2} >

                {serviceImages.map((image, i) =>
                    <Grid item key={i} xs={12} sm={6} md={4}>
                        <Service image={image} key={i}></Service>
                    </Grid>
                )}

            </Grid>
        </Box >
    );
};

export default Services;