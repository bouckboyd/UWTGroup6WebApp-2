// assets
import MovieOutlined from '@ant-design/icons/VideoCameraOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { MovieOutlined, PlusOutlined, BookOutlined, LockOutlined };

// ==============================|| MENU ITEMS - MEDIA & ACCOUNT ||============================== //

const media: NavItemType = {
  id: 'media',
  title: 'media',
  type: 'group',
  children: [
    {
      id: 'movies',
      title: 'movies',
      type: 'item',
      url: '/movies',
      icon: icons.MovieOutlined
    },
    {
      id: 'tv-shows',
      title: 'tv-shows',
      type: 'item',
      url: '/tv-shows',
      icon: icons.PlusOutlined
    },
    {
      id: 'create-media',
      title: 'create-media',
      type: 'item',
      url: '/create-media',
      icon: icons.PlusOutlined
    },
    {
      id: 'watchlist',
      title: 'watchlist',
      type: 'item',
      url: '/watchlist',
      icon: icons.BookOutlined
    },
    {
      id: 'change-password',
      title: 'change-password',
      type: 'item',
      url: '/change-password',
      icon: icons.LockOutlined
    }
  ]
};

export default media;
