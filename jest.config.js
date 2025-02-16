module.exports = {
    // Indica que usaremos ts-jest como preset
    preset: 'ts-jest',

    // El entorno donde se ejecutarán las pruebas
    testEnvironment: 'node',

    // Dónde buscar los archivos de prueba
    roots: ['<rootDir>/tests'],

    // Patrón para encontrar archivos de prueba
    testMatch: ['**/*.test.ts'],

    // Configuración para resolver módulos
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }
  };
