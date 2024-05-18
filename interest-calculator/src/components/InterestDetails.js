import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, Container, Typography, Divider, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: 'auto',
  marginTop: theme.spacing(5),
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
  borderRadius: '16px',
  border: `2px solid ${theme.palette.primary.main}`,
  overflow: 'hidden',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f7f9fc',
}));

const DetailRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const InterestDetails = () => {
  const { t } = useTranslation();
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
          title={t('interest')}
          titleTypographyProps={{ variant: 'h4', align: 'center', color: 'danger' }}
          sx={{ backgroundColor: '#1976d2', color: '#fff' }}
        />
        <StyledCardContent>
          <DetailRow>
            <Typography variant="h6">{t('calculated_interest')}:</Typography>
            <Typography variant="body1">{calculatedInterest}</Typography>
          </DetailRow>
          <Divider variant="middle" />
          <DetailRow>
            <Typography variant="h6">{t('interest_type')}:</Typography>
            <Typography variant="body1">{interestType}</Typography>
          </DetailRow>
          <Divider variant="middle" />
          <DetailRow>
            <Typography variant="h6">{t('charge_type')}:</Typography>
            <Typography variant="body1">{chargeType}</Typography>
          </DetailRow>
          <Divider variant="middle" />
          <DetailRow>
            <Typography variant="h6">{t('charge_value')}:</Typography>
            <Typography variant="body1">{chargeValue}</Typography>
          </DetailRow>
          <Divider variant="middle" />
          <DetailRow>
            <Typography variant="h6">{t('amount')}:</Typography>
            <Typography variant="body1">{amount}</Typography>
          </DetailRow>
          <Divider variant="middle" />
          <DetailRow>
            <Typography variant="h6">{t('start_date')}:</Typography>
            <Typography variant="body1">{startDate}</Typography>
          </DetailRow>
          <Divider variant="middle" />
          <DetailRow>
            <Typography variant="h6">{t('end_date')}:</Typography>
            <Typography variant="body1">{endDate}</Typography>
          </DetailRow>
          {interestType === 'compound' && (
            <>
              <Divider variant="middle" />
              <DetailRow>
                <Typography variant="h6">{t('compounding_frequency')}:</Typography>
                <Typography variant="body1">{compoundingFrequency}</Typography>
              </DetailRow>
            </>
          )}
          <Divider variant="middle" />
          <DetailRow>
            <Typography variant="h6">{t('duration_days')}:</Typography>
            <Typography variant="body1">{duration}</Typography>
          </DetailRow>
          <Box mt={4} textAlign="center">
            <Button component={Link} to="/" variant="contained" color="primary">
              {t('back_to_home')}
            </Button>
          </Box>
        </StyledCardContent>
      </StyledCard>
    </Container>
  );
};

export default InterestDetails;
