import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders the initial todo items", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
