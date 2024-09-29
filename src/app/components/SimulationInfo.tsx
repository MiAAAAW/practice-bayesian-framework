import React from "react";

export default function SimulationInfo() {
  return (
    <div className="w-full mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Resumen de la Simulación de Red Bayesiana
      </h2>
      <p className="mb-4 text-gray-700">
        Este proyecto implica la simulación de una Red Bayesiana dentro del
        contexto de un sistema de IoT en un hogar inteligente. Una Red
        Bayesiana es un modelo gráfico probabilístico que representa un conjunto
        de variables y sus dependencias condicionales utilizando un gráfico
        acíclico dirigido (DAG).
      </p>

      <h3 className="text-xl font-semibold mb-3">Propósito de la Simulación</h3>
      <p className="mb-4 text-gray-700">
        La simulación está diseñada para modelar el riesgo de que diferentes
        sensores en un entorno de hogar inteligente sean comprometidos por un
        ataque. Evalúa qué tan probable es que ciertos eventos (como que se
        active una alarma antirrobo) ocurran dado el estado de otros sensores
        conectados. Al ejecutar múltiples simulaciones, podemos estimar el nivel
        general de riesgo del sistema y evaluar su vulnerabilidad.
      </p>

      <h3 className="text-xl font-semibold mb-3">
        ¿Qué Hace el Script de Python?
      </h3>
      <p className="mb-4 text-gray-700">
        El script de Python,{" "}
        <code className="bg-gray-200 p-1 rounded">simulate.py</code>, realiza
        los siguientes pasos:
      </p>
      <ol className="list-decimal list-inside mb-4 text-gray-700">
        <li>
          **Definir la Estructura de la Red Bayesiana**: El script comienza
          definiendo la estructura de la Red Bayesiana, donde los nodos
          representan sensores como la Alarma Antirrobo, Sensor de Movimiento,
          Sensor de Puerta, etc.
        </li>
        <li>
          **Establecer Probabilidades Condicionales**: Para cada sensor, el
          script define la probabilidad de que se active dado el estado de sus
          nodos padre.
        </li>
        <li>
          **Simular Ataques**: Selecciona aleatoriamente un subconjunto de
          sensores para que sean comprometidos, simulando un ataque en el
          sistema del hogar inteligente.
        </li>
        <li>
          **Calcular el Impacto**: Basado en los sensores comprometidos, el
          script calcula el impacto total en el sistema utilizando valores de
          impacto predefinidos.
        </li>
        <li>
          **Evaluar el Nivel de Riesgo**: El script determina el nivel de
          riesgo (Alto, Medio, Bajo) en función del impacto total calculado en
          comparación con umbrales de riesgo predefinidos.
        </li>
        <li>
          **Agregar Resultados**: Finalmente, el script ejecuta este proceso
          para un gran número de simulaciones (por ejemplo, 1000) y agrega los
          resultados para entender la distribución general del riesgo.
        </li>
      </ol>

      <h3 className="text-xl font-semibold mb-3">
        Por Qué Esta Simulación es Importante
      </h3>
      <p className="mb-4 text-gray-700">
        En aplicaciones del mundo real, comprender las vulnerabilidades y los
        riesgos asociados con dispositivos interconectados es crucial. Esta
        simulación ayuda a identificar posibles puntos débiles en una
        configuración de hogar inteligente y proporciona ideas sobre cómo
        mejorar las medidas de seguridad.
      </p>

      <h3 className="text-xl font-semibold mb-3">Cómo Usar Esta Simulación</h3>
      <p className="text-gray-700">
        Puedes ejecutar la simulación directamente desde esta interfaz web
        especificando el número de simulaciones que te gustaría realizar. Los
        resultados te proporcionarán un análisis detallado de los niveles de
        riesgo en diferentes escenarios.
      </p>
    </div>
  );
}
