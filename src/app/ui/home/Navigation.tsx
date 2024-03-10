'use client';
import { HomeProvider } from '@/app/context/HomeContext';
import ButtonAppBar from './ButtonAppBar';
import TemporaryDrawer from './TemporaryDrawer';

export default function Navigation() {
  return (
    <HomeProvider>
      <ButtonAppBar />
      <TemporaryDrawer />
    </HomeProvider>
  );
}
