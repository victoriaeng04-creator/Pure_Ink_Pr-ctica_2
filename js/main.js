$(function () {

  /* AOS: animaciones al hacer scroll */
  AOS.init({
    duration: 600,
    once: true,      // cada elemento se anima solo la primera vez
    offset: 80
  });

  /* Menú responsive (rama: header-menu) 
     Clic en la hamburguesa → slideToggle del menú,
     el icono cambia a × y se actualiza aria-expanded. */


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
