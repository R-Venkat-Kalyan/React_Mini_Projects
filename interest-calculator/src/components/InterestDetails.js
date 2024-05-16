import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, Container, Typography, Divider, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    borderRadius: '16px', // Increased border radius for more curves
    border: `2px solid ${theme.palette.primary.main}`,
    overflow: 'hidden',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: '#f7f9fc', // Light background for the content area
}));

const DetailRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: '#fff', // White background for rows
    borderRadius: '8px', // Rounded corners for rows
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for rows
}));

const InterestDetails = () => {
    const location = useLocation();
    const {
        calculatedInterest,
        interestType,
        chargeType,
        chargeValue,
        amount,
        startDate,
        endDate,
        compoundingFrequency,
        duration,
    } = location.state || {};

    return (
        <Container>
            <StyledCard>
                <CardHeader
                    title="Interest Details"
                    titleTypographyProps={{ variant: 'h4', align: 'center', color: 'danger' }}
                    sx={{ backgroundColor: '#1976d2', color: '#fff' }} // Primary color background for header
                />
                <StyledCardContent>
                    <DetailRow>
                        <Typography variant="h6">Calculated Interest:</Typography>
                        <Typography variant="body1">{calculatedInterest}</Typography>
                    </DetailRow>
                    <Divider variant="middle" />
                    <DetailRow>
                        <Typography variant="h6">Interest Type:</Typography>
                        <Typography variant="body1">{interestType}</Typography>
                    </DetailRow>
                    <Divider variant="middle" />
                    <DetailRow>
                        <Typography variant="h6">Charge Type:</Typography>
                        <Typography variant="body1">{chargeType}</Typography>
                    </DetailRow>
                    <Divider variant="middle" />
                    <DetailRow>
                        <Typography variant="h6">Charge Value:</Typography>
                        <Typography variant="body1">{chargeValue}</Typography>
                    </DetailRow>
                    <Divider variant="middle" />
                    <DetailRow>
                        <Typography variant="h6">Amount:</Typography>
                        <Typography variant="body1">{amount}</Typography>
                    </DetailRow>
                    <Divider variant="middle" />
                    <DetailRow>
                        <Typography variant="h6">Start Date:</Typography>
                        <Typography variant="body1">{startDate}</Typography>
                    </DetailRow>
                    <Divider variant="middle" />
                    <DetailRow>
                        <Typography variant="h6">End Date:</Typography>
                        <Typography variant="body1">{endDate}</Typography>
                    </DetailRow>
                    {interestType === 'compound' && (
                        <>
                            <Divider variant="middle" />
                            <DetailRow>
                                <Typography variant="h6">Compounding Frequency:</Typography>
                                <Typography variant="body1">{compoundingFrequency}</Typography>
                            </DetailRow>
                        </>
                    )}
                    <Divider variant="middle" />
                    <DetailRow>
                        <Typography variant="h6">Duration (days):</Typography>
                        <Typography variant="body1">{duration}</Typography>
                    </DetailRow>
                    <Box mt={4} textAlign="center">
                        <Button component={Link} to="/" variant="contained" color="primary">
                            Back to Home
                        </Button>
                    </Box>
                </StyledCardContent>

            </StyledCard>

        </Container>
    );
};

export default InterestDetails;
