import {belongsTo, Entity, model, property} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';

@model()
export class TodoListImage extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  // Ideally we would use Buffer type here, but
  // that is not supported yet.
  // see https://github.com/loopbackio/loopback-next/issues/1742
  value: string;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<TodoListImage>) {
    super(data);
  }
}

export interface TodoListImageRelations {
  // describe navigational properties here
  todoList?: TodoListWithRelations;
}

export type TodoListImageWithRelations = TodoListImage & TodoListImageRelations;