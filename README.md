# Estructuras de datos en Javascript

Repositorio con algunas de las estructuras de datos realizadas con Javascript con un poco de explicación y el link al repositorio con la implementación.

**Repositorios**

- [Linked List](https://github.com/danys182/estructura-datos-javascript/blob/main/js/simply-linked-list.js)

# Linked List

Son estructuras de datos lineales, un conjunto de nodos ordenados que se compone de 2 elementos fundamentales, un valor (value) y una referencia (next) al siguiente nodo. El nodo principal es el nodo inicial (head) y el nodo final la cola (tail) que al no tener un nodo que le sigue, la referencia es *null.* 

- **Value**: Dato que contendrá el nodo, string, number, boolean, etc.
- **Next**: Referencia de un nodo al siguiente nodo.
- **Head**: Referencia al primer nodo de la lista.
- **Tail**: Referencia al último nodo de la lista.
- **Pointer**: Enlace entre nodos

## Anatomía de un Linked list

La navegación siempre es hacia adelante

![https://i.ibb.co/8Xwqyvc/linked-list.jpg](https://i.ibb.co/8Xwqyvc/linked-list.jpg)

## Para manipular existen algunos métodos comunes

| Método | Acción |
| --- | --- |
| Prepend | Agregar un nodo al inicio |
| Append | Agregar un nodo al final |
| Lookup / Search | Buscar un nodo |
| Insert | Insertar un nodo en la lista |
| Delete | Borrar un nodo |



# Stack

Basicamente es una pila donde los elementos se van apilando, siendo que el elemento que entra va quedando abajo y el último siempre queda arriba, por lo que es el primero que debe salir. De ahí proviene el nombre **LIFO**, Las In (El último que entra), First Out (Es el primero que sale).Algunos métodos para apilar son:

![https://i.ibb.co/xgN07ZG/stack.jpg](https://i.ibb.co/xgN07ZG/stack.jpg)

## Algunos métodos para manipular

- **Pop**: Remover el último elemento
- **Push**: Agregar un elemento al final
- **Peek**: Tomar el último elemento de la línea


# ****Queues****

En esta estructura insertamos elementos al final, el primero en ser insertado es primero que va a ser retirado, de ahí el nombre FIFO (First In – First Out), “Primero en entrar primero en salir”.

![https://i.ibb.co/mNSbKnB/queue.jpg](https://i.ibb.co/mNSbKnB/queue.jpg)

**Métodos para manipular**

- **Enqueue**: agrega elementos al final de la fila
- **Dequeue:** remueve el primer elemento de la fila
- **Peek:** toma el primer elemento de la fila