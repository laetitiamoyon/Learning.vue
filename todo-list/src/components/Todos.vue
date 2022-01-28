<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todo list</h1>
      <input type="text" class="new-todo" placeholder="Ajouter une tâche" v-model="newTodo" @keyup.enter="addTodo"/>
    </header>
    <div class="main">
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed, editing: todo === editing}">
          <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle"/>
            <label @dblclick="editTodo(todo)"> {{ todo.name }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit"/>
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="todos.length > 0">
      <span class="todo-count">{{ todoCount }} tâche à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Réalisées</a></li>
      </ul>
    </footer>
  </section> 
</template>

<script>

export default{
  data () {
    return {
      todos: [{ name: "Faire les courses", completed: false }],
      newTodo: "",
      filter: 'all',
      editing: null
    }
  },
  methods: {
    addTodo () {
      this.todos.push({ completed: false, name: this.newTodo })
      this.newTodo = ""
    },
    removeTodo (todo) { this.todos = this.todos.filter(t => t !== todo) },
    editTodo (todo) { this.editing = todo },
    doneEdit () {this.editing = null}
  }, 
  computed: {
    todoCount () { return this.todos.filter(todo => !todo.completed).length },
    filteredTodos () {
      return this.todos.filter(todo => 
        this.filter === "todo" ? !todo.completed :
        this.filter === "done" ? todo.completed :
        true
      )
    }
  }
}
</script>

<style src="./todos.css"></style>