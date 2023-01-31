/* when a library doesn't have types support for TS, the TS ecosystem gives us the possibility
to add types by manually installing them for the libraries that need it. In this case, we use
npm i -D @types/lodash for the specific case of lodash */
import _ from 'lodash';

/* because lodash uses the old require system instead of the newer ES modules, this is also
used by older versions of node, TS suggests us to install @types/node */
// var _ = require('lodash');

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
