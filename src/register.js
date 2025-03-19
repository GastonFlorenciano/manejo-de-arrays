// Función para registrar personas
function registrarPersonas() {
    const personas = [];
    const numPersonas = parseInt(prompt("Ingrese el número de personas que desea registrar:"));

    for (let i = 0; i < numPersonas; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
        const edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
        const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));

        personas.push([nombre, edad, nota]);
    }

    // Mostrar los datos originales
    console.log("Listado de personas ingresadas:");
    personas.forEach(persona => {
        console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
    });

    // Ordenar por nota de mayor a menor
    personas.sort((a, b) => b[2] - a[2]);

    // Mostrar los datos ordenados por nota
    console.log("\nListado de personas ordenadas por nota (de mayor a menor):");
    personas.forEach(persona => {
        console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}, Nota: ${persona[2]}`);
    });
}

// Llamar a la función
registrarPersonas();
