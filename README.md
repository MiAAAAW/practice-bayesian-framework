Este proyecto es una aplicación web que simula una red bayesiana para evaluar los riesgos en una red IoT de hogar inteligente. 

Está desarrollado con Next.js y utiliza un script en Python para la lógica de simulación.

## Características

- Ejecutar simulaciones de redes bayesianas con parámetros personalizables.
- Visualizar resultados en una tabla interactiva.
- Mostrar fragmentos de código con resaltado de sintaxis.
- Proporcionar información sobre la simulación.

## Estructura del Proyecto

- **`src/app/page.tsx`**: Punto de entrada principal de la aplicación.
- **`src/components/SimulationTest.tsx`**: Componente que maneja el formulario de simulación y muestra los resultados.
- **`src/components/CodeSnippet.tsx`**: Componente para mostrar fragmentos de código con resaltado de sintaxis.
- **`src/components/SimulationInfo.tsx`**: Componente que proporciona información sobre la simulación.
- **`simulate.py`**: Script de Python que contiene la lógica de la simulación.