// Función que corre cuando se hace click en el botón
document.getElementById("btnCalcular").addEventListener("click", function() {
  // Obtener los valores seleccionados
  let destilado = document.getElementById("destilado").value;
  let ingrediente = document.getElementById("ingrediente").value;
  let estilo = document.getElementById("estilo").value;

  // Validar que haya seleccionado todas las opciones
  if (!destilado || !ingrediente || !estilo) {
    alert("Por favor, seleccioná todas las opciones.");
    return;
  }

  // Elegir el nombre del trago 
  let nombreTrago = "";

  if (destilado === "vodka" && ingrediente === "menta" && estilo === "refrescante") {
     nombreTrago = "Brisa Fresca";
  }
  else if (destilado === "vodka" && ingrediente === "menta" && estilo === "fuerte") {
    nombreTrago += "Impacto Herbal";
  }
   else if (destilado === "vodka" && ingrediente === "menta" && estilo === "dulce") {
    nombreTrago += "Encanto Polar";
  }    
    else if (destilado === "vodka" && ingrediente === "frutas" && estilo === "refrescante") {
    nombreTrago += "Aurora Tropical";
  }
    else if (destilado === "vodka" && ingrediente === "frutas" && estilo === "fuerte") {
    nombreTrago += "Golpe Siberiano";
  }
    else if (destilado === "vodka" && ingrediente === "frutas" && estilo === "dulce") {
    nombreTrago += "Caricia Frutal";
  }
      else if (destilado === "vodka" && ingrediente === "café" && estilo === "refrescante") {
    nombreTrago += "Nieve Negra";
  }
      else if (destilado === "vodka" && ingrediente === "café" && estilo === "fuerte") {
    nombreTrago += "Ruso Nocturno";
  }
      else if (destilado === "vodka" && ingrediente === "café" && estilo === "dulce") {
    nombreTrago += "Tentación Rusa";
  }
    if (destilado === "ron" && ingrediente === "menta" && estilo === "refrescante") {
     nombreTrago += "Mojito Fantasma";
  }
  else if (destilado === "ron" && ingrediente === "menta" && estilo === "fuerte") {
    nombreTrago += "Fuego Verde";
  }
   else if (destilado === "ron" && ingrediente === "menta" && estilo === "dulce") {
    nombreTrago += "Beso Caribeño";
  }    
      else if (destilado === "ron" && ingrediente === "frutas" && estilo === "refrescante") {
    nombreTrago += "Isla Viva";
  }
    else if (destilado === "ron" && ingrediente === "frutas" && estilo === "fuerte") {
    nombreTrago += "Huracán Dulce";
  }
    else if (destilado === "ron" && ingrediente === "frutas" && estilo === "dulce") {
    nombreTrago += "Melaza Tropical";
  }
      else if (destilado === "ron" && ingrediente === "café" && estilo === "refrescante") {
    nombreTrago += "Brisa Tostada";
  }
      else if (destilado === "ron" && ingrediente === "café" && estilo === "fuerte") {
    nombreTrago += "Tormenta Negra";
  }
      else if (destilado === "ron" && ingrediente === "café" && estilo === "dulce") {
    nombreTrago += "Dulce Corsario";
  }
  
    if (destilado === "gin" && ingrediente === "menta" && estilo === "refrescante") {
     nombreTrago += "Jardín Mentolado";
  }
  else if (destilado === "gin" && ingrediente === "menta" && estilo === "fuerte") {
    nombreTrago += "Ginebra Salvaje";
  }
   else if (destilado === "gin" && ingrediente === "menta" && estilo === "dulce") {
    nombreTrago += "Encanto Botánico";
  }    
        else if (destilado === "gin" && ingrediente === "frutas" && estilo === "refrescante") {
    nombreTrago += "Bruma de Berries";
  }
    else if (destilado === "gin" && ingrediente === "frutas" && estilo === "fuerte") {
    nombreTrago += "Cítrico Profundo";
  }
    else if (destilado === "gin" && ingrediente === "frutas" && estilo === "dulce") {
    nombreTrago += "Rosa Silvestre";
  }
      else if (destilado === "gin" && ingrediente === "café" && estilo === "refrescante") {
    nombreTrago += "Botánico Oscuro";
  }
      else if (destilado === "gin" && ingrediente === "café" && estilo === "fuerte") {
    nombreTrago += "London Noir";
  }
      else if (destilado === "gin" && ingrediente === "café" && estilo === "dulce") {
    nombreTrago += "Dulzura Vintage";
  }
    if (destilado === "tequila" && ingrediente === "menta" && estilo === "refrescante") {
     nombreTrago += "Sol Fresco";
  }
  else if (destilado === "tequila" && ingrediente === "menta" && estilo === "fuerte") {
    nombreTrago += "Rayo Verde";
  }
   else if (destilado === "tequila" && ingrediente === "menta" && estilo === "dulce") {
    nombreTrago += "Dulzura del Cacto";
  }    
        else if (destilado === "tequila" && ingrediente === "frutas" && estilo === "refrescante") {
    nombreTrago += "Amanecer Azteca";
  }
    else if (destilado === "tequila" && ingrediente === "frutas" && estilo === "fuerte") {
    nombreTrago += "Trueno Frutado";
  }
    else if (destilado === "tequila" && ingrediente === "frutas" && estilo === "dulce") {
    nombreTrago += "Corazón de Agave";
  }
      else if (destilado === "tequila" && ingrediente === "café" && estilo === "refrescante") {
    nombreTrago += "Nevada Mexicana";
  }
      else if (destilado === "tequila" && ingrediente === "café" && estilo === "fuerte") {
    nombreTrago += "Diablo de Medianoche";
  }
      else if (destilado === "tequila" && ingrediente === "café" && estilo === "dulce") {
    nombreTrago += "Beso de Cantina";
  }
    if (destilado === "whiskey" && ingrediente === "menta" && estilo === "refrescante") {
     nombreTrago += "Brisa Escocesa";
  }
  else if (destilado === "whiskey" && ingrediente === "menta" && estilo === "fuerte") {
    nombreTrago += "Tormenta Herbal";
  }
   else if (destilado === "whiskey" && ingrediente === "menta" && estilo === "dulce") {
    nombreTrago += "Caricia de Malta";
  }    
        else if (destilado === "whiskey" && ingrediente === "frutas" && estilo === "refrescante") {
    nombreTrago += "Highland Breeze";
  }
    else if (destilado === "whiskey" && ingrediente === "frutas" && estilo === "fuerte") {
    nombreTrago += "Furia Ahumada";
  }
    else if (destilado === "whiskey" && ingrediente === "frutas" && estilo === "dulce") {
    nombreTrago += "Dulce de Roble";
  }
      else if (destilado === "whiskey" && ingrediente === "café" && estilo === "refrescante") {
    nombreTrago += "Destello Escocés";
  }
      else if (destilado === "whiskey" && ingrediente === "café" && estilo === "fuerte") {
    nombreTrago += "Noche de Roble";
  }
      else if (destilado === "whiskey" && ingrediente === "café" && estilo === "dulce") {
    nombreTrago += "Café del Oeste";
  }
  ;

  // Mostrar el resultado en la página
  document.getElementById("resultado").textContent = 
    `Tu trago ${estilo} hecho con ${destilado} y ${ingrediente}: el *${nombreTrago}*.`;



let descripcionTrago = "";

// VODKA
if (nombreTrago === "Brisa Fresca") {
  descripcionTrago = `60 ml de vodka
30 ml de soda de lima
20 ml de jugo de pepino
6 hojas de menta
Hielo`;
} else if (nombreTrago === "Aurora Tropical") {
  descripcionTrago = `60 ml de vodka
30 ml de jugo de ananá
20 ml de jugo de maracuyá
10 ml de almíbar de frutilla
Hielo`;
} else if (nombreTrago === "Nieve Negra") {
  descripcionTrago = `50 ml de vodka
30 ml de café espresso
20 ml de licor de café
10 ml de almíbar de azúcar negra
Hielo frappé`;
} else if (nombreTrago === "Impacto Herbal") {
  descripcionTrago = `60 ml de vodka
20 ml de licor de hierbas
15 ml de jugo de lima
5 hojas de menta
Hielo`;
} else if (nombreTrago === "Golpe Siberiano") {
  descripcionTrago = `60 ml de vodka
40 ml de jugo de arándanos
10 ml de syrup cítrico
4 frambuesas machacadas
Hielo`;
} else if (nombreTrago === "Ruso Nocturno") {
  descripcionTrago = `60 ml de vodka
30 ml de licor de café
30 ml de café espresso
2 dashes de bitter de chocolate
Hielo`;
} else if (nombreTrago === "Encanto Polar") {
  descripcionTrago = `50 ml de vodka
30 ml de crema
15 ml de syrup de vainilla
3 hojas de menta
Hielo`;
} else if (nombreTrago === "Caricia Frutal") {
  descripcionTrago = `60 ml de vodka
30 ml de puré de durazno
20 ml de puré de frutilla
40 ml de soda dulce
Hielo`;
} else if (nombreTrago === "Tentación Rusa") {
  descripcionTrago = `50 ml de vodka
20 ml de licor de café
30 ml de leche condensada
Hielo`;
}

// RON
else if (nombreTrago === "Mojito Fantasma") {
  descripcionTrago = `60 ml de ron blanco
30 ml de jugo de lima
20 ml de almíbar simple
8 hojas de menta
Soda
Hielo`;
} else if (nombreTrago === "Isla Viva") {
  descripcionTrago = `60 ml de ron blanco
40 ml de jugo de piña
20 ml de jugo de mango
10 ml de syrup de maracuyá
Hielo`;
} else if (nombreTrago === "Ron Frío") {
  descripcionTrago = `60 ml de ron blanco
30 ml de café frío
15 ml de almíbar de vainilla
Hielo frappé`;
} else if (nombreTrago === "Fuego Verde") {
  descripcionTrago = `60 ml de ron añejo
10 ml de licor de menta
20 ml de jugo de lima
2 dashes de bitter
Hielo`;
} else if (nombreTrago === "Huracán Dulce") {
  descripcionTrago = `60 ml de ron dorado
30 ml de jugo de naranja
20 ml de jugo de maracuyá
10 ml de granadina
Hielo`;
} else if (nombreTrago === "Tormenta Negra") {
  descripcionTrago = `60 ml de ron oscuro
30 ml de licor de café
15 ml de café espresso
10 ml de almíbar de especias
Hielo`;
} else if (nombreTrago === "Beso Caribeño") {
  descripcionTrago = `50 ml de ron blanco
30 ml de crema de coco
10 ml de almíbar de menta
Hielo`;
} else if (nombreTrago === "Melaza Tropical") {
  descripcionTrago = `60 ml de ron dorado
30 ml de puré de mango
20 ml de jugo de ananá
10 ml de syrup de coco
Hielo`;
} else if (nombreTrago === "Dulce Corsario") {
  descripcionTrago = `50 ml de ron oscuro
20 ml de licor de café
30 ml de crema
Hielo`;
}
// GIN
if (nombreTrago === "Jardín Mentolado") {
  descripcionTrago = `60 ml de gin
20 ml de licor de menta
15 ml de jugo de limón
Agua tónica
Hojas de menta y hielo`;
} else if (nombreTrago === "Bruma de Berries") {
  descripcionTrago = `60 ml de gin
30 ml de jugo de arándanos
20 ml de jugo de limón
15 ml de almíbar de frambuesa
Hielo`;
} else if (nombreTrago === "Botánico Oscuro") {
  descripcionTrago = `60 ml de gin
30 ml de café frío
15 ml de licor de flor de saúco
Twist de naranja
Hielo`;
} else if (nombreTrago === "Ginebra Salvaje") {
  descripcionTrago = `60 ml de gin
20 ml de Fernet
20 ml de jugo de limón
Hojas de menta
Hielo`;
} else if (nombreTrago === "Cítrico Profundo") {
  descripcionTrago = `60 ml de gin
30 ml de jugo de pomelo
10 ml de licor de maracuyá
Rodaja de lima
Hielo`;
} else if (nombreTrago === "London Noir") {
  descripcionTrago = `60 ml de gin
30 ml de cold brew
15 ml de licor de cacao
2 dash de angostura
Hielo`;
} else if (nombreTrago === "Encanto Botánico") {
  descripcionTrago = `60 ml de gin
20 ml de licor de menta
15 ml de almíbar de lavanda
Agua con gas
Hielo`;
} else if (nombreTrago === "Rosa Silvestre") {
  descripcionTrago = `60 ml de gin
30 ml de jugo de frutilla
10 ml de almíbar de rosas
Rodaja de limón
Hielo`;
} else if (nombreTrago === "Dulzura Vintage") {
  descripcionTrago = `60 ml de gin
30 ml de licor de café
15 ml de crema
Pizca de nuez moscada
Hielo`;
}

// TEQUILA
if (nombreTrago === "Sol Fresco") {
  descripcionTrago = `60 ml de tequila blanco
30 ml de jugo de limón
15 ml de jarabe de agave
Hojas de menta
Hielo`;
} else if (nombreTrago === "Amanecer Azteca") {
  descripcionTrago = `60 ml de tequila reposado
30 ml de jugo de naranja
20 ml de granadina
Hielo`;
} else if (nombreTrago === "Nevada Mexicana") {
  descripcionTrago = `60 ml de tequila blanco
30 ml de licor de café
15 ml de crema
Twist de limón
Hielo`;
} else if (nombreTrago === "Rayo Verde") {
  descripcionTrago = `60 ml de tequila reposado
20 ml de licor de hierbas
15 ml de jugo de limón
Rodaja de jalapeño
Hielo`;
} else if (nombreTrago === "Trueno Frutado") {
  descripcionTrago = `60 ml de tequila blanco
30 ml de jugo de maracuyá
15 ml de almíbar simple
Hielo`;
} else if (nombreTrago === "Diablo de Medianoche") {
  descripcionTrago = `60 ml de tequila añejo
30 ml de licor de café
10 ml de jugo de lima
Hielo`;
} else if (nombreTrago === "Dulzura del Cacto") {
  descripcionTrago = `60 ml de tequila blanco
20 ml de jarabe de agave
15 ml de jugo de limón
Rodaja de pepino
Hielo`;
} else if (nombreTrago === "Corazón de Agave") {
  descripcionTrago = `60 ml de tequila reposado
30 ml de jugo de toronja
15 ml de licor de naranja
Hielo`;
} else if (nombreTrago === "Beso de Cantina") {
  descripcionTrago = `60 ml de tequila añejo
20 ml de licor de frutas rojas
15 ml de almíbar de canela
Hielo`;
}

// WHISKEY
if (nombreTrago === "Brisa Escocesa") {
  descripcionTrago = `60 ml de whiskey escocés
30 ml de agua con gas
20 ml de jugo de limón
6 hojas de menta
Hielo`;
} else if (nombreTrago === "Highland Breeze") {
  descripcionTrago = `60 ml de whiskey escocés
30 ml de jugo de manzana verde
15 ml de syrup de miel
Hielo`;
} else if (nombreTrago === "Whisky Helado") {
  descripcionTrago = `50 ml de whiskey
30 ml de café frío
20 ml de licor de café
Hielo frappé`;
} else if (nombreTrago === "Tormenta Herbal") {
  descripcionTrago = `60 ml de whiskey irlandés
20 ml de licor de hierbas
15 ml de jugo de lima
5 hojas de menta
Hielo`;
} else if (nombreTrago === "Furia Ahumada") {
  descripcionTrago = `60 ml de whiskey ahumado
30 ml de jugo de naranja
10 ml de syrup de especias
Hielo`;
} else if (nombreTrago === "Noche de Roble") {
  descripcionTrago = `60 ml de whiskey
30 ml de vermut rojo
2 dashes de bitter de naranja
Hielo`;
} else if (nombreTrago === "Caricia de Malta") {
  descripcionTrago = `50 ml de whiskey de malta
30 ml de crema
15 ml de syrup de vainilla
Hielo`;
} else if (nombreTrago === "Dulce de Roble") {
  descripcionTrago = `60 ml de whiskey
20 ml de licor de caramelo
15 ml de jugo de manzana
Hielo`;
} else if (nombreTrago === "Café del Oeste") {
  descripcionTrago = `50 ml de whiskey
30 ml de café espresso
20 ml de licor de café
Hielo`;
};



  // Mostrar el resultado en la página
  document.getElementById("descripcioncoctel").textContent = 
    `Ingredientes para preparar el trago: 
${descripcionTrago}.`;
});