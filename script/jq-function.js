
//实现左右div自适应相同高度
function autoHeight(left, right){
    var leftHeight = left.height(),
        rightHeight = right.height();
    if(leftHeight >= rightHeight){
        right.height(leftHeight);
    } else {
        left.height(rightHeight);
    }
}

//获取鼠标在屏幕中的坐标
function getScreen(e, d){
    x = e.screenX;
    y = e.screenY;
    d.text("X:"+ x + ",Y:" + y);
}

//获取鼠标在窗口客户区中的坐标
function getClient(e, d){
    x = e.clientX;
    y = e.clientY;
    d.text("X:"+ x + ",Y:" + y);
}

//获取鼠标在窗口页面中的坐标
function getPage(e,d){
    x = e.pageX;
    y = e.pageY;
    d.text("X:"+ x + ",Y:" + y);
}

//限制文本域中的字符个数
function maxLength (content,num,numLen) {
    content.each(function(){
        var number = parseInt(num);
        numLen.html(number);
        content.keyup(function(){
            var new_length = $(this).val().length;
            numLen.html(number - new_length);
            if(new_length >= number){
                numLen.html(0);
                new_value = content.val().substring(0,number);
                content.val(new_value);
            }
        });
    });
}

//全选、反选
function allSelect (allSelect, select) {
    var length = select.length;
    allSelect.click(function(){
        if(allSelect.prop('checked') == true){
            select.each(function(){
                select.prop("checked",true);
            });
        } else {
            select.each(function(){
                select.prop("checked",false);
            });
        }
    });
    select.click(function(){
        var flag = 0;
        select.each(function(){
            if($(this).prop("checked") == true){
                flag++;
            }
        });
        if(flag == length){
            allSelect.prop("checked",true);
        } else {
            allSelect.prop("checked",false);
        }
    });
}


