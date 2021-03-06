export class StackedArea {
  series = [{
    name: 'Chrome',
    data: [0, 0, 0, 0, 3.6, 9.8, 22.4, 34.6]
  }, {
    name: 'Firefox',
    data: [0, 23.6, 29.9, 36.3, 44.4, 46.4, 43.5, 37.7]
  }, {
    name: 'Internet Explorer',
    data: [76.2, 68.9, 60.6, 56.0, 46.0, 37.2, 27.5, 20.2]
  }, {
    name: 'Mozilla',
    data: [16.5, 2.8, 2.5, 1.2, 0, 0, 0, 0]
  }, {
    name: 'Opera',
    data: [1.6, 1.5, 1.5, 1.6, 2.4, 2.3, 2.2, 2.5]
  }, {
    name: 'Safari',
    data: [0, 0, 0, 1.8, 2.7, 3.6, 3.8, 4.2]
  }];

  valueAxis = {
    labels: {
      format: '{0}%'
    },
    line: {
      visible: false
    },
    axisCrossingValue: -10,
    max: 100
  };

  categoryAxis = {
    categories: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
    majorGridLines: {
      visible: false
    }
  };

  tooltip = {
    visible: true,
    format: '{0}%',
    template: '#= series.name #: #= value #%'
  }
}
