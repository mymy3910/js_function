//プルダウン選択
document.getElementById("function_list").addEventListener('change',
    function(){
        //前回の実行結果削除
        const result_value = document.getElementById("result");
        result_value.innerText = '';

        //選択された関数に応じた注釈を表示
        const selected_value = document.getElementById("function_list").value;
        const notes = document.getElementById("notes");
        switch(selected_value){
            case 'concat': {
                notes.innerText = "配列の結合を行います。結合したい配列を引数に入力してください。" ;
                break;
            }
            case 'every': {
                notes.innerText = "ここでは引数が配列内要素よりすべて大きいかテストします。引数に数字を入力してください。";
                break;
            }
            case 'indexOf': {
                notes.innerText = "配列の要素の中から完全一致するものを検索します。検索したい値を引数に入力してください。";
                break;
            }
            case 'join': {
                notes.innerText = "配列の要素を順に連結して文字列を新たに作成します。連結したい値を引数に入力してください。";
                break;
            }
            case 'map': {
                notes.innerText = "ここでは「配列の要素×引数」を行います。掛けたい値を引数に入力してください。";
                break;
            }
            case 'slice': {
                notes.innerText = "取り出したい範囲を引数に入力してください。";
                break;
            }
        }
    }
);

//実行ボタン押下
document.getElementById("execution").addEventListener('click',
    function(){
        //要素boxの入力値から配列の作成、引数boxの入力値取得
        const array = document.getElementById("array_value").value.split(',');
        const argument = document.getElementById("argument_value").value;
        //処理実行結果表示欄の取得
        const result = document.getElementById("result");

        //選択された関数に応じて、処理を実行
        const selected_value = document.getElementById("function_list").value;
        switch(selected_value){
            case 'concat': {             
                result.innerText = array.concat(argument);
                break;
            }
            case 'every': {
                result.innerText = array.every((x) => x > argument);              
                break;
            }
            case 'indexOf': {
                result.innerText = array.indexOf(argument);
                break;
            }
            case 'join': {
                result.innerText = array.join(argument);
                break;
            }
            case 'map': {
                result.innerText = array.map(x => x * argument);                
                break;
            }
            case 'slice': {
                const arguments = document.getElementById("argument_value").value.split(',');
                result.innerText = array.slice(arguments[0],arguments[1]);               
                break;
            }
        }
    }
);