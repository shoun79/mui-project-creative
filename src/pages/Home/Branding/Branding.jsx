import { Box, Button, Stack, Typography, styled } from "@mui/material";
import '../Branding/Branding.css'

const Branding = () => {
    const BrandWrapper = styled(Box)(({ theme }) => ({
        height: '70vh', backgroundColor: 'rgba(122, 178, 89, 0.15)',
        padding: theme.spacing(4),
        margin: '4rem 0',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'

    }))

    return (
        <BrandWrapper >
            <Stack spacing={5}>
                <Typography sx={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>
                    Let’s Grow Your<br /> Brand  To The<br /> Next Level
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Purus
                    commodo ipsum<br /> duis laoreet maecenas. Feugiat{' '}
                </Typography>

                <Button className="hireBtn" sx={{ width: '50%' }}>

                    <svg style={{ height: '30px', fontWeight: 'semiBold' }}>
                        <text x="50%" y="50%" dy=".25em" textAnchor="middle">
                            Hire Us
                        </text>
                    </svg>
                </Button>
            </Stack>
            <Box sx={{ width: '50%', display: ['none', 'none', 'block'] }}>
                <img style={{
                    width: '100%'
                }} src='https://i.ibb.co/sPXVMbC/Frame.png'
                    alt='branding' />
            </Box>
        </BrandWrapper>

    );
};

export default Branding;