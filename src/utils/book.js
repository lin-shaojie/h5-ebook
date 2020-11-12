export function themeList (vue) {
  return [
    {
      alias: vue.$t('book.themeDefault'),
      name: 'Default',
      style: {
        body: {
          color: '#4c5059',
          background: '#cecece',
          'padding-top': '48px!important',
          'padding-bottom': '48px!important'
        },
        img: {
          width: '100%'
        },
        '.epubjs-hl': {
          fill: 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply'
        }
      }
    },
    {
      alias: vue.$t('book.themeGold'),
      name: 'Gold',
      style: {
        body: {
          color: '#5c5b56',
          background: '#c6c2b6',
          'padding-top': '48px!important',
          'padding-bottom': '48px!important'
        },
        img: {
          width: '100%'
        },
        '.epubjs-hl': {
          fill: 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply'
        }
      }
    },
    {
      alias: vue.$t('book.themeEye'),
      name: 'Eye',
      style: {
        body: {
          color: '#404c42',
          background: '#a9c1a9',
          'padding-top': '48px!important',
          'padding-bottom': '48px!important'
        },
        img: {
          width: '100%'
        },
        '.epubjs-hl': {
          fill: 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply'
        }
      }
    },
    {
      alias: vue.$t('book.themeNight'),
      name: 'Night',
      style: {
        body: {
          color: '#cecece',
          background: '#000000',
          'padding-top': '48px!important',
          'padding-bottom': '48px!important'
        },
        img: {
          width: '100%'
        },
        '.epubjs-hl': {
          fill: 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply'
        }
      }
    }
  ]
}
