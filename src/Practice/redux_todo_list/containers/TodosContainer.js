import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../module/todos';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../component/Todos';
import { useCallback } from 'react';
import useActions from '../lib/useActions';
import React from 'react';
const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};
export default React.memo(TodosContainer);

//const dispatch = useDispatch();
//   const onChangeInput = useCallback(
//     (input) => dispatch(changeInput(input)),
//     [dispatch],
//   );
//   const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
//   const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
//   const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   { changeInput, insert, toggle, remove },
// )(TodosContainer);

// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove}
//     />
//   );
// };
// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   { changeInput, insert, toggle, remove },
// )(TodosContainer);
