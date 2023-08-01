import { Link } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export type Props = {
  Icon: JSX.Element;
  path: string;
  title: string;
  isSelected: boolean;
};

const MenuItem = ({ Icon, path, title, isSelected }: Props) => (
  <ListItemButton component={Link} to={path} selected={isSelected}>
    <ListItemIcon>{Icon}</ListItemIcon>
    <ListItemText primary={title} />
  </ListItemButton>
);

export default MenuItem;
