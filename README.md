# Tecnomerce - Tienda Online de Videojuegos 🎮

Proyecto desarrollado para la **Evaluación Final Transversal (EFT)** de la asignatura **Desarrollo Frontend I (PFY2201)** en **Duoc UC**.

Consiste en una aplicación web interactiva de tipo *Single Page Application* (SPA) para la venta de videojuegos, construida con React 18, Vite, Bootstrap 5 y JavaScript moderno (ES6+).

---

## 🌐 Despliegue en Línea

El proyecto se encuentra publicado y accesible públicamente a través de **GitHub Pages**:

- **Sitio web en vivo:** [https://alex07091207.github.io/Tecnomerce-react/]
- **Repositorio de código:** [https://github.com/Alex07091207/Tecnomerce-react]

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructuración con etiquetas semánticas (`<main>`, `<section>`, `<nav>`, `<footer>`, `<header>`).
- **Bootstrap 5.3:** Sistema de rejilla responsiva (Grid y Flexbox) y componentes visuales (`Cards`, `Navbar`, `Alerts`, `Badges`, `Forms`).
- **JavaScript (ES6+):** Métodos funcionales de arrays (`map`, `filter`, `some`, `reduce`), manejo de eventos del DOM y consumo asíncrono con `Fetch API`.
- **React 18 & Vite:** Modularización en componentes funcionales reutilizables, gestión de estado con `useState`, manejo de efectos secundarios con `useEffect` y renderizado condicional.
- **React Router DOM (v7):** Enrutamiento declarativo del lado del cliente para navegación fluida sin recargas de página.

---

## 📁 Estructura del Proyecto

```text
Tecnomerce-react/
├── public/
│   ├── assets/img/          # Recursos multimedia e imágenes de productos
│   ├── data/
│   │   └── productos.json   # Datos externos del catálogo (JSON)
│   └── favicon.svg          # Ícono del sitio
├── src/
│   ├── components/          # Componentes modulares reutilizables
│   │   ├── Navbar.jsx       # Barra de navegación con contador de carrito
│   │   ├── Footer.jsx       # Pie de página institucional
│   │   └── ShoppingCart.jsx # Carrito de compras y cálculo de totales
│   ├── pages/               # Páginas de navegación
│   │   ├── Home.jsx         # Página de inicio y bienvenida
│   │   ├── Productos.jsx    # Catálogo dinámico y filtrado por categoría
│   │   └── Contacto.jsx     # Formulario con validación en tiempo real
│   ├── App.jsx              # Componente principal, rutas y estado global
│   └── main.jsx             # Punto de entrada y carga global de estilos
├── index.html               # Estructura HTML5 base
├── package.json             # Dependencias y scripts de npm
├── vite.config.js           # Configuración de compilación y base path
└── README.md                # Documentación oficial del proyecto
```

---

## ⚙️ Instrucciones de Instalación

Sigue estos pasos para clonar y preparar el entorno de desarrollo en tu computadora local:

### 1. Clonar el repositorio

Abre una terminal y clona el proyecto desde GitHub:

```bash
git clone https://github.com/Alex07091207/Tecnomerce-react.git
```

### 2. Entrar en la carpeta del proyecto

```bash
cd Tecnomerce-react
```

### 3. Instalar las dependencias

Descarga los paquetes necesarios definidos en `package.json` (React, Bootstrap, React Router, Vite, etc.):

```bash
npm install
```

---

## 🚀 Instrucciones de Uso y Ejecución

Una vez instaladas las dependencias, dispones de los siguientes scripts de ejecución:

### Ejecutar en modo desarrollo

Inicia el servidor local de pruebas con recarga rápida (Hot Module Replacement):

```bash
npm run dev
```

Abre en tu navegador la URL que indique la consola (habitualmente `http://localhost:5173/Tecnomerce-react/`).

### Compilar para producción

Genera la versión optimizada y minificada dentro de la carpeta `dist/`:

```bash
npm run build
```

### Previsualizar la versión de producción localmente

Permite probar la carpeta `dist/` en un servidor local antes de publicar:

```bash
npm run preview
```

### Desplegar a GitHub Pages

Compila el proyecto y actualiza automáticamente la rama `gh-pages`:

```bash
npm run deploy
```

---

## ✨ Funcionalidades Principales

- **Catálogo Dinámico (`useEffect` + `useState`):** Carga los productos desde `public/data/productos.json` de manera asíncrona al montar la página.

- **Filtrado por Categorías:** Permite filtrar instantáneamente los títulos por categorías (Todos, Acción, Aventura, Deportes, Mundo Abierto, Consolas) usando lógica reactiva en JavaScript.

- **Carrito de Compras Interactivo:**
  - Suma y resta de artículos mediante identificadores únicos (`uniqueId`).
  - Cálculo reactivo del precio total mediante la función `.reduce()`.
  - Renderizado condicional para mostrar un mensaje informativo cuando el carrito está vacío.
  - Alternancia del botón de compra en el catálogo a "En el carrito" (deshabilitado) si el producto ya fue seleccionado.

- **Formulario de Contacto Validado:**
  - Validación de campos obligatorios (nombre, correo y mensaje).
  - Validación de formato de correo electrónico mediante expresiones regulares.
  - Retroalimentación mediante alertas de Bootstrap (rojo para errores, verde para envío exitoso).

- **Diseño Responsivo:** Adaptado para visualizarse correctamente en computadores de escritorio, tabletas y teléfonos móviles.

---

## 👤 Autor

**Estudiante:** Alexander Díaz Hernández
**Curso:** Desarrollo Frontend I (PFY2201)
**Institución:** Duoc UC