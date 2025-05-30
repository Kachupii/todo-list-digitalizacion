# ToDo List con Firebase Firestore


## Descripción básica de la app

Aplicación sencilla de lista de tareas que permite añadir, listar y eliminar tareas en tiempo real, utilizando Firebase Firestore como base de datos cloud.
---

## Dependencias

- Firebase SDK (Firestore) v11.8.1 importado desde CDN.
- Navegador moderno con soporte para módulos ES6.
- Servidor local para servir el archivo HTML (puede ser live-server, VSCode Live Server, o cualquier servidor estático).

---

## Como se ejecuta en local

- Navegador
- Abrir el archivo PruebaLocal.html que hay fuera de la carpeta del proyecto
  
---

## Despliegue
- Para desplegar la app en Firebase Hosting, primero configura Firebase con firebase init seleccionando Hosting, luego construye o prepara tus archivos (en este caso, solo el HTML está listo), y finalmente ejecuta firebase deploy para subir y publicar la app en la URL proporcionada por Firebase.


## Tecnologías usadas

- **Firebase Firestore:** para almacenamiento y sincronización en tiempo real.  
- **JavaScript (ES6 modules):** para la lógica en el navegador.  
- **HTML y CSS:** para la interfaz visual.  
- **Servidor local:** para servir la app (VSCode Live Server, http-server, etc.).

---

## Estructura de la base de datos

La colección `tareas` contiene documentos con la siguiente estructura:

| Campo       | Tipo      | Descripción                    |
|-------------|-----------|-------------------------------|
| titulo      | string    | Texto con la descripción tarea|
| completada  | boolean   | Estado si está completada o no|
| creada      | timestamp | Fecha de creación de la tarea |

---

## Configuración y conexión a Firebase

Configura tu proyecto Firebase y copia tus credenciales en el archivo HTML o JS:

```js
const firebaseConfig = { 
apiKey: "AIzaSyD0lk5LoW2Dzjb3jGU8Epp7RhdCvv_No-U", 
authDomain: "todo-list-8f9bc.firebaseapp.com", 
projectId: "todo-list-8f9bc", 
storageBucket: "todo-list-8f9bc.appspot.com", 
messagingSenderId: "386678819736", 
appId: "1:386678819736:web:5786110af03e9d7fe039ed" };




