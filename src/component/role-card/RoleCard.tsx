import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BusinessIcon from '@mui/icons-material/Business';
import { Radio } from '@mui/material';
import { Role } from '../../model/Role';

interface IProp {
    role: Role,
}

export default function RoleCard({ role }: IProp) {
    const texts = role === "freelancer" ? 
    { value: "freelancer", header: "I am a Freelancer,", description: "looking for work" , icon: <BusinessCenterIcon color='success' fontSize='large' />} :
    { value: "client", header: "I am a Client,", description: "hiring for a project.", icon: <BusinessIcon color='success' fontSize='large' />};
    return (
        <Card sx={{ width: 275 }} className='m-4'>
            <CardContent>
                <Box className="flex justify-between items-center">
                    {texts.icon}
                    <Radio value={texts.value} />
                </Box>
                <Typography variant="h5" component="div">
                    {texts.header}
                </Typography>
                <Typography variant="h6" component="div">
                    {texts.description}
                </Typography>
            </CardContent>
        </Card>
    );
}