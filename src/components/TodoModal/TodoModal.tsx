import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader';
import { getUser } from '../../api';
import { User } from '../../types/User';
import { Todo } from '../../types/Todo';

interface Props {
  todoId: number
  setTodoId: (currentTodoId: number | null) => void
  todos: Todo[]
}

export const TodoModal: React.FC<Props> = ({ todoId, setTodoId, todos }) => {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (todoId !== null) {
      setLoading(true);

      getUser(todoId)
        .then(setUser)
        .finally(() => setLoading(false));
    }
  }, [todoId]);

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {loading ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              {`Todo #${user?.id}`}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={() => setTodoId(null)}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {todos[todoId - 1].title}
            </p>

            <p className="block" data-cy="modal-user">
              {
                todos[todoId - 1].completed ? (
                  <strong className="has-text-success">Done</strong>
                ) : (
                  <strong className="has-text-danger">Planned</strong>
                )
              }

              {' by '}

              <a href={`mailto:${user?.email}`}>
                {user?.name}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
