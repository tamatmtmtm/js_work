'use strict'

$(function(){

  $('.form__button').click(function(e){
    e.preventDefault();   
    let selectValue = $('select').val();
    let inputValue = $('input').val();

    if(selectValue, inputValue != null){
      // 購入金額を取得
      let priceValue = $('.js-option:selected').val();
  
      // 有効期限の取得
      let inputDate = $('.validated-date').val();
      let validatedDate = new Date(inputDate);
  
      //1年間での使用不可日数
      let disabledYear = $('.js-disabled-year').val();
  
      //2020年2月29日以降の年間パスポート使用不可日数
      let disabledDate = $('.js-disabled-date').val();
  
      //2020年2月29日以降の年パス有効期間
      let specificDate = new Date("2020/2/29"); //2020年2月29日を取得
      let validatedPart = Math.floor((validatedDate - specificDate) / 86400000);
     
      //計算結果
      let calculationResult = (priceValue / (366 - disabledYear)) * (validatedPart - disabledDate);

      let numRound = Math.round(calculationResult);
      let resultValue = "";
      
      if(numRound){
        let num = String(numRound).replace(/(\d)(?=(\d\d\d)+$)/g, "$1,");
        resultValue = num;

        if(resultValue != NaN){
          $('.result_part').html(resultValue);
        }
      }
    }
  });
});