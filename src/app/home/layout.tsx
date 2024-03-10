import { Container, Grid } from '@mui/material';
import { HomeProvider } from '../context/HomeContext';
import ButtonAppBar from '../ui/home/ButtonAppBar';
import Navigation from '../ui/home/Navigation';
import TemporaryDrawer from '../ui/home/TemporaryDrawer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <Container maxWidth='md'>{children}</Container>
    </>
  );
}
