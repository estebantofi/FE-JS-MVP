# PokéCartas

Este proyecto es una aplicación web desarrollada como parte de un trabajo para un curso de Frontend con JavaScript. El sitio simula una empresa reconocida dedicada a la comercialización de cartas Pokémon, con clientes nacionales e internacionales y envíos a todo el mundo.

## Estructura del proyecto

```
FE-JS-MVP/
│
├── index.html         # Página principal (Inicio) con historia, misión y visión
├── producto.html      # Sección PokéCartas: muestra cartas Pokémon desde la API
├── contacto.html      # Página de contacto
├── resenas.html       # Página de reseñas de clientes en cuadrícula
├── css/
│   └── styles.css     # Hoja de estilos principal
├── img/
│   ├── 1.png          # Imagen de producto 1
│   ├── 2.png          # Imagen de producto 2
│   ├── 3.png          # Imagen de producto 3
│   └── 4.jpg          # Imagen de fondo general
├── env.js             # Variables de entorno (Coloca tu API KEY)
└── README.md          # Este archivo
```

## Descripción de las páginas

- **Inicio:** Presentación de la empresa, historia, misión y visión. Incluye un mini menú lateral flotante para navegación interna.
- **PokéCartas:** Muestra cartas Pokémon obtenidas dinámicamente desde la API oficial, con nombre e imagen.
- **Contacto:** Información de contacto y ubicación.
- **Reseñas:** Opiniones de clientes simuladas en formato de tarjetas.

## Proyecto en línea

Puedes ver y probar la aplicación funcionando en GitHub Pages en el siguiente enlace:  
👉 [https://estebantofi.github.io/FE-JS-MVP/](https://estebantofi.github.io/FE-JS-MVP/)

## Cómo usar

1. Clona o descarga este repositorio.
2. En `env.js` coloca tu API KEY de https://dev.pokemontcg.io/ en la variable `API_KEY_POKEMON`.

## Notas

- Para ver las cartas Pokémon en la sección PokéCartas, es necesario tener una API KEY válida.

## Créditos

Desarrollado por Esteban para el curso de Frontend con JavaScript.

---