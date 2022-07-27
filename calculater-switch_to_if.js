if (numTwo) {
  switch (operator) {
    case '+':
      $result.value = parseInt(numOne) + parseInt(numTwo);
      break;
    case '-':
      $result.value = numOne - numTwo;
      break;
    case '*':
      $result.value = numOne * numTwo;
      break;
    case '/':
      $result.value = numOne / numTwo;
      break;
    default:
      break;
  }
} else {
  alert('숫자를 먼저 입력하세요.');
}





if(numTwo){
  if(operator === '+'){
    $result.value = parseInt(numOne) + parseInt(numTwo);
  }else if(operator === '-'){
    $result.value = parseInt(numOne) - parseInt(numTwo);
  }else if(operator === '*'){
    $result.value = parseInt(numOne) * parseInt(numTwo);
  }else if(operator === '/'){
    $result.value = parseInt(numOne) / parseInt(numTwo);
  }
}else{
  alert('숫자를 먼저 입력하시오');
}