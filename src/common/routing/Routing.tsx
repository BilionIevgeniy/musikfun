import { MainPage } from '@/app/MainPage';
import { PageNotFound } from '@/common/components';
import { ProfilePage } from '@/features/auth';
import { PlaylistsPage } from '@/features/playlists';
import { TracksPage } from '@/features/tracks';
import { Route, Routes } from 'react-router';

export const Path = {
  Main: '/',
  Playlists: '/playlists',
  Tracks: '/tracks',
  Profile: '/profile',
  NotFound: '*',
} as const;

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Playlists} element={<PlaylistsPage />} />
    <Route path={Path.Tracks} element={<TracksPage />} />
    <Route path={Path.Profile} element={<ProfilePage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
);
