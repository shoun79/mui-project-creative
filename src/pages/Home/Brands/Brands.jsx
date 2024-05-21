import { Box, styled } from "@mui/material";

const Brands = () => {
    const brands = [
        'https://i.ibb.co/27wHw8Y/image-5.png',
        'https://i.ibb.co/vVSVd76/image-6.png',
        'https://i.ibb.co/Dwj3KYc/image-7.png',
        'https://i.ibb.co/99gcp3b/image-8.png',
        'https://i.ibb.co/Rhk2VSh/image-9.png',
    ];
    const BrandsWrapper = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4rem',
        '& > img': {
            height: '60px',

        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            '& > img': {
                marginBottom: '1.5rem'

            }
        }
    }))
    return (
        <BrandsWrapper>
            {
                brands?.map((brand, i) => (
                    <img key={i} src={brand}></img>
                ))
            }
        </BrandsWrapper>
    );
};

export default Brands;