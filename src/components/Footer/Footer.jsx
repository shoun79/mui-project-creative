import { Box, Button, Container, Divider, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', py: 8 }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        color: '#fff',
                        flex: 1

                    }}>Creative Agency</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            color: 'rgba(255, 255, 255, 0.5)',

                        }}>Ready to get started?</Typography>
                        <Button sx={{
                            bgcolor: 'primary.green',
                            ml: 2,
                            '&:hover': {
                                bgcolor: 'primary.green',
                            }
                        }}>Get Started</Button>
                    </Box>
                </Box>
                <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.5)', mt: 5 }} />
            </Container>

        </Box>
    );
};

export default Footer;