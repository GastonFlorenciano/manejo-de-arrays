const readline = require('readline');

// Configuración del lector de consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let personas = [];

// Función para ingresar los datos de una persona
function ingresarDatos(numPersonas) {
  let contador = 0;

  function pedirDatos() {
    if (contador < numPersonas) {
      rl.question(`Ingrese el nombre de la persona ${contador + 1}: `, (nombre) => {
        rl.question(`Ingrese la edad de ${nombre}: `, (edad) => {
          rl.question(`Ingrese la nota de ${nombre}: `, (nota) => {
            // Convertimos la nota a un número
            nota = parseFloat(nota);
            
            // Almacenamos los datos de la persona
            personas.push([nombre, edad, nota]);
            
            // Aumentamos el contador y repetimos la pregunta si no hemos alcanzado el número de personas
            contador++;
            pedirDatos();
          });
        });
      });
    } else {
      mostrarResultados();
    }
  }

  pedirDatos();
}

// Función para mostrar los resultados
function mostrarResultados() {
  console.log('\nListado completo de personas:');
  personas.forEach((persona, index) => {
    console.log(`${index + 1}. Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
  });

  // Ordenamos la lista por la nota de mayor a menor
  personas.sort((a, b) => b[2] - a[2]);

  console.log('\nListado ordenado por nota de mayor a menor:');
  personas.forEach((persona, index) => {
    console.log(`${index + 1}. Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
  });

  rl.close();
}

// Iniciar el programa pidiendo cuántas personas desea ingresar
rl.question('¿Cuántas personas desea registrar? ', (numPersonas) => {
  numPersonas = parseInt(numPersonas);

  // Llamamos a la función para ingresar los datos
  ingresarDatos(numPersonas);
});
