"use strict";
/*
 * El objetivo es hacer un TO DO LIST:
 *   vas a tener que agregarle tareas a distintas personas y
 *   configurar propiedades de esas tareas.
 *
 *    (\
 *    \'\
 *     \'\     __________
 *     / '|   ()_________)
 *     \ '/    \ ~~~~~~~~ \
 *      \       \ ~~~~~~   \
 *      ==).      \__________\
 *     (__)       ()__________)
 */

var tasks = {}; // acá vamos a guardar nuestras personas y tareas

var listaDePersonas = [];
var arrDePersonasConTareas = [];
var contadorDetareas = [];

module.exports = {
  reset: function () {
    tasks = {}; // esta función ya esta armada :D
    listaDePersonas = [];
    arrDePersonasConTareas = [];
    contadorDetareas = [];
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  
  listPeople: function () {
    // devuelve un arreglo de personas con tareas
    return listaDePersonas;
  },
  add: function (name, task) {
    // guarda una tarea para una persona en particular
    tasks[name] = task;
    tasks[name]["complete"] = false;
    
    arrDePersonasConTareas.push(tasks);
    contadorDetareas.push(name)

  if(listaDePersonas.indexOf(name) === -1){
      listaDePersonas.push(name)
    }
  },
  
  list: function (name) {
    let coincidencias = contadorDetareas.filter((nombre) => nombre === name)
    return coincidencias
  }

    
  
  
  
  // etc.
};
