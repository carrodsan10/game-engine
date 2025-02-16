/**
 * Tipos fundamentales para el sistema de nodos.
 * Estos tipos son utilizados en todo el engine para referenciar y trabajar con nodos.
 */

// Identificador único para cada nodo
// Ejemplo de UUID: '123e4567-e89b-12d3-a456-426614174000'
export type NodeID = string

// Representa la ruta de un nodo en el árbol de escenas
// Ejemplo: '/RootNode/Player/Sprite'
export type NodePath = string


/**
 * Interfaz base que define la estructura que debe tener cualquier nodo en el sistema.
 * Esta interfaz asegura que todos los nodos implementen la funcionalidad básica necesaría.
 */
export interface INode {
  // Propiedades fundamentales
  readonly id: NodeID
  name: string
  parent: INode | null
  children: INode[]
  path: NodePath

  // Métodos de gestión de jerarquía
  addChild(child: INode): void
  removeChild(child: INode): void
  getChild(name: string): INode | null
  getNodeByPath(path: NodePath): INode | null
}
