var result = 0;
var num1 = 0;  // 字符串转数字，1）+, Number(),parseInt
var num2 = 0;
var flag = false;     // 第二个数的第一个数字信号量
var caclFlag = false; // 连+信号量
var op = "";          // 运算符号 +-*/
// +号事件处理
function operation(opStr){
	num1 = parseFloat(document.getElementById("input").value);
	flag = true;      // 准备接收第二个数字	
	op = opStr;
}  // 重构
function input(){
	if(flag == true){  // 接收第二个数的第一个数字
		document.getElementById("input").value=""; // 清除第一个数字
		// 清除
		flag = false;      // 已经录入一个第二个数的第一个数字，则重置
		caclFlag = false;  // 已经录入数字，则肯定不是连续相加
	}
}
function inputNum(numStr){
	input();   // 触发事件
	var val = document.getElementById("input").value;
	if(numStr == "." && val && val.indexOf(".")>=0){
		return;
	}
	document.getElementById("input").value = val + "" + numStr;
}
function backspaceNum(){
	var val = document.getElementById("input").value; // 常量 123
	if(val.length>0){
		val = val.substring(0,val.length - 1);
		document.getElementById("input").value = val;
	}
}
function resetCacl(){
	num1 = 0;
	num2 = 0;
	op = "";
	flag = false;
	caclFlag = false;
	result = 0;
	document.getElementById("input").value="";
}
function resetNum2(){
	num2 = 0;
	flag = false;
	caclFlag = false;
	document.getElementById("input").value="";
}
function cacl(){
	if(caclFlag==false){   // 正常相加
		num2 = parseFloat(document.getElementById("input").value);	
		if(isNaN(num2)){
			num2 = 0;
		}	
		caclFlag = true;
		if(op=="+")
			result = num1 + num2; // 计算
		else if(op=="-")
			result = num1 - num2;
		else if(op=="*")
			result = num1 * num2;
		else if(op == "/")
			result = num1 / num2;
	}else{                 // 连续相加
		if(op=="+")
			result += num2;
		else if(op=="-")
			result -= num2;
		else if(op == "*")
			result *= num2;
		else if(op == "/")
			result /= num2;
	}
	document.getElementById("input").value = result;
}