
function addTodo(event) {

  console.log('todoStringField keyup!');

  //엔터키가 아니면 함수 중지
  if (event.keyCode !== 13 || todoStringField.val() === "") {
    event.stopPropagation(); //이벤트 전파중지
    return;
  }

  var newTodo = todoStringField.val();
  todoStringField.val("");

  console.log('새로운 todo:', newTodo);

  listDom.append(tmpl(todoTemplateHtml, {todo: newTodo}));

  saveData();
}
function checkDelete(event) {

  //if(!confirm('정말 삭제하나용? ')){
  //  return;
  //}


  if(event.target.className !== 'delete') {
    return;
  }
  var deleteBtn = event.target;

  //버튼의 상위엘리먼트 <li> 제거
  deleteBtn.closest('li').remove();

  saveData();
}

function loadData() {
  console.log('loadData()');
  return localStorage.getItem('todoHtml');
}
function saveData() {
  console.log('saveData()');
  localStorage.setItem('todoHtml', listDom.html);
}