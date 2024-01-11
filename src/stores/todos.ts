import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type TodoModel } from '@/models/TodoModel';

export const useTodos = defineStore('todos', () => {
    const defaultTodos =
        [
            {
                id: 1,
                title: 'Do something nice for someone I care about',
                completed: true
            },
            {
                id: 2,
                title: 'Memorize the fifty states and their capitals',
                completed: false
            },
            {
                id: 3,
                title: 'Watch a classic movie',
                completed: true
            },
            {
                id: 4,
                title: 'Contribute code or a monetary donation to an open-source software project',
                completed: false
            },
            {
                id: 5,
                title: "Solve a Rubik's cube",
                completed: false
            },
            {
                id: 6,
                title: 'Bake pastries for me and neighbor',
                completed: false
            },
            {
                id: 7,
                title: 'Go see a Broadway production',
                completed: false
            },
            {
                id: 8,
                title: 'Write a thank you letter to an influential person in my life',
                completed: true
            },
            {
                id: 9,
                title: 'Invite some friends over for a game night',
                completed: false
            },
            {
                id: 10,
                title: 'Have a football scrimmage with some friends',
                completed: false
            },
        ];

    const todos = ref<Array<TodoModel>>(defaultTodos);
    const filter = ref<string>('all');
    const nextId = ref(todos.value.length);

    const completedTodos = computed(() => {
        return todos.value.filter((todo) => todo.completed);
    });
    const incompleteTodos = computed(() => {
        return todos.value.filter((todo) => !todo.completed);
    });

    const filteredTodos = computed(() => {
        if (filter.value === 'completed') {
            return completedTodos.value;
        } else if (filter.value === 'incomplete') {
            return incompleteTodos.value;
        }
        return todos.value;
    });

    function filterTodo(chosenFilter: string) {
        filter.value = chosenFilter;
    }

    const addTodo = (title: string) => {
        todos.value.push({ id: nextId.value++, title, completed: false });
    };

    const deleteTodo = (todo: Record<string, any>) => {
        const objIndex = todos.value.findIndex((obj) => obj.id === todo.id);
        todos.value.splice(objIndex, 1);
    };

    const markComplete = (todo: Record<string, any>) => {
        const objIndex = todos.value.findIndex((obj) => obj.id === todo.id);

        todos.value[objIndex].completed = !todos.value[objIndex].completed;
    };

    return { todos, filteredTodos, addTodo, filter, filterTodo, markComplete, deleteTodo };
});
