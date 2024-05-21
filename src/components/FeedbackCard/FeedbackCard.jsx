import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FeedbackCard = () => {
    return (
        <Card sx={{ maxWidth: 345, mx: 'auto' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <CardMedia
                    sx={{ p: 2, width: 'auto', borderRadius: '50%' }}
                    component="img"
                    alt="green iguana"
                    height="100"
                    width='auto'
                    image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Box>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Miriam Barron
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '15px', fontWeight: '500', }}>
                        CEO, Manpol
                    </Typography>
                </Box>
            </Box>
            <CardContent sx={{ p: 0, px: 2 }}>

                <Typography variant="body2" color="#707070" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeedbackCard;