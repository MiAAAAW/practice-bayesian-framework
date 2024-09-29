"use client";
import { useRef, useEffect } from "react";
import "prismjs/themes/prism-okaidia.css";
import Prism from "prismjs";
import "prismjs/components/prism-python";

interface CodeSnippetProps {
  code?: string;
  language: string;
}

const pythonCode = `import numpy as np
import random
import pandas as pd
import sys

# Get the number of simulations from command line arguments
num_simulations = int(sys.argv[1]) if len(sys.argv) > 1 else 1000

# Define the Bayesian Network structure and other parameters
network_structure = {
    'BurglarAlarm': [],
    'MotionSensor': ['BurglarAlarm'],
    'DoorSensor': ['BurglarAlarm'],
    'SecurityCamera': ['BurglarAlarm'],
    'FireAlarm': [],
    'SmokeSensor': ['FireAlarm'],
    'TemperatureSensor': ['FireAlarm'],
}

conditional_probabilities = {
    'BurglarAlarm': [0.001],
    'MotionSensor': [0.9, 0.2],
    'DoorSensor': [0.7, 0.1],
    'SecurityCamera': [0.6, 0.3],
    'FireAlarm': [0.002],
    'SmokeSensor': [0.8, 0.1],
    'TemperatureSensor': [0.7, 0.05],
}

impact_values = {
    'BurglarAlarm': 0.9,
    'MotionSensor': 0.5,
    'DoorSensor': 0.4,
    'SecurityCamera': 0.6,
    'FireAlarm': 0.9,
    'SmokeSensor': 0.7,
    'TemperatureSensor': 0.8,
}

risk_thresholds = {
    'High': 0.7,
    'Medium': 0.4,
}

def simulate_attack():
    attack_nodes = ['MotionSensor', 'DoorSensor', 'SecurityCamera']
    compromised_nodes = random.choices(attack_nodes, k=random.randint(1, len(attack_nodes)))
    return compromised_nodes

def calculate_impact(compromised_nodes):
    total_impact = 0.0
    for node in compromised_nodes:
        total_impact += impact_values[node]
    return total_impact

def calculate_risk(total_impact):
    if total_impact >= risk_thresholds['High']:
        return 'High'
    elif total_impact >= risk_thresholds['Medium']:
        return 'Medium'
    else:
        return 'Low'

results = []

for _ in range(num_simulations):
    compromised_nodes = simulate_attack()
    total_impact = calculate_impact(compromised_nodes)
    risk_level = calculate_risk(total_impact)
    results.append({'Compromised Nodes': compromised_nodes, 'Total Impact': total_impact, 'Risk Level': risk_level})

results_df = pd.DataFrame(results)

risk_counts = results_df['Risk Level'].value_counts()
risk_comparison = risk_counts / num_simulations

print(risk_comparison.to_json())
`;

export default function CodeSnippet({
  code = pythonCode,
  language,
}: CodeSnippetProps) {
  const codeRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    if (codeRef.current) {
      const textArea = document.createElement("textarea");
      textArea.value = codeRef.current.textContent || "";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Code copied to clipboard!");
    }
  };

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="w-full mx-auto mt-12 bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-200 text-xl font-bold">Code</span>
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-400"
          >
            Copy
          </button>
        </div>
      </div>
      <div className="px-3 py-2">
        <pre className={`language-${language}`}>
          <code ref={codeRef} className={`language-${language} text-sm`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
