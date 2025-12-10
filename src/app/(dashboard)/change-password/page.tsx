import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import ChangePasswordForm from 'sections/auth/auth-forms/ChangePasswordForm';

// ================================|| CHANGE PASSWORD ||================================ //

export default function ChangePasswordPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack spacing={1}>
          <Typography variant="h3">Change Password</Typography>
          <Typography variant="body1" color="text.secondary">
            Update your account password. Make sure to use a strong password that you haven&apos;t used before.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <ChangePasswordForm />
      </Grid>
    </Grid>
  );
}
