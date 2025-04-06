import { Avatar, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import dif_1 from '../../assets/images/dif_1.png';
import dif_2 from '../../assets/images/dif_2.png';
import dif_3 from '../../assets/images/dif_3.png';
import dif_4 from '../../assets/images/dif_4.png';
const differnetList = [
    {
        title: "Expert Industry Mentor",
        subtitles: "Students will be guided by Vijay, who actively works in the music industry. This provides a unique advantage, giving you access to all the practical knowledge needed to become more than just a musician.",
        image: dif_1,
    },
    {
        title: "Questions, Quizzes & Course Material",
        subtitles: "You'll get weekly assignments and easy-to-follow study materials to help you learn effectively. Your performance will be evaluated regularly, and personalized guidance will be provided based on your progress.",
        image: dif_2,
    },
    {
        title: "Lifetime Course Updates & Access",
        subtitles: "Welcome to my interactive, hands-on learning experience! I love working closely with each student to track their progress and help them succeed. As a special bonus, you'll get free access to exclusive online workshops that will supercharge your learning journey!",
        image: dif_3,
    },
    {
        title: "24/7 Dedicated Support",
        subtitles: "Vijay personally teaches and guides every student - no other instructors are involved. He checks on each student's learning progress every week to make sure they're on the right track.",
        image: dif_4,
    },
]
const DifferentMoto = () => {
    return (
        <Grid mt={5} item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
            <Typography
                sx={{ color: 'primary.main' }}
                variant="h2"
            >
                What Makes Us <span style={{ color: '#000' }}> Different?</span>
            </Typography>
            <Typography
                sx={{ color: '#555555', mt: '2px', fontSize: '12px' }}
            >
                Featured Learning Paths
            </Typography>

            <Container sx={{ mt: 3 }}>
                <Grid container spacing={3} justifyContent="space-evenly">
                    {differnetList.map((item, index) => (
                        <Grid item xs={12} sm={6} md={6} sx={{ width: { lx: "48%", md: "48%" } }} key={index}>
                            <Card sx={{
                                display: "flex", alignItems: "center", p: 2, boxShadow: 3,
                                height: '160px', borderRadius: '10px',
                                borderRight: index % 2 !== 0 ? 4 : 0,
                                borderLeft: index % 2 === 0 ? 4 : 0,
                                borderColor: "primary.main"
                            }}>
                                {/* <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 3 }}> */}
                                <Avatar src={item.image} alt={item.title} sx={{ width: 80, height: 80, mr: 2 }} />
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.subtitles}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );

};

export default DifferentMoto;