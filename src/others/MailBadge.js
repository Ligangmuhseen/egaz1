import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from '@mui/material';

export default function MailBadge() {
  const isSmallScreen = useMediaQuery('(max-width: 800px)'); // Adjust the breakpoint as needed

  console.log('Is Small Screen:', isSmallScreen);

  return (
    <Badge badgeContent={100} color="primary" invisible={isSmallScreen}>
      <MailIcon color="success" />
    </Badge>
  );
}
