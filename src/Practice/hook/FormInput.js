import { useState, Component, useReducer, useRef } from 'react';

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const FormInput = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    id: '',
    pass: '',
    jumin1: '',
    jumin2: '',
    phone1: '',
    phone2: '',
    phone3: '',
  });
  //const { id, pass, jumin1, jumin2, phone1, phone2, phone3 } = useRef([]);
  const inputRef = useRef([]);
  const onChange = (e) => {
    dispatch(e.target);
  };
  const onClick = (e) => {
    alert(
      'id : ' +
        state.id +
        'pass : ' +
        state.pass +
        ' jumin : ' +
        state.jumin1 +
        '-' +
        state.jumin2 +
        'phone : ' +
        state.phone1 +
        state.phone2 +
        state.phone3,
    );
    dispatch(e.target);
  };
  const moveToNextFocus = (e) => {
    //console.log("asdfasfa");
    if (e.key === 'Enter') {
      if (e.target.name === 'id') {
        inputRef.current[1].focus();
      }
    }
  };
  return (
    <div className="main">
      <form name="input_form" action="" method="get">
        <table border="1" width="700" align="center">
          <tbody>
            <tr>
              <td id="left">아이디</td>
              <td id="right">
                <input
                  ref={(el) => (inputRef.current[0] = el)}
                  type="text"
                  name="id"
                  id="yourid"
                  placeholder="(최소6~최대10, 숫자와 알파벳만 사용)"
                  min="6"
                  max="10"
                  size="30"
                  required
                  onChange={onChange}
                  onKeyPress={moveToNextFocus}
                />
              </td>
            </tr>
            <tr>
              <td id="left">비밀번호</td>
              <td id="right">
                <input
                  ref={(el) => (inputRef.current[1] = el)}
                  type="password"
                  name="pass"
                  id="pass"
                  min="6"
                  max="10"
                  required
                  onChange={onChange}
                  autoComplete="new-password
                  " /* 비밀번호의 자동완성을 막는 옵션 */
                />
                (최소6~최대10, 숫자와 알파벳만 사용)
              </td>
            </tr>

            <tr>
              <td id="left">주민번호</td>
              <td id="right">
                <input
                  type="text"
                  name="jumin1"
                  id="uid_front"
                  min="6"
                  size="7"
                  required
                  onChange={onChange}
                />
                -
                <input
                  type="text"
                  name="jumin2"
                  id="uid_back"
                  min="7"
                  size="7"
                  required
                  onChange={onChange}
                />
              </td>
            </tr>

            <tr>
              <td id="left">전화번호</td>
              <td id="right">
                <input
                  type="text"
                  name="phone1"
                  id="phone_first"
                  max="3"
                  size="4"
                  onChange={onChange}
                />
                -
                <input
                  type="text"
                  name="phone2"
                  id="phone_mid"
                  max="4"
                  size="4"
                  onChange={onChange}
                />
                -
                <input
                  type="text"
                  name="phone3"
                  id="phone_last"
                  max="4"
                  size="4"
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  type="button"
                  id="submit"
                  value="입력"
                  onClick={onClick}
                />
                <input type="reset" value="취소" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default FormInput;
