import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

//custom icon
const CustomExpandIcon = () => {
    return (
        <div>
            <div className='expandMoreIcon'>
                <AddIcon ></AddIcon>
            </div>
            <div className='removeExpandIcon'>
                <RemoveIcon></RemoveIcon>
            </div>
        </div>
    )
};

const QuestionAccordion = ({ title, details }) => {



    return (
        <Accordion sx={{
            '& .Mui-expanded': {
                '& .expandMoreIcon': {

                    display: 'none'
                },
                '& .removeExpandIcon': {

                    display: 'block'
                }
            },
            boxShadow: 'none', border: '1px solid #E5EAF4',
            p: 2
        }}>
            <AccordionSummary
                sx={{
                    '& .removeExpandIcon': {
                        display: 'none'
                    },
                    color: 'primary.main', fontWeight: 'bold',
                    '& .Mui-expanded': {
                        color: 'primary.green'
                    }
                }}
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {title}
            </AccordionSummary>
            <AccordionDetails sx={{ color: '#5A7184' }}>
                {details}
            </AccordionDetails>
        </Accordion>
    );
};

export default QuestionAccordion;