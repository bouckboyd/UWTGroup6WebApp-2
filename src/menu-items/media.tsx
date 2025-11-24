// third-party
import { FormattedMessage } from 'react-intl';

// assets
import MovieOutlined from '@ant-design/icons/VideoCameraOutlined';
import TvOutlined from '@ant-design/icons/PlaySquareOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { MovieOutlined, TvOutlined, LockOutlined };

// ==============================|| MENU ITEMS - MEDIA & ACCOUNT ||============================== //

const media: NavItemType = {
    id: 'media',
    title: <FormattedMessage id="media" />,
    type: 'group',
    children: [
        {
            id: 'movies',
            title: <FormattedMessage id="movies" />,
            type: 'item',
            url: '/movies',
            icon: icons.MovieOutlined
        },
        {
            id: 'tv-shows',
            title: <FormattedMessage id="tv-shows" />,
            type: 'item',
            url: '/tv-shows',
            icon: icons.TvOutlined
        },
        {
            id: 'change-password',
            title: <FormattedMessage id="change-password" />,
            type: 'item',
            url: '/change-password',
            icon: icons.LockOutlined
        }
    ]
};

export default media;
