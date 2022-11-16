import Counter from '../component/Counter';
//import { connect } from 'react-redux';
import { increase, decrease } from '../module/counter';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// export default connect((state) => ({ number: state.counter.number }), {
//   //액션 생성 함수로 이루어진 객체 형태로 사용
//   increase,
//   decrease,
// })(CounterContainer);
export default CounterContainer;
