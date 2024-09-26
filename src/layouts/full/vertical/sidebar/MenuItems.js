

import { MiscellaneousServices } from '@mui/icons-material';
import { IconAperture } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
    {
      navlabel: true,
      subheader: 'Home',
    },
  
    {
      id: uniqueId(),
      title: 'Dashboard',
      icon: IconAperture,
      href: '/admin',
      chipColor: 'secondary',
    },

    {
      navlabel: true,
      subheader: 'Main',
    },

    {
      id: uniqueId(),
      title: 'Service',
      icon: MiscellaneousServices,
      href: '/admin/service',
    },
    {
      id: uniqueId(),
      title: 'Service Category',
      icon: MiscellaneousServices,
      href: '/admin/servicecategory',
    },
]

export default Menuitems;
