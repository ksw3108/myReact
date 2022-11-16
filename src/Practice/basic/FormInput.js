import { useState } from 'react';
import { Component } from 'react';

//const FormInput = () => {
class FormInput extends Component {
  // const [form, setForm] = useState({
  //   id: "",
  //   pass1: "",
  //   pass2: "",
  //   jumin1: "",
  //   jumin2: "",
  //   phone1: "",
  //   phone2: "",
  //   phone3: "",
  // });

  // state = {
  //   id: "",
  //   pass1: "",
  //   pass2: "",
  //   jumin1: "",
  //   jumin2: "",
  //   phone1: "",
  //   phone2: "",
  //   phone3: "",
  // };
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.moveToNextFocus = this.moveToNextFocus.bind(this);
    this.state = {
      id: '',
      pass: '',
      jumin1: '',
      jumin2: '',
      phone1: '',
      phone2: '',
      phone3: '',
    };
  }

  // const { id, pass1, pass2, jumin1, jumin2, phone1, phone2, phone3 } = form;

  // onChange = (e) => {
  //this.state ={
  //    [e.target.name]: e.target.value,
  //}
  // };
  // const onClick = () => {
  //   alert("id : " + id + "pass : " + pass1 + " jumin : " + jumin1 + "-" + jumin2 + "phone : " + phone1 + phone2 + phone3);

  //   /*setForm({
  //     username: "",
  //     message: "",
  //   });*/
  // };
  onClick = () => {
    alert(
      'id : ' +
        this.state.id +
        'pass : ' +
        this.state.pass +
        ' jumin : ' +
        this.state.jumin1 +
        '-' +
        this.state.jumin2 +
        'phone : ' +
        this.state.phone1 +
        this.state.phone2 +
        this.state.phone3,
    );
  };
  moveToNextFocus(e) {
    //console.log("asdfasfa");
    if (e.key === 'Enter') {
      if (e.target.name == 'id') {
        this.pass.focus();
      }
    }
  }
  render() {
    return (
      <div>
        <form name="input_form" action="" method="get">
          <table border="1" width="700" align="center">
            <tbody>
              <tr>
                <td id="left">아이디</td>
                <td id="right">
                  <input
                    ref={(ref) => {
                      this.id = ref;
                    }}
                    type="text"
                    name="id"
                    id="yourid"
                    placeholder="(최소6~최대10, 숫자와 알파벳만 사용)"
                    min="6"
                    max="10"
                    size="30"
                    required
                    onChange={() => {
                      this.setState({ id: this.id.value });
                    }}
                    onKeyPress={this.moveToNextFocus}
                  />
                </td>
              </tr>
              <tr>
                <td id="left">비밀번호</td>
                <td id="right">
                  <input
                    ref={(ref) => {
                      this.pass = ref;
                    }}
                    type="password"
                    name="pass1"
                    id="pass"
                    min="6"
                    max="10"
                    required
                    onChange={() => {
                      this.setState({ pass: this.pass.value });
                    }}
                    autoComplete="new-password
                    " /* 비밀번호의 자동완성을 막는 옵션 */
                  />
                  (최소6~최대10, 숫자와 알파벳만 사용)
                </td>
              </tr>
              <tr>
                <td id="left">비밀번호 확인</td>
                <td id="right">
                  <input
                    type="password"
                    name="pass2"
                    id="pass2"
                    min="6"
                    max="10"
                    required
                    autoComplete="new-password
                    "
                  />
                  (최소6~최대10, 숫자와 알파벳만 사용)
                </td>
              </tr>
              <tr>
                <td id="left">주민번호</td>
                <td id="right">
                  <input
                    ref={(ref) => {
                      this.jumin1 = ref;
                    }}
                    type="text"
                    name="jumin1"
                    id="uid_front"
                    min="6"
                    size="7"
                    required
                    onChange={() => {
                      this.setState({ jumin1: this.jumin1.value });
                    }}
                  />
                  -
                  <input
                    ref={(ref) => {
                      this.jumin2 = ref;
                    }}
                    type="text"
                    name="jumin2"
                    id="uid_back"
                    min="7"
                    size="7"
                    required
                    onChange={() => {
                      this.setState({ jumin2: this.jumin2.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td id="left">성별</td>
                <td id="right">
                  <input type="radio" name="gender" id="gender1" value="m" />
                  <label htmlFor="gender1">남자</label>
                  <input type="radio" name="gender" id="gender2" value="w" />
                  <label htmlFor="gender2">여자</label>
                </td>
              </tr>
              <tr>
                <td id="left">전화번호</td>
                <td id="right">
                  <input
                    ref={(ref) => {
                      this.phone1 = ref;
                    }}
                    type="text"
                    name="phone1"
                    id="phone_first"
                    max="3"
                    size="4"
                    onChange={() => {
                      this.setState({ phone1: this.phone1.value });
                    }}
                  />
                  -
                  <input
                    ref={(ref) => {
                      this.phone2 = ref;
                    }}
                    type="text"
                    name="phone2"
                    id="phone_mid"
                    max="4"
                    size="4"
                    onChange={() => {
                      this.setState({ phone2: this.phone2.value });
                    }}
                  />
                  -
                  <input
                    ref={(ref) => {
                      this.phone3 = ref;
                    }}
                    type="text"
                    name="phone3"
                    id="phone_last"
                    max="4"
                    size="4"
                    onChange={() => {
                      this.setState({ phone3: this.phone3.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td id="left">이메일</td>
                <td id="right">
                  <input type="text" name="email" id="email" /> @
                  <select name="email_domain" id="email_domain">
                    <option value="nothing">메일주소선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="gmail.com">gmail.com</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td id="left">취미</td>
                <td id="right">
                  <input
                    type="checkbox"
                    name="hobby"
                    id="chk1"
                    value="climbing"
                  />{' '}
                  <label htmlFor="chk1">등산</label>
                  <input
                    type="checkbox"
                    name="hobby"
                    id="chk2"
                    value="read_book"
                  />{' '}
                  <label htmlFor="chk2">독서</label>
                  <input
                    type="checkbox"
                    name="hobby"
                    id="chk3"
                    value="ski"
                  />{' '}
                  <label htmlFor="chk3">스키</label>
                  <input
                    type="checkbox"
                    name="hobby"
                    id="chk4"
                    value="music"
                  />{' '}
                  <label htmlFor="chk4">음악</label>
                  <input
                    type="checkbox"
                    name="hobby"
                    id="chk5"
                    value="movie"
                  />{' '}
                  <label htmlFor="chk5">영화</label>
                </td>
              </tr>
              <tr>
                <td id="left">자기소개</td>
                <td id="right">
                  <textarea
                    name="tarea"
                    id="tarea"
                    cols="50"
                    rows="7"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <input
                    type="button"
                    id="submit"
                    value="입력"
                    onClick={this.onClick}
                  />
                  <input type="reset" value="취소" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
export default FormInput;
