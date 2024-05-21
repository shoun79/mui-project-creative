
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, IconButton, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from "../../../components/CreativeCard/CreativeCard";
import { cardData } from "./cardData";
const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ my: 10, }}>
            {/* heading */}
            <Box display='flex' flexDirection={isMobile ? 'column' : 'row'} sx={{
                justifyContent: 'space-between', alignContent: 'center'
            }}>
                <SectionTitle title='Here are some of'
                    colored='our works' sx={{ textAlign: 'left' }} />

                <Box display={!isMobile && 'flex'} sx={{

                    justifyContent: 'space-between',
                    gap: 2

                }}>
                    <Tabs onChange={handleChange} value={value} centered sx={{

                        '& .MuiTabs-indicator': {
                            display: 'none'
                        },
                        '& .Mui-selected': {
                            color: '#7AB259',
                            fontWeight: 'bold'
                        },
                        '& .MuiButtonBase-root': {
                            textTransform: 'capitalize',
                        }



                    }}>
                        <Tab label="All" />
                        <Tab label="Web Design" />
                        <Tab label="Mobile Application" />
                    </Tabs>
                    <Box display={isMobile && 'flex'} justifyContent={isMobile && 'center'} flexDirection={isMobile && 'row'} >
                        <IconButton disabled={value === 0} onClick={() => setValue(value - 1)} sx={{

                            border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`, mr: 1,
                            color: 'primary.main',
                        }}> <ArrowBackIcon></ArrowBackIcon> </IconButton>
                        <IconButton disabled={value === 2}
                            sx={{

                                border: theme => `1px solid ${value === 2 ? '#959EAD' : theme.palette.primary.main}`,
                                color: 'primary.main',
                            }}
                            onClick={() => setValue(value + 1)}><ArrowBackIcon sx={{ transform: 'rotate(180deg)' }}></ArrowBackIcon></IconButton>
                    </Box>
                </Box>
            </Box>

            {/* card section */}
            <Grid container spacing={3} >
                {cardData[value]?.map((image, i) => <Grid key={i} item xs={12} sm={6} md={4}>
                    <CreativeCard key={i} image={image}></CreativeCard>

                </Grid>)}

            </Grid>
        </Box >
    );
};

export default OurWorks;