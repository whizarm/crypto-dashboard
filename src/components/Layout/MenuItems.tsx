import { useCurrentRoute } from 'hooks';
import routes from 'routes/protectedRoutes';
import MenuItem from './MenuItem';

const MenuItems = () => {
  const currentRoute = useCurrentRoute();

  return routes.map(({ Icon, path, title }) => (
    <MenuItem
      key={title}
      Icon={Icon}
      path={path}
      title={title}
      isSelected={path === currentRoute?.path}
    />
  ));
};

export default MenuItems;
