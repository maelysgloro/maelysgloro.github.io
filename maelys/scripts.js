//On peut aller jusqu'à 6 states
let pixelStates = 6;

//Charge les six gifs
let imagesNames = [
  "gifcolor/color_coin.gif",
  "gifcolor/color_rondcache.gif",
  "gifcolor/color_oeil.gif",
  "gifcolor/color_cercle.gif",
  "gifcolor/color_cmd.gif",
  "gifcolor/color_etoile.gif",
];


//Coordonnées (json) des exemples
let eclair = {
  // Bords
  6: [{
      x: 9,
      y: 1
    },
    {
      x: 10,
      y: 1
    },
    {
      x: 8,
      y: 2
    },
    {
      x: 10,
      y: 2
    },
    {
      x: 8,
      y: 3
    },
    {
      x: 10,
      y: 3
    },
    {
      x: 7,
      y: 4
    },
    {
      x: 10,
      y: 4
    },
    {
      x: 7,
      y: 5
    },
    {
      x: 9,
      y: 5
    },
    {
      x: 6,
      y: 6
    },
    {
      x: 9,
      y: 6
    },
    {
      x: 6,
      y: 7
    },
    {
      x: 9,
      y: 7
    },
    {
      x: 5,
      y: 8
    },
    {
      x: 9,
      y: 8
    },
    {
      x: 10,
      y: 8
    },
    {
      x: 11,
      y: 8
    },
    {
      x: 12,
      y: 8
    },
    {
      x: 5,
      y: 9
    },
    {
      x: 12,
      y: 9
    },
    {
      x: 5,
      y: 10
    },
    {
      x: 6,
      y: 10
    },
    {
      x: 7,
      y: 10
    },
    {
      x: 8,
      y: 10
    },
    {
      x: 12,
      y: 10
    },
    {
      x: 8,
      y: 11
    },
    {
      x: 11,
      y: 11
    },
    {
      x: 8,
      y: 12
    },
    {
      x: 11,
      y: 12
    },
    {
      x: 8,
      y: 13
    },
    {
      x: 10,
      y: 13
    },
    {
      x: 7,
      y: 14
    },
    {
      x: 10,
      y: 14
    },
    {
      x: 7,
      y: 15
    },
    {
      x: 9,
      y: 15
    },
    {
      x: 7,
      y: 16
    },
    {
      x: 9,
      y: 16
    },
    {
      x: 7,
      y: 17
    },
    {
      x: 8,
      y: 17
    }
  ]
};

let vinyle = {
  // Bords
  2: [{
      x: 6,
      y: 3
    },
    {
      x: 7,
      y: 3
    },
    {
      x: 8,
      y: 3
    },
    {
      x: 9,
      y: 3
    },
    {
      x: 10,
      y: 3
    },
    {
      x: 11,
      y: 3
    },
    {
      x: 12,
      y: 3
    },
    {
      x: 5,
      y: 4
    },
    {
      x: 6,
      y: 4
    },
    {
      x: 12,
      y: 4
    },
    {
      x: 13,
      y: 4
    },
    {
      x: 4,
      y: 5
    },
    {
      x: 5,
      y: 5
    },
    {
      x: 13,
      y: 5
    },
    {
      x: 14,
      y: 5
    },
    {
      x: 3,
      y: 6
    },
    {
      x: 4,
      y: 6
    },
    {
      x: 14,
      y: 6
    },
    {
      x: 15,
      y: 6
    },
    {
      x: 2,
      y: 7
    },
    {
      x: 3,
      y: 7
    },
    {
      x: 15,
      y: 7
    },
    {
      x: 16,
      y: 7
    },
    {
      x: 2,
      y: 8
    },
    {
      x: 16,
      y: 8
    },
    {
      x: 2,
      y: 9
    },
    {
      x: 16,
      y: 9
    },
    {
      x: 2,
      y: 10
    },
    {
      x: 16,
      y: 10
    },
    {
      x: 2,
      y: 11
    },
    {
      x: 16,
      y: 11
    },
    {
      x: 2,
      y: 12
    },
    {
      x: 3,
      y: 12
    },
    {
      x: 15,
      y: 12
    },
    {
      x: 16,
      y: 12
    },
    {
      x: 3,
      y: 13
    },
    {
      x: 4,
      y: 13
    },
    {
      x: 14,
      y: 13
    },
    {
      x: 15,
      y: 13
    },
    {
      x: 4,
      y: 14
    },
    {
      x: 5,
      y: 14
    },
    {
      x: 13,
      y: 14
    },
    {
      x: 14,
      y: 14
    },
    {
      x: 5,
      y: 15
    },
    {
      x: 6,
      y: 15
    },
    {
      x: 12,
      y: 15
    },
    {
      x: 13,
      y: 15
    },
    {
      x: 6,
      y: 16
    },
    {
      x: 7,
      y: 16
    },
    {
      x: 8,
      y: 16
    },
    {
      x: 9,
      y: 16
    },
    {
      x: 10,
      y: 16
    },
    {
      x: 11,
      y: 16
    },
    {
      x: 12,
      y: 16
    },
  ],
  // Intérieur
  3: [{
      x: 7,
      y: 4
    },
    {
      x: 8,
      y: 4
    },
    {
      x: 9,
      y: 4
    },
    {
      x: 10,
      y: 4
    },
    {
      x: 11,
      y: 4
    },
    {
      x: 8,
      y: 5
    },
    {
      x: 9,
      y: 5
    },
    {
      x: 10,
      y: 5
    },
    {
      x: 11,
      y: 5
    },
    {
      x: 12,
      y: 5
    },
    {
      x: 6,
      y: 6
    },
    {
      x: 7,
      y: 6
    },
    {
      x: 8,
      y: 6
    },
    {
      x: 9,
      y: 6
    },
    {
      x: 10,
      y: 6
    },
    {
      x: 11,
      y: 6
    },
    {
      x: 12,
      y: 6
    },
    {
      x: 13,
      y: 6
    },
    {
      x: 6,
      y: 7
    },
    {
      x: 5,
      y: 7
    },
    {
      x: 7,
      y: 7
    },
    {
      x: 11,
      y: 7
    },
    {
      x: 12,
      y: 7
    },
    {
      x: 13,
      y: 7
    },
    {
      x: 14,
      y: 7
    },
    {
      x: 3,
      y: 8
    },
    {
      x: 5,
      y: 8
    },
    {
      x: 6,
      y: 8
    },
    {
      x: 12,
      y: 8
    },
    {
      x: 13,
      y: 8
    },
    {
      x: 14,
      y: 8
    },
    {
      x: 15,
      y: 8
    },
    {
      x: 3,
      y: 9
    },
    {
      x: 4,
      y: 9
    },
    {
      x: 5,
      y: 9
    },
    {
      x: 6,
      y: 9
    },
    {
      x: 12,
      y: 9
    },
    {
      x: 13,
      y: 9
    },
    {
      x: 14,
      y: 9
    },
    {
      x: 15,
      y: 9
    },
    {
      x: 3,
      y: 10
    },
    {
      x: 4,
      y: 10
    },
    {
      x: 5,
      y: 10
    },
    {
      x: 6,
      y: 10
    },
    {
      x: 12,
      y: 10
    },
    {
      x: 13,
      y: 10
    },
    {
      x: 14,
      y: 10
    },
    {
      x: 15,
      y: 10
    },
    {
      x: 3,
      y: 11
    },
    {
      x: 4,
      y: 11
    },
    {
      x: 5,
      y: 11
    },
    {
      x: 6,
      y: 11
    },
    {
      x: 7,
      y: 11
    },
    {
      x: 11,
      y: 11
    },
    {
      x: 12,
      y: 11
    },
    {
      x: 13,
      y: 11
    },
    {
      x: 15,
      y: 11
    },
    {
      x: 4,
      y: 12
    },
    {
      x: 5,
      y: 12
    },
    {
      x: 6,
      y: 12
    },
    {
      x: 7,
      y: 12
    },
    {
      x: 8,
      y: 12
    },
    {
      x: 9,
      y: 12
    },
    {
      x: 10,
      y: 12
    },
    {
      x: 11,
      y: 12
    },
    {
      x: 12,
      y: 12
    },
    {
      x: 13,
      y: 12
    },
    {
      x: 5,
      y: 13
    },
    {
      x: 6,
      y: 13
    },
    {
      x: 7,
      y: 13
    },
    {
      x: 8,
      y: 13
    },
    {
      x: 9,
      y: 13
    },
    {
      x: 10,
      y: 13
    },
    {
      x: 11,
      y: 13
    },
    {
      x: 12,
      y: 13
    },
    {
      x: 6,
      y: 14
    },
    {
      x: 7,
      y: 14
    },
    {
      x: 8,
      y: 14
    },
    {
      x: 9,
      y: 14
    },
    {
      x: 10,
      y: 14
    },
    {
      x: 7,
      y: 15
    },
    {
      x: 8,
      y: 15
    },
    {
      x: 9,
      y: 15
    },
    {
      x: 10,
      y: 15
    },
    {
      x: 11,
      y: 15
    },
  ],
  // Centre
  5: [{
      x: 8,
      y: 8
    },
    {
      x: 9,
      y: 8
    },
    {
      x: 10,
      y: 8
    },
    {
      x: 8,
      y: 9
    },
    {
      x: 10,
      y: 9
    },
    {
      x: 8,
      y: 10
    },
    {
      x: 9,
      y: 10
    },
    {
      x: 10,
      y: 10
    },
  ],
};

let cassette = {
  // Bords
  2: [{
      x: 3,
      y: 4
    },
    {
      x: 4,
      y: 4
    },
    {
      x: 5,
      y: 4
    },
    {
      x: 6,
      y: 4
    },
    {
      x: 7,
      y: 4
    },
    {
      x: 8,
      y: 4
    },
    {
      x: 9,
      y: 4
    },
    {
      x: 10,
      y: 4
    },
    {
      x: 11,
      y: 4
    },
    {
      x: 12,
      y: 4
    },
    {
      x: 13,
      y: 4
    },
    {
      x: 14,
      y: 4
    },
    {
      x: 15,
      y: 4
    },
    {
      x: 2,
      y: 5
    },
    {
      x: 16,
      y: 5
    },
    {
      x: 2,
      y: 6
    },
    {
      x: 16,
      y: 6
    },
    {
      x: 2,
      y: 7
    },
    {
      x: 16,
      y: 7
    },
    {
      x: 2,
      y: 8
    },
    {
      x: 4,
      y: 8
    },
    {
      x: 5,
      y: 8
    },
    {
      x: 6,
      y: 8
    },
    {
      x: 7,
      y: 8
    },
    {
      x: 8,
      y: 8
    },
    {
      x: 9,
      y: 8
    },
    {
      x: 10,
      y: 8
    },
    {
      x: 11,
      y: 8
    },
    {
      x: 12,
      y: 8
    },
    {
      x: 13,
      y: 8
    },
    {
      x: 14,
      y: 8
    },
    {
      x: 16,
      y: 8
    },
    {
      x: 2,
      y: 9
    },
    {
      x: 4,
      y: 9
    },
    {
      x: 6,
      y: 9
    },
    {
      x: 7,
      y: 9
    },
    {
      x: 11,
      y: 9
    },
    {
      x: 12,
      y: 9
    },
    {
      x: 14,
      y: 9
    },
    {
      x: 16,
      y: 9
    },
    {
      x: 2,
      y: 10
    },
    {
      x: 4,
      y: 10
    },
    {
      x: 5,
      y: 10
    },
    {
      x: 6,
      y: 10
    },
    {
      x: 7,
      y: 10
    },
    {
      x: 8,
      y: 10
    },
    {
      x: 9,
      y: 10
    },
    {
      x: 10,
      y: 10
    },
    {
      x: 11,
      y: 10
    },
    {
      x: 12,
      y: 10
    },
    {
      x: 13,
      y: 10
    },
    {
      x: 14,
      y: 10
    },
    {
      x: 16,
      y: 10
    },
    {
      x: 2,
      y: 11
    },
    {
      x: 16,
      y: 11
    },
    {
      x: 2,
      y: 12
    },
    {
      x: 16,
      y: 12
    },
    {
      x: 2,
      y: 13
    },
    {
      x: 16,
      y: 13
    },
    {
      x: 3,
      y: 14
    },
    {
      x: 4,
      y: 14
    },
    {
      x: 5,
      y: 14
    },
    {
      x: 6,
      y: 14
    },
    {
      x: 7,
      y: 14
    },
    {
      x: 8,
      y: 14
    },
    {
      x: 9,
      y: 14
    },
    {
      x: 10,
      y: 14
    },
    {
      x: 11,
      y: 14
    },
    {
      x: 12,
      y: 14
    },
    {
      x: 13,
      y: 14
    },
    {
      x: 14,
      y: 14
    },
    {
      x: 15,
      y: 14
    },
  ],
  // Ligne haute
  3: [{
      x: 4,
      y: 6
    },
    {
      x: 5,
      y: 6
    },
    {
      x: 6,
      y: 6
    },
    {
      x: 7,
      y: 6
    },
    {
      x: 8,
      y: 6
    },
    {
      x: 9,
      y: 6
    },
    {
      x: 10,
      y: 6
    },
    {
      x: 11,
      y: 6
    },
    {
      x: 12,
      y: 6
    },
    {
      x: 13,
      y: 6
    },
    {
      x: 14,
      y: 6
    },
  ],
  // Partie basse
  4: [{
      x: 5,
      y: 12
    },
    {
      x: 6,
      y: 12
    },
    {
      x: 7,
      y: 12
    },
    {
      x: 8,
      y: 12
    },
    {
      x: 9,
      y: 12
    },
    {
      x: 10,
      y: 12
    },
    {
      x: 11,
      y: 12
    },
    {
      x: 12,
      y: 12
    },
    {
      x: 13,
      y: 12
    },
    {
      x: 4,
      y: 13
    },
    {
      x: 14,
      y: 13
    },
  ],
}


let mode = $('body').attr('data-mode');
let gomme = $('#gomme').attr('data-gomme');
let size = 40;
let state = 0;


// Initialise la grille
for (let y = 0; y < 20; y++) {
  for (let x = 0; x < 20; x++) {
    let newElement = document.createElement('div');
    newElement.classList.add('grid-item');
    newElement.setAttribute('data-state', "0");
    newElement.setAttribute('x', x);
    newElement.setAttribute('y', y);
    document.getElementById('grid').appendChild(newElement);
  }
}

//pour que button:active soit pris en compte sur Ipad
document.addEventListener("touchstart", function() {}, true);



/*jQuery
  Attendre que tout soit chargé
*/
$(document).ready(function() {

  /*LES BOUTONS*/

  /* Dessiner :
     - faire glisser pour changer les images

     Party ! :
     - faire glisser pour mettre en couleur
  */

  /*
    Bouton SwitchMode
    - écouter un click sur le bouton
    - changer la valeur de la variable `mode`
    -> si mode == 1 alors mode == 2
    -> si mode == 2 alors mode == 1
    - le bouton 'Mode' change par rapport à sa valeur
    - affecte la valeur de la variable `mode` au [data-mode] de `body`
   */

  $('#check').prop("checked", false);
  $('.on').addClass('invisible');

  $('#check').on('click', function() {
    if (mode == 1) {
      mode = 2;
      gomme = 1;

      //fond
      $('#ipad-device').addClass('body-party');

      //"On" quand on est en mode Party, donc on rend "off" invisible
      $('.on').removeClass('invisible');
      $('.off').addClass('invisible');

      //aller dans le mode Party retire la grille
      $('.grid-item').removeClass('displayGrid');

      //disparaissent en mode Party
      $('#gomme').hide();
      $('#reset').hide();
      $('#grille').hide();
      $('.cat-boutons').hide();
            $('.boutons h3').hide();
            $('.boutons p').hide();

      //réduit la taille de la section boutons car il n'y a plus qu'un bouton

      //enlève la selection de grille et de gomme
      $('#grille').removeClass('selection');
      $('#gomme').removeClass('selection');

      //afficher la consigne du mode Party
      $('.consigne').css('display', 'block');

      //Les contours deviennent violets en mode party
      $('#inputSize').css('background', '#CA7CD8');
      $('#export').css('border-color', '#CA7CD8');
      $('#export').css('box-shadow', '3px 3px #CA7CD8');
      $('#grid').css('border-color', '#CA7CD8');
      $('.exemples').css('border-color', '#CA7CD8');
      $('#player').css('border-color', '#CA7CD8');
    } else if (mode == 2) {
      mode = 1;

      $('#ipad-device').removeClass('body-party');


      //"Off" quand on est en mode Dessin, donc on rend "on" invisible
      $('.off').removeClass('invisible');
      $('.on').addClass('invisible');

      //agrandit la taille de la section bouton pour accueillir tous les boutons

      //disparaissent en mode Dessiner
      $('#gomme').show();
      $('#reset').show();
      $('#grille').show();
      $('.cat-boutons').show();
      $('.boutons h3').show();
      $('.boutons p').show();

      //faire disparaître la consigne du mode Party
      $('.consigne').css('display', 'none');
      $('.consigne').css('display', 'none');

      //Les contours deviennent noirs en mode dessin
      $('#inputSize').css('background', 'black');
      $('#export').css('border-color', 'black');
      $('#export').css('box-shadow', '3px 3px black');
      $('#grid').css('border-color', 'black');
      $('.exemples').css('border-color', 'black');
      $('#player').css('border-color', '#000');
    }

    $('body').attr('data-mode', mode);
  });


  /*
    Bouton Gomme
    - écouter un click sur le bouton
    - changer la valeur de la variable `gomme`
    -> si gomme == 1 alors gomme == 2
    -> si gomme == 2 alors gomme == 1
    - le bouton 'Gommer' devient 'Dessiner' ou vice versa
    - affecte la valeur de la variable `gomme` au [data-gomme] de `#gomme`
   */
  $('#gomme').on('click', function() {
    $('#gomme').toggleClass('selection');
$('.change-taille').removeClass('selection');

    if (gomme == 1) {
      gomme = 2;
    } else if (gomme == 2) {
      gomme = 1;
    }

    $('#gomme').attr('data-gomme', gomme);
  });



  /*Taille

  */
  $('.change-taille').on('click', function() {

    $('#gomme').removeClass('selection');
    $('.change-taille').removeClass('selection');
    $(this).addClass('selection');
    size = $(this).data('taille');
    $('#player').css({
      'width': size + 'px',
      'height': size + 'px',
      'line-height': eval(size * 1.25) + 'px'
    });
    //$('#nb').text(size);
  })

  /*
  Les six boutons fill
  Met toutes les cases à un state donné
  */
  // Bouton fill state 1 coin
  $('#coin').on('click', function() {
    $('.grid-item').attr('data-state', 1);
  })
  // Bouton fill state 2 rondcache
  $('#rondcache').on('click', function() {
    $('.grid-item').attr('data-state', 2);
  })
  // Bouton fill state 3 oeil
  $('#oeil').on('click', function() {
    $('.grid-item').attr('data-state', 3);
  })
  // Bouton fill state 4 cercle
  $('#cercle').on('click', function() {
    $('.grid-item').attr('data-state', 4);
  })
  // Bouton fill state 5 cmd
  $('#cmd').on('click', function() {
    $('.grid-item').attr('data-state', 5);
  })
  // Bouton fill state 6 etoile
  $('#etoile').on('click', function() {
    $('.grid-item').attr('data-state', 6);
  })


  /* Bouton grille
    Pour afficher ou non la grille
  */
  $('#grille').on('click', function() {
    $('.grid-item').toggleClass('displayGrid');
    $('#grille').toggleClass('selection');
  })


  /*Bouton export
    Exporte (json) dans la console les coordonnées des cases dessinées sur la grid et avec quel state
  */
  $('#export').on('click', exportDrawing);




  // Bouton reset appelle la fonction reset
  $('#reset').on('click', reset);

  /**
   * Mets l'attribut 'data-state' de toutes les cases à 0
   */
  function reset() {
    $('.grid-item').attr('data-state', 0);
  }



  /*
    Les trois exemples
    Importe dans la grid le dessin éclair, vinyle ou cassette
  */
  // Bouton exemple éclair
  $('#eclair').on('click', function() {
    reset();
    importDrawing(eclair)
  })
  // Bouton exemple vinyle
  $('#vinyle').on('click', function() {
    reset();
    importDrawing(vinyle);
  })
  // Bouton exemple cassette
  $('#cassette').on('click', function() {
    reset();
    importDrawing(cassette);
  })


  /**
   * Change l'état de chaque coordonnee par rapport à leur état décris dans l'objet JSON entré en paramètre
   * @param {JSON} coordinates Contient des arrays de coordonnees pour chaque état du dessin
   */
  function importDrawing(coordinates) {
    for (let state in coordinates) {
      for (let coordinate of coordinates[state]) {
        // On vérifie que l'état qu'on souhaite mettre est valide
        if (state >= 0 && state <= pixelStates) {
          $('.grid-item[x=' + coordinate.x + '][y=' + coordinate.y + ']').attr('data-state', state);
        }
      }
    }
  }

  /**
   * Créé un JSON contenant chaque coordonnées par rapport à leur état
   * Affiche dans la console
   */
  function exportDrawing() {
    let newDrawing = {};
    // On parcours chaque case de la grille
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 20; x++) {
        // On récupère son état
        let state = $('.grid-item[x=' + x + '][y=' + y + ']').attr('data-state');
        if (state != 0) {
          // On récupère ses coordonées
          let coordinate = {
            'x': x,
            'y': y
          };
          // Si on a pas encore ajouté de cases ayant cet état
          if (!newDrawing.hasOwnProperty(state)) {
            // On ajoute cet état qui contient la coordonées à nos données
            newDrawing[state] = [coordinate];
          } else {
            // Autrement on ajoute la coordonnée à son état déjà présent
            newDrawing[state].push(coordinate);
          }
        }
      }
    }
    console.log(JSON.stringify(newDrawing));
  }


  /* PLAYER, DRAGGABLE, COLLISION */
  /**
   * Place le curseur sous le clic s'il a eut lieu dans la grid, et le rend directement dragged
   * @param {Event} e L'action qui a déclenché la fonction
   */
  function drawAndMovePlayer(e) {
    // On place limite le déplacement du curseur et on le position sur la souris
    $("#player").draggable({
      containment: "#grid"
    });
    $("#player").css("left", e.pageX - (size / 2));
    $("#player").css("top", e.pageY - (size / 2));
    // On récupère le 'data-state' actuel de la case
    state = $("#player").collision(".grid-item").attr('data-state');
    // On l'incrément sauf si il dépasse le nombre d'états il retombe à 1
    state = (++state > pixelStates ? 1 : state);
    // On dessine un premier point
    overlap(e);
    couleur(e);
    // Peut importe ou dans la grid ou à appuyé on selctionne maintenant le player qui glisse sous notre doigt
    e.type = "mousedown.draggable";
    e.target = "#player";
    // On simule alors l'action drag sur l'element player
    $("#player").trigger(e);
  }

  /**
   * Lorsque player entre en collision avec un grid-item, ce dernier change de state
   */
  function overlap(event) {
    let touche = $("#player").collision(".grid-item"); //Donne quel(s) grid-item on touche
    if (mode == 1) {
      // Si on est en mode 1 et en mode dessiner, on passe les états de 1 en 1
      if (gomme == 1) {
        // On remplace le 'data-state' de la case par l'état incrémenté
        $(touche).attr('data-state', state);
      } else if (gomme == 2) {
        // On efface la case
        $(touche).attr('data-state', 0);
      }
    }
  }

  /**
   * Lorsque player entre en collision avec un grid-item, ce dernier se colore
   */
  function couleur(event, ui) {
    var touche = $("#player").collision(".grid-item"); //Return quel grid-item on touche
    // Si on est en mode 2, on découvre les couleurs
    if (mode == 2) {
      $(touche).addClass('couleur');
    }
  }

  /**
   * Retire la class 'couleur' de toutes les cases
   */
  function decouleur() {
    $('.grid-item').removeClass('couleur');
  }
  //Déclenche au clic les fonctions draw

  $("#grid").on("mousedown", drawAndMovePlayer);
  $("#player").on("mousedown", drawAndMovePlayer);
  $("#player").trigger("mousedown");
  //Déclenche au drag les fonctions overlap et couleur
  $("#player").on("drag", overlap);
  $("#player").on("drag", couleur);
  //Déclenche quand on relève notre doigt la fonction decouleur
  $("#player").on("dragstop pointerup", decouleur);

})
