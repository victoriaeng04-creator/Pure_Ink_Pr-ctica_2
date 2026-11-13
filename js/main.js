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
    fadeIn escalonado + typed.js */
  const $aparecen = $('.hero__aparece');
  if ($aparecen.length) {
    $aparecen.css('opacity', 0).each(function (i) {
      $(this).delay(300 * i).animate({ opacity: 1 }, 600);
    });

    if (window.Typed) {
      $('#typed').text('');
      new Typed('#typed', {
        strings: ['fine line', 'blackwork', 'ornamental', 'lettering'],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1600,
        startDelay: 900,   // empieza cuando la frase ya ha aparecido
        loop: true
      });
    }
  }


  /* Galería de inicio */
  $('.filtros').each(function () {
    const $filtros = $(this);
    const $obras = $filtros.closest('section').find('.obra');
    const $contador = $('.galeria__contador'); //Galeria

    $filtros.on('click', '.filtro', function () {
      const filtro = $(this).data('filtro');

      $filtros.find('.filtro').removeClass('activo').attr('aria-pressed', 'false');
      $(this).addClass('activo').attr('aria-pressed', 'true');

      
      const $ocultas = $obras.filter(':hidden');
      $obras.removeClass('obra--extra');
      $ocultas.hide();
      $(window).off('scroll.galeria');

      const $mostrar = filtro === 'todo' ? $obras : $obras.filter('[data-estilo="' + filtro + '"]');
      $obras.not($mostrar).stop(true, true).fadeOut(200);
      $mostrar.stop(true, true).delay(200).fadeIn(300);

      if ($contador.length) {
        $contador.text(filtro === 'todo'
          ? 'Mostrando ' + $obras.length + ' trabajos'
          : 'Mostrando ' + $mostrar.length + ' de ' + $obras.length + ' trabajos');
      }
    });
  });

  /* Slider automático */
  const $slider = $('.slider');
  if ($slider.length) {
    const $slides = $slider.find('.slide');
    const $puntos = $('.slider__punto');
    let actual = 0;
    let temporizador;

    function irA(n) {
      if (n === actual) { return; }
      $slides.eq(actual).stop(true, true).fadeOut(500).removeClass('activo');
      $slides.eq(n).stop(true, true).fadeIn(500).addClass('activo');
      $puntos.removeClass('activo').removeAttr('aria-current');
      $puntos.eq(n).addClass('activo').attr('aria-current', 'true');
      actual = n;
    }

    function arrancar() {
      clearInterval(temporizador);
      temporizador = setInterval(function () {
        irA((actual + 1) % $slides.length);
      }, 4000);
    }

    $puntos.on('click', function () {
      irA($puntos.index(this));
      arrancar();
    });

    $slider.on('mouseenter', function () { clearInterval(temporizador); });
    $slider.on('mouseleave', arrancar);

    arrancar();
  }

  /* Pestañas de artistas */
    const $pestanas = $('.pestana');
  if ($pestanas.length) {
    function abrirPestana($pestana) {
      $pestanas.removeClass('activa').attr('aria-selected', 'false');
      $pestana.addClass('activa').attr('aria-selected', 'true');
      $('.panel').removeClass('activo').attr('hidden', true).hide();
      $('#' + $pestana.attr('aria-controls')).removeAttr('hidden').addClass('activo').fadeIn(400);
    }

    $pestanas.on('click', function () { abrirPestana($(this)); });

    const desdeEnlace = $('#tab-' + window.location.hash.slice(1));
    if (window.location.hash && desdeEnlace.length) { abrirPestana(desdeEnlace); }
  }


  /* Galería + modal (rama: galeria)
     Clic en foto → modal (fadeIn); se cierra con ×, fondo o Esc;
     flechas para foto anterior/siguiente. */


  /* Formulario de cita (rama: cita)
     Validación al enviar: campos obligatorios, email y teléfono,
     mensajes de error junto a cada campo. */

});
