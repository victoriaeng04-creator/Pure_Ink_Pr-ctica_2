$(function () {

  /* AOS: animaciones al hacer scroll */

    if (window.AOS) {
    AOS.init({
      duration: 600,
      once: true,     
      offset: 80
    });
  }
  

  /* Menú responsive (rama: header-menu)*/
    const $botonMenu = $('.menu-boton');
  const $menu = $('.menu');

  function cerrarMenu() {
    $botonMenu.removeClass('abierto').attr({ 'aria-expanded': 'false', 'aria-label': 'Abrir menú' });
    $menu.stop(true, true).slideUp(300);
  }

  // Clic en la hamburguesa: abre o cierra el menú
  $botonMenu.on('click', function () {
    const abierto = $(this).toggleClass('abierto').hasClass('abierto');
    $(this).attr({ 'aria-expanded': String(abierto), 'aria-label': abierto ? 'Cerrar menú' : 'Abrir menú' });
    $menu.stop(true, true).slideToggle(300);
  });

  // Al pulsar un enlace del menú en móvil, se cierra
  $menu.on('click', 'a', function () {
    if ($botonMenu.is(':visible')) { cerrarMenu(); }
  });

  // La tecla Esc cierra el menú
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $botonMenu.hasClass('abierto')) { cerrarMenu(); }
  });

  // Al agrandar la ventana a escritorio, se limpia el estilo que deja slideToggle
  $(window).on('resize', function () {
    if (window.innerWidth >= 1024) {
      $menu.removeAttr('style');
      $botonMenu.removeClass('abierto').attr({ 'aria-expanded': 'false', 'aria-label': 'Abrir menú' });
    }
  });


  /* Hero (rama: inicio-hero) 
     1) fadeIn escalonado: etiqueta - logo - frase Typed - botones
     2) Typed.js: fine line - blackwork - ornamental - lettering (loop) */
  if (typeof Typed !== 'undefined' && $('#typed').length) {
    // new Typed('#typed', { ... });
  }


  /* Galería de inicio (rama: inicio-galeria)
     Filtro por estilo (data-estilo + fadeOut/fadeIn)
     y carga de 2 filas más al llegar al final al hacer scroll. */


  /* Slider automático (rama: slider)
     setInterval cada 4 s + .eq() + fadeOut/fadeIn,
     puntos pulsables y pausa al pasar el cursor. */


  /* Pestañas de artistas (rama: artistas)
     Clic en pestaña → addClass('activa') + fadeIn del panel. */


  /* Galería + modal (rama: galeria)
     Clic en foto → modal (fadeIn); se cierra con ×, fondo o Esc;
     flechas para foto anterior/siguiente. */


  /* Formulario de cita (rama: cita)
     Validación al enviar: campos obligatorios, email y teléfono,
     mensajes de error junto a cada campo. */

});
