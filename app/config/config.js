import angular from 'angular';

const config = {
  nurses: [
    {
      firstName: 'Mireya',
      secondName: 'Fanny',
      surname: 'Rosales'
    },
    {
      firstName: 'Roxana',
      secondName: 'Violeta',
      surname: 'Casales'
    },
    {
      firstName: 'Tecla',
      secondName: 'Orellana',
      surname: 'Valentina'
    },
    {
      firstName: 'Gwen',
      secondName: 'Janessa',
      surname: 'Clark'
    },
    {
      firstName: 'Xanthia',
      secondName: 'Davina',
      surname: 'Jefferson'
    },
    {
      firstName: 'Cearra',
      secondName: 'Topaz',
      surname: 'Badcock'
    },
    {
      firstName: 'Patrice',
      secondName: 'Jonie',
      surname: 'Appleton'
    },
    {
      firstName: 'Karaugh',
      secondName: 'Jools',
      surname: 'Edwardson'
    },
    {
      firstName: 'Valorie',
      secondName: 'Tammara',
      surname: 'Goddard'
    },
    {
      firstName: 'Jerry',
      secondName: 'Alexandra',
      surname: 'Forester'
    },
    {
      firstName: 'Marinda',
      secondName: 'Mckenzie',
      surname: 'Marston'
    },
    {
      firstName: 'Tera',
      secondName: 'Giselle',
      surname: 'Irvin'
    },
    {
      firstName: 'Jackalyn',
      secondName: 'Renita',
      surname: 'Stack'
    },
    {
      firstName: 'Marigold',
      secondName: 'Bernice',
      surname: 'Jordan'
    },
    {
      firstName: 'Gray',
      secondName: 'Shantel',
      surname: 'Hartell'
    },
    {
      firstName: 'Rowan',
      secondName: 'Addison',
      surname: 'Bird'
    },
  ]
};

export default angular.module('config', [])
  .constant('config', config)
  .name;
