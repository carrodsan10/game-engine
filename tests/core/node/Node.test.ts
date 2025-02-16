import { canHaveModifiers } from 'typescript'
import { Node } from '../../../src/core/node'

/**
 * Suite de puebas para la clase Node.
 * Comenzamos probando las funcionalidades más básicas y fundamentales.
 */
describe('Node - Funcionalidades Básicas', () => {
	/**
	 * Primero probamos la creación de nodos y sus propiedades básicas.
	 * Estas pruebas verifican que podamos crear nodos correctamente y
	 * que sus proiedades iniciales sean las esperadas.
	 */
	describe('Creación y Propiedades Básicas', () => {
		test('un nodo debe crearse co nun nombre específico', () => {
			const node = new Node('MyNode')

			expect(node.name).toBe('MyNode')
			expect(node.parent).toBeNull()
			expect(node.children).toHaveLength(0)
		})
	})

	test('cada nodo debe tener un UUID único', () => {
		const node1 = new Node('Node1')
		const node2 = new Node('Node2')
		const node3 = new Node('Node3')

		expect(node1.id).not.toBe(node2.id)
		expect(node2.id).not.toBe(node3.id)
		expect(node3.id).not.toBe(node1.id)

		const uuidRegex =
			/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
		expect(node1.id).toMatch(uuidRegex)
		expect(node2.id).toMatch(uuidRegex)
		expect(node3.id).toMatch(uuidRegex)
	})
})

/**
 * Probamos las relaciones padre-hijo básicas.
 * Estas pruebas verifican que podamos construir correctamente
 * la jerarquía de nodos
 */
describe('Relaciones Padre-hijo', () => {
	let parent: Node
	let child: Node

	// Antes de cada prueba, creamos un nuevo padre y un nuevo hijo
	beforeEach(() => {
		parent = new Node('Parent')
		child = new Node('Child')
	})

	test('debe poder añadir un hijo correctamente', () => {
        parent.addChild(child)

        expect(parent.children).toContain(child)
        expect(child.parent).toBe(parent)

        expect(parent.children).toHaveLength(1)
    })

    test('debe poder remover un hijo correctamente', () => {
        parent.addChild(child)

        parent.removeChild(child)

        expect(parent.children).not.toContain(child)
        expect(child.parent).toBeNull()
        expect(parent.children).toHaveLength(0)
     })

     test('debe manejar la reasignación de padres correctamente', () => {
        const newParent = new Node('NewParent')

        parent.addChild(child)
        newParent.addChild(child)

        expect(parent.children).not.toContain(child)
        expect(parent.children).toHaveLength(0)

        expect(newParent.children).toContain(child)
        expect(child.parent).toBe(newParent)
      })
})
