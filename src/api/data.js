const config = {
  nurses: [
    {
      firstName: 'Mireya',
      secondName: 'Fanny',
      surname: 'Rosales',
      phoneNumber: '+44 1632 960986',
      hours: 36
    },
    {
      firstName: 'Roxana',
      secondName: 'Violeta',
      surname: 'Casales',
      phoneNumber: '+44 1632 960853',
      hours: 36
    },
    {
      firstName: 'Tecla',
      secondName: 'Orellana',
      surname: 'Valentina',
      phoneNumber: '+44 1632 960712',
      hours: 36
    },
    {
      firstName: 'Gwen',
      secondName: 'Janessa',
      surname: 'Clark',
      phoneNumber: '+44 1632 960148',
      hours: 36
    },
    {
      firstName: 'Xanthia',
      secondName: 'Davina',
      surname: 'Jefferson',
      phoneNumber: '+44 1632 960354',
      hours: 36
    },
    {
      firstName: 'Cearra',
      secondName: 'Topaz',
      surname: 'Badcock',
      phoneNumber: '+44 1632 960317',
      hours: 36
    },
    {
      firstName: 'Patrice',
      secondName: 'Jonie',
      surname: 'Appleton',
      phoneNumber: '+44 1632 960955',
      hours: 36
    },
    {
      firstName: 'Karaugh',
      secondName: 'Jools',
      surname: 'Edwardson',
      phoneNumber: '+44 1632 960555',
      hours: 36
    },
    {
      firstName: 'Valorie',
      secondName: 'Tammara',
      surname: 'Goddard',
      phoneNumber: '+44 1632 960295',
      hours: 36
    },
    {
      firstName: 'Jerry',
      secondName: 'Alexandra',
      surname: 'Forester',
      phoneNumber: '+44 1632 960804',
      hours: 36
    },
    {
      firstName: 'Marinda',
      secondName: 'Mckenzie',
      surname: 'Marston',
      phoneNumber: '',
      hours: 36
    },
    {
      firstName: 'Tera',
      secondName: 'Giselle',
      surname: 'Irvin',
      phoneNumber: '+44 1632 960265',
      hours: 36
    },
    {
      firstName: 'Jackalyn',
      secondName: 'Renita',
      surname: 'Stack',
      phoneNumber: '+44 1632 960792',
      hours: 32
    },
    {
      firstName: 'Marigold',
      secondName: 'Bernice',
      surname: 'Jordan',
      phoneNumber: '+44 1632 960486',
      hours: 20
    },
    {
      firstName: 'Gray',
      secondName: 'Shantel',
      surname: 'Hartell',
      phoneNumber: '+44 1632 960217',
      hours: 20
    },
    {
      firstName: 'Rowan',
      secondName: 'Addison',
      surname: 'Bird',
      phoneNumber: '+44 1632 960544',
      hours: 20
    },
  ],


  getNurse: (id) => {
    const nurse = config.nurses[id - 1];
    return `${nurse.firstName} ${nurse.surname}`;
  }
};


exports.module = config;
