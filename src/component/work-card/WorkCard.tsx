import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import { Box } from '@mui/material';
import { Work } from '../../model/Work';

interface IProp {
    work: Work
}

export default function WorkCard({ work }: IProp) {
    return (
        <Card sx={{
            width: {
                xs: 300,
                sm: 400,
                md: 500,
                lg: 600,
                xl: 700,
            }, display: "flex", flexDirection: {
                xs: "column",
                sm: "row"
            }, alignItems: "center"
        }}>
            <WorkTwoToneIcon sx={{ color: "green", fontSize: "5rem" }} />
            <CardContent sx={{
                width: {
                    xs: 200,
                    sm: 300,
                    md: 400,
                    lg: 500,
                    xl: 600,
                }
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    {work.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {work.description}
                </Typography>
                <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="body2" color="primary.main">
                        {work.start} - {work.finish}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ width: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h6" color="primary.main">
                    {work.amount} $
                </Typography>
                <Button sx={{ boxShadow: "none", marginTop: "0.5rem" }} variant="contained" size="small">Give Offer</Button>
            </CardActions>
        </Card>
    );
}