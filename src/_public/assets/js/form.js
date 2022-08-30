const btnSubmit = document.getElementById('c-btnsubmit');
  // const inputEles = document.querySelectorAll('.c-form__item');
  // Array.from(inputEles).map((ele) =>
  // ele.classList.remove('success', 'loi')
// );
  btnSubmit.addEventListener('click',function (e){
    let isValid = checkValidate();
    if (isValid){
      alert('リクエストを送信しました');
    }
    else{
      e.preventDefault();
    }
  });
  // let input = document.querySelector('c-form__input');
  //let result = document.querySelector('small');

  const fullName = document.getElementById('is-fullName');
  const phoneNumber = document.getElementById('is-phoneNumber');
  const email = document.getElementById('is-email');
  const request = document.getElementById('is-request');
  fullName.oninput = function () {
    console.log(fullName.value);
    if(fullName.value != ''){
      setSuccess(fullName)
    }
    else{
      setError(fullName, '『氏名』を入力してください。');
    }
  };
  phoneNumber.oninput = function () {
    console.log(phoneNumber.value);
    if(phoneNumber.value != ''){
      setSuccess(phoneNumber)
    }
    else{
      setError(phoneNumber , '『電話番号』を入力してください。');
    }
  };
  email.oninput = function () {
    console.log(email.value);
    if(email.value != ''){
      setSuccess(email)
    }
    else{
      setError(email, '『メールアドレス』を入力してください。');
    }
  };
  request.oninput = function () {
    console.log(request.value);
    if(request.value != ''){
      setSuccess(request)
    }
    else{
      setError(request, '『お問い合わせ内容』を入力してください。');
    }
  };
  function checkValidate() {
    let fullNameValue = fullName.value;
    let phoneNumberValue = phoneNumber.value;
    let emailValue = email.value;
    let requestValue = request.value;
    let isCheck = true;
    let error1 = document.getElementById('is-error1');
    
    if(fullNameValue == ''){
      setError(fullName, '『氏名』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(fullName);
    }
  
    if(phoneNumberValue == ''){
      setError(phoneNumber , '『電話番号』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(phoneNumber);
    }
  
    if(emailValue == ''){
      setError(email, '『メールアドレス』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(email);
    }
  
    if(requestValue == ''){
      setError(request, '『お問い合わせ内容』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(request);
    }
   
    console.log(isCheck)
    if(isCheck == false){
      error1.style.display = 'block';
    } else{
      error1.style.display = 'none';
    }
    return isCheck;
  }
  
  function setError(ele,message){
    let parentEle = ele.parentNode;
    // let error1 = document.getElementById('is-error1');
    let mbContact = document.getElementById('is-contact');
    let mtSubmit = document.getElementById('is-btnsub');
    // parentEle.classList.add('loi');
    parentEle.querySelector('small').innerText = message;
    // error1.style.display = 'block';
    parentEle.querySelector('small').classList.add('is-block');
    mbContact.classList.add('is-mbcontact');
    mtSubmit.classList.add('is-mtsubmit');
    console.log(parentEle.querySelector('small').innerText);
    console.log(parentEle);
  }
  
  function setSuccess(ele){
    // ele.parentNode.classList.add('success');
    ele.parentNode.querySelector('small').classList.remove('is-block');
  }