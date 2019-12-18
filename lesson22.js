
// 数字半角関数
function toHalfWidth(strVal){
    var halfVal = strVal.replace(/[！-～]/g,
    function( tmpStr ) {
        return String.fromCharCode( tmpStr.charCodeAt(0) - 0xFEE0 );
    });
    return halfVal;
}

// フォーム１
function result(){
    var all = 0;
    for(var i = 0; i <=4; i++){
      var price = document.getElementsByClassName("aaa")[i];
      var num = document.getElementsByClassName("bbb")[i];
      var sum = document.getElementsByClassName("ccc")[i];
      price.value = toHalfWidth(price.value);

      if(price.value > 0){
            sum.value = Number(price.value) * Number(num.value);
        }else{
            console.log(sum.value = 0);
        }

        all += Number(sum.value);
      }
      var field_total = document.getElementsByClassName("field_total")[0];
      field_total.value = all;
    }

// フォーム２
    function result2(){
        var all = 0;
        for(var i = 5; i <=9; i++){
          var price = document.getElementsByClassName("aaa")[i];
          var num = document.getElementsByClassName("bbb")[i];
          var sum = document.getElementsByClassName("ccc")[i];
          price.value = toHalfWidth(price.value);

          if(price.value > 0){
                sum.value = Number(price.value) * Number(num.value);
            }else{
                console.log(sum.value = 0);
            }

            all += Number(sum.value);
          }
          var field_total = document.getElementsByClassName("field_total")[1];
          field_total.value = all;
        }

// フォーム３
    function result3(){
        var all = 0;
        for(var i = 10; i <=14; i++){
          var price = document.getElementsByClassName("aaa")[i];
          var num = document.getElementsByClassName("bbb")[i];
          var sum = document.getElementsByClassName("ccc")[i];
          price.value = toHalfWidth(price.value);

          if(price.value > 0){
                sum.value = Number(price.value) * Number(num.value);
            }else{
                console.log(sum.value = 0);
            }

            all += Number(sum.value);
          }
          var field_total = document.getElementsByClassName("field_total")[2];
          field_total.value = all;
        }


// フォーム合計４
        function keisan(){
            var all = 0;
            for(var i = 0; i <=14; i++){
              var price = document.getElementsByClassName("aaa")[i];
              var num = document.getElementsByClassName("bbb")[i];
              var sum = document.getElementsByClassName("ccc")[i];
              price.value = toHalfWidth(price.value);
              if(price.value > 0){
                    sum.value = Number(price.value) * Number(num.value);
                }else{
                    console.log(sum.value = 0);
                }
                all += Number(sum.value);
              }
              var field_total = document.getElementsByClassName("field_total")[3];
              field_total.value = all;
            }


// できなかった関数（レッスンの時に聞く）
   //  function keisan(){
   //    var all = 0;
   //    for(var i = 0; i <=2; i++){
   //    var field_total = document.getElementsByClassName("field_total")[i];
   //    // field_total1.value =result1(field_total.value)
   //    // field_total2.value =result2(field_total.value)
   //    // field_total3.value =result3(field_total.value)
   //    all += Number(field_total.value);
   //  }
   //   var total = document.getElementsByClassName("total");
   //   total.value =  all;
   // }

// できなかった関数（レッスンの時に聞く）
   // function keisan(){
   //   // for(var i = 0; i <=2; i++){
   //   var field_total1 = document.getElementsByClassName("field_total")[0];
   //   var field_total2 = document.getElementsByClassName("field_total")[1];
   //   var field_total3 = document.getElementsByClassName("field_total")[2];
   //   var total = document.getElementsByClassName("total");
   //   var field_total1 = result1(field_total.value);
   //   var field_total2 = result2(field_total.value);
   //   var field_total3 = =result3(field_total.value);
   //   total.value =Number(field_total1.value) + Number(field_total2.value)  + Number(field_total3.value) ;
   // }
