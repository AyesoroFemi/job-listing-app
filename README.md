# React + Vite

To start this react project: npm run dev
To start npx json-server src/listing.json


create a folder util 
inside the folder - api.js

<!-- const baseUrl = "http://localhost:8080/api/v1";

export const getJobs = async () => {
    try {
        const res = await fetch(`${baseUrl}/todos`);
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Failed to fetch todos:", error);
    }
};

export const createTodo = async (todo) => {
    try {
        const res = await fetch(`${baseUrl}/todos/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        });
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Failed to create todo:", error);
    }
};

export const updateTodo = async (todo) => {
    try {
        const res = await fetch(`${baseUrl}/todos/update/${todo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        });
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
    } catch (error) {
        console.error("Failed to update todo:", error);
    }
};

export const deleteTodo = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/todos/delete/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
    } catch (error) {
        console.error("Failed to delete todo:", error);
    }
}; -->