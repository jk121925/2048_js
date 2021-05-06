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


function leftBeforeMove(uppArr){
  var move_test =0;
    for(var i =0; i<uppArr.length; i++){
      var cnt =0;
      var jnt =0;  
        //combination
        while(cnt !==uppArr.length-1){
            jnt = cnt+1;
            if(uppArr[i][cnt] ===0){
                cnt ++;
                continue;
            }
            else if(uppArr[i][cnt] !==0){       
                while(jnt !==uppArr.length){    
                    if(uppArr[i][jnt]=== 0){
                        jnt ++;
                        continue;
                    }
                    else if(uppArr[i][cnt] !== uppArr[i][jnt]){
                      break;
                    }
                    else if (uppArr[i][cnt] === uppArr[i][jnt]){
                      var temp  = uppArr[i][cnt]*2;
                      uppArr[i][cnt] = temp ;
                      uppArr[i][jnt] =0;
                      move_test=1;
                      break;
                    }
                }
                cnt++;
            }
        }
    }
    console.log(move_test);
    return [uppArr,move_test];
}

function rightBeforeMove(uppArr){
  var move_test =0;
    for(var i =0; i<uppArr.length; i++){
      var cnt = 3;
      var jnt = 3;
        //combination
        while(cnt !==0){
            jnt = cnt-1;
            if(uppArr[i][cnt] ===0){
                cnt --;
                continue;
            }
            else if(uppArr[i][cnt] !==0){       
                while(jnt !==-1){    
                    if(uppArr[i][jnt]=== 0){
                        jnt --;
                        continue;
                    }
                    else if(uppArr[i][cnt] !== uppArr[i][jnt]){
                      break;
                    }
                    else if (uppArr[i][cnt] === uppArr[i][jnt]){
                      uppArr[i][cnt] = uppArr[i][cnt] * 2 ;
                      uppArr[i][jnt] =0;
                      move_test=1;
                      break;
                    }
                }
                cnt--;
            }
        }
    }
    return [uppArr,move_test];
}

function upBeforeMove(doubleList){
  swapRowColumn(doubleList);
  var temp_arr = leftBeforeMove(doubleList);
  var move_test = temp_arr[1];
  var newArr = swapRowColumn(temp_arr[0]);
  return [newArr,move_test];
}

function downBeforeMove(doubleList){
  swapRowColumn(doubleList);
  var temp_arr = rightBeforeMove(doubleList);
  var move_test = temp_arr[1];
  var newArr = swapRowColumn(temp_arr[0]);
  return [newArr,move_test];
}

function leftMove(movingArr, moveTest){
  //check move test
  var move_test = 0;
  if(moveTest ===1){
    move_test =1;
  }
  else{
    move_test =0;
  }
  for(var i=0; i<movingArr.length; i++){
    for(var j=0; j<movingArr.length; j++){
      if(movingArr[i][j] ===0){
        continue;
      }
      else if(movingArr[i][j] !==0){
        var cnt =j-1;
        while(cnt !==-1){
          if(movingArr[i][cnt]===0){
            movingArr[i][cnt] = movingArr[i][cnt+1];
            movingArr[i][cnt+1]=0;
            move_test =1;
            cnt--;
            continue;
          }
          else if( movingArr[i][cnt]!==0){
            break;
          }
        }
      }
    }
  }
  return [movingArr,move_test];
}


function rightMove(movingArr,moveTest){
  //check move test
  var move_test = 0;
  if(moveTest ===1){
    move_test =1;
  }
  else{
    move_test =0;
  }
  for(var i=0; i<movingArr.length; i++){
    for(var j=movingArr.length-1; j>-1; j--){
      if(movingArr[i][j] ===0){
        continue;
      }
      else if(movingArr[i][j] !==0){
        var cnt =j+1;
        while(cnt !==movingArr.length){
          if(movingArr[i][cnt]===0){
            movingArr[i][cnt] = movingArr[i][cnt-1];
            movingArr[i][cnt-1]=0;
            move_test =1;
            cnt++;
            continue;
          }
          else if( movingArr[i][cnt]!==0){
            break;
          }
        }
      }
    }
  }
  return [movingArr,move_test];
}


function upMove(movingArr, moveTest){
  swapRowColumn(movingArr);
  var temp_arr = leftMove(movingArr);
  var move_test =0;
  if(moveTest ===1 || temp_arr[1] ===1){
    move_test = 1;
  }
  console.log(move_test);
  var newArr = swapRowColumn(temp_arr[0]);
  return [newArr,move_test];
}

function downMove(movingArr, moveTest){
  swapRowColumn(movingArr);
  var temp_arr = rightMove(movingArr);
  var move_test =0;
  if(moveTest ===1 || temp_arr[1] ===1){
    move_test = 1;
  }
  var newArr = swapRowColumn(temp_arr[0]);
  return [newArr,move_test];
}


//Add other num
// check cnt cause they have few box that are add
function addOtherNum(addArr, addNum){

  for(var i = 0; i<addNum; i++){
    var cnt =0;
    while(1){
      row = Math.floor((Math.random()*3));
      columne = Math.floor((Math.random()*3));
      if(addArr[row][columne] ===0){
        addArr[row][columne] =2;
        break;
      }

      if(cnt ===30){
      alert("after 30");
      }
    }
  }
return addArr;
}

//rendering html using javascript
function renderingArr(renderArr){
  for(var i = 0; i<renderArr.length; i++){
    for(var j = 0; j<renderArr.length; j++){
      var a = document.getElementsByClassName("box_"+i);
      a.item(j).innerText = renderArr[i][j];
    }
  }
}

function setColorArr(ColorArr){
  for(var i =0; i<ColorArr.length; i++){
    for(var j=0; j<ColorArr.length; j++){
      var test = document.getElementsByClassName("box_"+i).item(j);
      if(test.innerText === '0'){
        test.style.backgroundColor = "#FFB6C1";
      }
      else if(test.innerText === '2'){
        test.style.backgroundColor = "#FF69B4";
      }
      else if(test.innerText === '4'){
        test.style.backgroundColor = "#DB7093";
      }
      else if(test.innerText === '8'){
        test.style.backgroundColor = "#FF00FF";
      }
      else if(test.innerText === '16'){
        test.style.backgroundColor = "#BA55D3";
      }
      else if(test.innerText === '32'){
        test.style.backgroundColor = "#9400D3";
      }
      else if(test.innerText === '64'){
        test.style.backgroundColor = "#8A2BE2";
      }
      else if(test.innerText === '128'){
        test.style.backgroundColor = "#E6E6FA";
      }
      else if(test.innerText === '256'){
        test.style.backgroundColor = "#483D8B";
      }
      else if(test.innerText === '512'){
        test.style.backgroundColor = "#6A5ACD";
      }
      else if(test.innerText === '1024'){
        test.style.backgroundColor = "#778899";
      }
      else if(test.innerText === '2048'){
        test.style.backgroundColor = "#2F4F4F";
      }
    }
  }
}




// keyboard event and run 2048
window.addEventListener('keydown', (e) => {
if(e.keyCode === 37){
    var newArr = leftBeforeMove(arr);
    var tempArr = leftMove(newArr[0],newArr[1]);
    if(tempArr[1] ===1){
      arr =addOtherNum(tempArr[0],1)
    }
    else {
      arr = tempArr[0];
    }
    console.log(tempArr);
    renderingArr(arr);
    setColorArr(arr);
  }
  else if(e.keyCode === 38){
    var newArr = upBeforeMove(arr);
    var tempArr = upMove(newArr[0],newArr[1]);
    if(tempArr[1] ===1){
      arr =addOtherNum(tempArr[0],1)
    }
    else {
      arr = tempArr[0];
    }
    console.log(tempArr);
    renderingArr(arr);
    setColorArr(arr);
  }
  else if(e.keyCode === 39){
    var newArr = rightBeforeMove(arr);
    var tempArr = rightMove(newArr[0],newArr[1]);
    if(tempArr[1] ===1){
      arr =addOtherNum(tempArr[0],1)
    }
    else {
      arr = tempArr[0];
    }
    console.log(tempArr);
    renderingArr(arr);
    setColorArr(arr);
  }

  else if(e.keyCode === 40){
    var newArr = downBeforeMove(arr);
    var tempArr = downMove(newArr[0],newArr[1]);
    if(tempArr[1] ===1){
      arr =addOtherNum(tempArr[0],1)
    }
    else {
      arr = tempArr[0];
    }
    console.log(tempArr);
    renderingArr(arr);
    setColorArr(arr);  }
}, false);



