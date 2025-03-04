export default {
  global: {
    Name: 'Estructura del <i>brief</i>',
    Description:
      'El <i>brief</i> es un documento que suministra información de la empresa, el producto o servicio que se va a promocionar o para el que se realizarán estrategias de comunicación. Este documento es de estricto manejo entre la empresa y la agencia o del profesional de la publicidad, y es altamente confidencial entre ambas partes para garantizar un manejo idóneo de los datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El <i>brief</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de brief publicitarios',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Segmentación del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de mercado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Proceso de segmentación',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_124100_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bonta, P. y Farber, M. (2002). 199 preguntas sobre Marketing y Publicidad. Grupo Editorial NORMA.',
      link: '',
    },
    {
      referencia: 'Cervera, Á. F. (2015). Comunicación Total. Midac Digital.',
      link: '',
    },
    {
      referencia:
        'DANE. (s. f.). Proyecciones de Población. Consultado el 21 de mayo de 2019',
      link: 'https://cutt.ly/UyIgKPo ',
    },
    {
      referencia:
        'Fernández, R. (2009). Segmentación de Mercados (3.a ed.). Mc Graw Hill. ',
      link: '',
    },
    {
      referencia: 'Kotler, P. & Armstrong, G. (2012). Marketing. Pearson. ',
      link: '',
    },
    {
      referencia:
        'Merino, M. J. y Pintado, T. (2015). La investigación de mercados, claves para conocer los insights del consumidor. Esic editorial. ',
      link: '',
    },
    {
      referencia:
        'Real Academia Española. (2019). Diccionario de la lengua española (edición del tricentenario).',
      link: 'https://cutt.ly/QyIgjkj',
    },
    {
      referencia:
        'Velásquez, L. F. (2020, 28 de enero). 8 tipos de personalidad, Resúmenes de Derecho. Docsity.',
      link: 'https://cutt.ly/WyIhy9m ',
    },
    {
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC. ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<i>Brief</i>',
      significado:
        'Documento diagnóstico y estratégico que realizan las empresas, con el fin de llevar a cabo procesos de comunicación y promoción.',
    },
    {
      termino: 'Estrategia de mercadeo',
      significado:
        'Conjunto de tácticas que se estructuran con base en los elementos de la mezcla del mercadeo, con el propósito de desarrollar el programa correspondiente.',
    },
    {
      termino: '<i>Marketing</i>',
      significado:
        'Disciplina que estudia las conductas y necesidades de los miembros de un mercado y su entorno, con el fin de generar productos o servicios que los satisfagan y obtener utilidades con su comercialización. ',
    },
    {
      termino: 'Mercado',
      significado:
        'Conjunto de variables y factores que afectan de forma positiva o negativa el proceso de producción, comercialización y promoción de los productos o servicios de las empresas.',
    },
    {
      termino: 'Mercado meta',
      significado:
        'Conjunto de miembros del mercado que tienen como característica principal el tener necesidades, gustos y conductas aptas para adquirir un producto o servicio.',
    },
    {
      termino: 'Nicho de mercado',
      significado:
        'Es un grupo reducido de personas, empresas u organizaciones, con necesidades y/o deseos específicos, también puede estar conformado por una pequeña zona geográfica o un grupo de empresas.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Es el lugar que ocupa un producto en la mente de los consumidores. También es la percepción que tienen los consumidores o usuarios de un producto o servicio. ',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'División que se hace del mercado, para formar grupos específicos con características demográficas y psicográficas similares.',
    },
  ],
  complementario: [
    {
      tema: '1. El <i>brief</i>.',
      referencia: 'SCRIBD. Modelo <i>brief</i> de primer contacto.',
      tipo: 'Documento  ',
      link:
        'https://es.scribd.com/document/655566910/Modelo-brief-de-primer-contacto ',
    },
    {
      tema: '1. El <i>brief</i>.',
      referencia: 'Modelo <i>brief</i> de campaña táctica. ',
      tipo: 'Documento PDF  ',
      link: 'https://es.scribd.com/document/511165411/Brief-campan-a-ta-ctica ',
    },
    {
      tema: '2.1. Concepto de mercado. ',
      referencia:
        'Robin, C. F., & Torres, C. A. (2001). Segmentación de mercados: buscando la correlación entre variables sicológicas y demográficas. Revista colombiana de Marketing, 2(2). PDF',
      tipo: 'Documento PDF',
      link: 'https://www.redalyc.org/pdf/109/10900204.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Manuel Augusto Arias López ',
          cargo: 'Instructor – experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Quindío ',
          fecha: 'Mayo de 2020',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia ',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital ',
          fecha: 'Mayo de 2020',
        },
        {
          nombre: 'Julieth Paola Vital López ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital ',
          fecha: 'Mayo de 2020',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Asesor pedagógico ',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
          fecha: 'Mayo de 2020',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
          fecha: 'Mayo,2024',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vera',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrollador <i>full stack</i> junior',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
