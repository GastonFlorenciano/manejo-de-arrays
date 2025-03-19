def ingresar_datos(num_personas):
    personas = []

    for i in range(num_personas):
        print(f"\nPersona {i + 1}:")
        nombre = input("Ingrese el nombre de la persona: ")
        edad = input("Ingrese la edad de la persona: ")
        nota = float(input("Ingrese la nota de la persona: "))
        
        # Almacenamos los datos en la lista de personas
        personas.append([nombre, edad, nota])

    return personas

def mostrar_resultados(personas):
    print("\nListado completo de personas:")
    for i, persona in enumerate(personas, 1):
        print(f"{i}. Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")
    
    # Ordenamos la lista por la nota de mayor a menor
    personas.sort(key=lambda x: x[2], reverse=True)
    
    print("\nListado ordenado por nota de mayor a menor:")
    for i, persona in enumerate(personas, 1):
        print(f"{i}. Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")

def main():
    # Pedir cuántas personas desea registrar
    num_personas = int(input("¿Cuántas personas desea registrar? "))
    
    # Iniciar el proceso de ingreso de datos
    personas = ingresar_datos(num_personas)
    
    # Mostrar los resultados
    mostrar_resultados(personas)

if __name__ == "__main__":
    main()
