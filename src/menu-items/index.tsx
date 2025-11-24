// project import
import samplePage from './sample-page';
import other from './other';
import pages from './messages';
import media from './media';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [media, samplePage, pages, other]
};

export default menuItems;
