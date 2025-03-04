<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La estructura de un #[em brief] publicitario es fundamental para el desarrollo de estrategias de #[em marketing] efectivas. Esta síntesis se enfoca en dos aspectos clave de dicha estructura: la segmentación del mercado y los tipos de #[em brief] publicitarios. Por un lado, la segmentación del mercado se presenta como un proceso esencial que permite dividir el mercado para obtener resultados más precisos, tomando en cuenta variables como la segmentación industrial, la ubicación geográfica, el tamaño de la empresa y la actividad económica. Por otro lado, se analizan los diferentes tipos de #[em brief] publicitarios, distinguiendo entre el #[em brief] de primer contacto y el #[em brief] de campaña táctica, cada uno con un rol específico dentro de la planificación y ejecución de campañas de #[em marketing]. En conjunto, estos elementos proporcionan una visión clara y organizada de cómo abordar el diseño de un #[em brief] efectivo.
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta un esquema sobre “El Brief” publicitario, dividiéndose en dos partes principales: la segmentación del mercado y los tipos de brief publicitarios. La segmentación del mercado implica dividir el mercado para obtener mejores resultados, mediante un proceso que incluye la segmentación industrial (considerando el tamaño de la empresa) y la segmentación geográfica (teniendo en cuenta la ubicación y la actividad económica). Por otro lado, los tipos de brief publicitarios se clasifican en brief de primer contacto y brief de campaña táctica.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
