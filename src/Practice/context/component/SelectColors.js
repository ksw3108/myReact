import ColorContext, { ColorConsumer } from '../context/color';
import { Component } from 'react';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetSubColor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <ColorConsumer>
          {({ actions }) => (
            <div style={{ display: 'flex' }}>
              {colors.map((color) => (
                <div
                  key={color}
                  style={{
                    background: color,
                    width: '24px',
                    height: '24px',
                    cusror: 'pointer',
                  }}
                  onClick={() => this.handleSetColor(color)}
                  onContextMenu={(e) => {
                    e.preventDefault(); //마우스 오른쪽 버튼 클릭시 메뉴가 뜨는것을 무시
                    this.handleSetSubColor(color);
                  }}
                />
              ))}
            </div>
          )}
        </ColorConsumer>
        <hr />
      </div>
    );
  }
}
export default SelectColors;
