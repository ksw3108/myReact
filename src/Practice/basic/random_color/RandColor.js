import { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class RandColor extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div className="main">
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          {/*ErrorBoundary 내부 컴포넌트에서 에러 발생을 캐치하면 적용되는 컴포넌트 */}
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default RandColor;
