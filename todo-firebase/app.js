import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasksRef = collection(db, "tasks");

// Añadir tarea
window.addTask = async () => {
  const task = taskInput.value.trim();
  if (task) {
    await addDoc(tasksRef, { text: task });
    taskInput.value = "";
  }
};

// Escuchar cambios en tiempo real
onSnapshot(tasksRef, (snapshot) => {
  taskList.innerHTML = "";
  snapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().text;

    const span = document.createElement("span");
    span.textContent = "❌";
    span.onclick = () => deleteDoc(doc.ref);

    li.appendChild(span);
    taskList.appendChild(li);
  });
});
