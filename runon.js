  //make array for 4*4
  var arr = new Array(4);
  for(var i=0; i<arr.length; i++){
    arr[i] = new Array(4);
  }

  for(var i=0; i<arr.length; i++){
    for(var j = 0; j< arr[i].length; j++){
      arr[i][j] =0;
    }
  }
  // add initial number
  const initialCount = 2;
  for(var i = 0; i<initialCount; i++){
      row = Math.floor((Math.random()*2 +1));
      columne = Math.floor((Math.random()*2 +1));
      if(arr[row][columne] === 0){
          arr[row][columne] = 2;
      }
      else
      {
          arr[row-1][columne+1] = 2;
      }
    }
  
// keyboar enter

//keyboardenter after algorithm


function swapRowColumn(swapArr){
  for(i =0; i<swapArr.length; i++){
    for(j =i; j<swapArr.length; j++){
      [swapArr[i][j], swapArr[j][i]] = [swapArr[j][i],swapArr[i][j]];
    }
  }
  return swapArr;
}

function right_move(uppArr){
  var cnt = 0;
  var move_test =0;
  for(var i =0; i<uppArr.length;i++){
    for(var j = 2; j!==-1;j--){
      cnt =j;
      if(uppArr[i][j] ===0){
      continue;
      }
      else if(uppArr[i][j] !==0){

        while(cnt !== uppArr.length-1){
          if(uppArr[i][cnt] !== uppArr[i][cnt+1]){
            if(uppArr[i][cnt+1] ===0){
              uppArr[i][cnt+1] = uppArr[i][cnt];
              uppArr[i][cnt] =0;
              cnt ++;
              move_test =1;
            }
            else if(uppArr[i][cnt+1] !==0){
              cnt ++;
            }
          }
          else  if(uppArr[i][cnt] === uppArr[i][cnt+1]){
            uppArr[i][cnt+1]*=2;
            uppArr[i][cnt] =0;
            cnt++;
            move_test =1;
          }
        }
      }
    }
  }
return [uppArr,move_test];
}

function left_move(uppArr){
  var cnt = 0;
  var move_test =0;
  for(var i =0; i<uppArr.length;i++){
    for(var j = 1; j!==4;j++){
      cnt =j;
      if(uppArr[i][j] ===0){
      continue;
      }
      else if(uppArr[i][j] !==0){

        while(cnt !== 0){
          if(uppArr[i][cnt] !== uppArr[i][cnt-1]){
            if(uppArr[i][cnt-1] ===0){
              uppArr[i][cnt-1] = uppArr[i][cnt];
              uppArr[i][cnt] =0;
              cnt --;
              move_test =1;
            }
            else if(uppArr[i][cnt-1] !==0){
              cnt --;
            }
          }
          else  if(uppArr[i][cnt] === uppArr[i][cnt-1]){
            uppArr[i][cnt-1]*=2;
            uppArr[i][cnt] =0;
            cnt--;
            move_test=1;
          }
        }
      }
    }
  }
return [uppArr,move_test];
}

function upArrow(doubleList){
  swapRowColumn(doubleList);
  var temp_arr = left_move(doubleList);
  swapRowColumn(temp_arr[0]);
  return [doubleList,temp_arr[1]];
}

function downArrow(doubleList){
  swapRowColumn(doubleList);
  var temp_arr = right_move(doubleList);
  swapRowColumn(temp_arr[0]);
  return [doubleList,temp_arr[1]];
}

//set double array function n*n
function setDoubleArray(length){
  var result = new Array(length);
  for(var i=0; i<result.length; i++){
    result[i] = new Array(length);
  }

  for(var i=0; i<result.length; i++){
    for(var j = 0; j< result[i].length; j++){
      result[i][j] =0;
    }
  }
  return result;
}

//Add other num
function addOtherNum(addArr, addNum){

  for(var i = 0; i<addNum; i++){
    while(1){
      row = Math.floor((Math.random()*3));
      columne = Math.floor((Math.random()*3));
      if(addArr[row][columne] ===0){
        addArr[row][columne] =2;
        break;
      }
      else
      continue;
    }
  }
  return addArr;
}



// keyboard event and run 2048
window.addEventListener('keydown', (e) => {
if(e.keyCode === 37){
    var newArr = left_move(arr);
    console.log(newArr[1]);
    if(newArr[1] ===1){
      arr = addOtherNum(newArr[0],Math.floor((Math.random()*3)+1));
    }

  }
  else if(e.keyCode === 38){
    var newArr = upArrow(arr);
    console.log(newArr[1]);
    if(newArr[1]===1){
      arr = addOtherNum(newArr[0],Math.floor((Math.random()*3)+1));
    }

  }
  else if(e.keyCode === 39){
    var newArr = right_move(arr);
    console.log(newArr[1]);
    if(newArr[1]===1){
      arr = addOtherNum(newArr[0],Math.floor((Math.random()*3)+1));
    }

  }
  else if(e.keyCode === 40){
    var newArr = downArrow(arr);
    console.log(newArr[1]);
    if(newArr[1]===1){
      arr = addOtherNum(newArr[0],Math.floor((Math.random()*3)+1));
    }
    
  }
  console.log(arr);
}, false);