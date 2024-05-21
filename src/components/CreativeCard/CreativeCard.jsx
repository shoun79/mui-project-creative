import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreativeCard = ({ image }) => {
    const theme = useTheme();

    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: '10px', minWidth: 345, mx: 'auto' }}>
            <CardMedia
                sx={{ height: 190 }}
                image={image}
                title="image"
                style={{
                    borderRadius: '10px'
                }}
            />
            <CardContent sx={{
                p: 0, pt: 4, '&:last-child': {
                    pb: 0
                },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography gutterBottom variant="body" component="div" color="text.secondary">
                        Web Design
                    </Typography>
                    <Typography variant="body2" color='primary.main' fontWeight='bold' fontSize='20px'>
                        Web design research
                    </Typography>
                </Box>
                <IconButton sx={{
                    border: `1px solid ${theme.palette.primary.main}`, borderRadius: '50%',
                    height: '25px',
                    width: '25px',
                    '& svg': {
                        color: 'primary.main'
                    }
                }}> <AddIcon></AddIcon> </IconButton>
            </CardContent>
        </Card>
    );
};

export default CreativeCard;