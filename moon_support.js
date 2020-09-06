var version = "Bata 1.0.32"
var set_delay = 500;

// 建立JQUERY
// maybe not import this code
// var s=document.createElement('script');
// s.setAttribute('src','//code.jquery.com/jquery.js');
// document.getElementsByTagName('body')[0].appendChild(s);

void(function(){
	// 更正移動的id及目標視窗為iframe
	//$("div.cmd").children[6].children[1].children[0].target = "iframe_move"
	//$("div.cmd").children[6].children[1].children[0].id = "cmd_etc"
	// $("div.cmd form[action*='etc.cgi']")
	// var cmd_div = $("div.cmd div")[5]
	// $(cmd_div).find("form").attr("target","iframe_move")
	// $(cmd_div).find("form").attr("id","cmd_etc")
	
	// 建立iframe到通知欄(預設隱藏)
	if($("#iframe_move").length == 0){
		cif = document.createElement("iframe")
		cif.name = 'iframe_move'
		cif.id = 'iframe_move'
		cif.style = 'display:none;'
		$("div#newmsg").append(cif)
	}
	if($("#iframe_fshop").length == 0){
		cif = document.createElement("iframe")
		cif.name = 'iframe_fshop'
		cif.id = 'iframe_fshop'
		cif.style = 'display:none;'
		$("div#newmsg").append(cif)
	}
	if($("#iframe_cmd").length == 0){
		cif = document.createElement("iframe")
		cif.name = 'iframe_cmd'
		cif.id = 'iframe_cmd'
		cif.style = 'display:none;'
		$("div#newmsg").append(cif)
	}
	if($("#iframe_other_cmd").length == 0){
		cif = document.createElement("iframe")
		cif.name = 'iframe_other_cmd'
		cif.id = 'iframe_other_cmd'
		cif.style = 'display:none;'
		$("div#newmsg").append(cif)
		
		div_cmd = $(".cmd").clone()
		new_form = $(div_cmd).find("form").attr("target","iframe_cmd")
		$("#iframe_other_cmd").append(div_cmd)
		for(i=0 ; i<new_form.length ; i++){
			new_form[i]
		}
	}
	
	// 修改訊息紀錄視窗
	if($("#moon_log").length == 0){
		var msg_box = $("table.cc#other_msg")[0];
		var msg_title = $(msg_box).find("tr")[0];
		var tmp = $(msg_title).find("td")[0]
		tmp = $(tmp).clone()[0]
		$(tmp).find("font")[0].innerText = "腳本紀錄"
		msg_title.append(tmp)
		var msg_title = $(msg_box).find("tr")[0];
		var tmp = $(msg_title).find("td")
		var width_percent = (1/tmp.length*100).toFixed("") + "%"
		for(i=0 ; i<tmp.length ; i++){
			tmp[i].width = width_percent
		}
		var msg_list = $(msg_box).find("tr")[1];
		var tmp = $(msg_list).find("td")[0]
		tmp = $(tmp).clone()[0]
		tmp_1 = $(tmp).find("font")[0]
		tmp_1.id="moon_log"
		$(msg_list).append(tmp)
		$("#moon_log").empty()
		for(i=1 ; i<=10 ; i++){
			var li_item = $("<li></li>");
			$("#moon_log").append(li_item)
		}
	}
})()

var first_init = true;
function init_msg_history(){
	// 增加歷史紀錄
	// 國內
	$("#mes_con").after("<table id='mes_con_his' border='0' bgcolor='#883300' width='100%' ></table>")
	$("#mes_con_his").hide();
	var block_msg_con = $("#mes_con").parent().parent();
	var br_list = $(block_msg_con).find("br");
	$(br_list[0]).before("<a id='msg_con_change' onclick='change_msg_con()' style='color: blue; cursor: pointer;'>歷史訊息</a>");
	check_msg_con();
	// 世界
	$("#mes_all").after("<table id='mes_all_his' border='0' bgcolor='#883300' width='100%' ></table>")
	$("#mes_all_his").hide();
	var block_msg_con = $("#mes_all").parent().parent();
	var br_list = $(block_msg_con).find("br");
	$(br_list[0]).before("<a id='msg_all_change' onclick='change_msg_all()' style='color: blue; cursor: pointer;'>歷史訊息</a>");
	check_msg_all();
	
	first_init = false;
}
function check_msg_con(){
	var msg_list = $("#mes_con").find("tr");
	for(var i=msg_list.length ; i>=0 ; i--){
		if($(msg_list[i]).attr("recorded") == null){
			if(first_init != true){
				$("#mes_con_his").prepend($(msg_list[i]).clone());
			}
			$(msg_list[i]).attr("recorded","recorded");
		}
	}
}
function check_msg_all(){
	var msg_list = $("#mes_all").find("tr");
	for(var i=msg_list.length ; i>=0 ; i--){
		if($(msg_list[i]).attr("recorded") == null){
			if(first_init != true){
				$("#mes_all_his").prepend($(msg_list[i]).clone());
			}
			$(msg_list[i]).attr("recorded","recorded");
		}
	}
}

function change_msg_con(){
	if($("#mes_con").css("display") == "none"){
		$("#mes_con").show();
		$("#mes_con_his").hide();
		$("#msg_con_change").text("歷史訊息")
	}
	else{
		$("#mes_con").hide();
		$("#mes_con_his").show();
		$("#msg_con_change").text("關閉歷史訊息")
	}
}
function change_msg_all(){
	if($("#mes_all").css("display") == "none"){
		$("#mes_all").show();
		$("#mes_all_his").hide();
		$("#msg_all_change").text("歷史訊息")
	}
	else{
		$("#mes_all").hide();
		$("#mes_all_his").show();
		$("#msg_all_change").text("關閉歷史訊息")
	}
}

index = {
  "name":{"val":["冒險者中心","赫菲斯托斯","時雨鎮","風車鎮","星原鎮","雷雲鎮","明日鎮","暗夜鎮","伏爾肯","阿帕斯","艾奧羅斯","雅特蜜絲","宙斯","阿波羅","尼克斯","希費斯特斯","水之都","風之都","閃耀之都","雷電之都","光之都","夜鶯之都"]}
  ,"xy":{"val":["3-2","1-0","2-0","0-1","1-1","4-5","3-1","4-1","1-2","2-2","3-4","4-2","5-2","0-3","1-3","2-3","3-3","4-3","0-4","2-5","5-4","1-5"]}
  ,"xy-s":{"val":["32","10","20","01","11","45","31","41","12","22","34","42","52","03","13","23","33","43","04","25","54","15"]}
}
var shop_list = {
	"武器店":{
		"name":"arm",
		"item":["雷鳴劍","螢的弓","冰點下的槍","石器小刀"]
		},
	"防具店":{
		"name":"pro",
		"item":["黑的無袖衫","束腹","結實的衣服"]
		},
	"飾品店":{
		"name":"acc",
		"item":["雷的戒指","大地的手環","水之石","秘密鞋","錫礦石","擰頭巾","闇的手環","鐵礦石"]
		}
}

function remove_reload_script(){
	var check_script = $("script")
	var check_arr = [];
	var del_arr = [];
	for(i=0 ; i<check_script.length ; i++){
		var check_src = check_script[i].src
		if(check_src != ""){
			var check_result = check_arr.indexOf(check_src)
			if (check_result == -1){
				check_arr.push(check_src)
			}
			else{
				del_arr.push(check_script[check_result]);
			}
		}
	}
	for(i=0 ; i<del_arr.length ; i++){
		$(del_arr[i]).remove();
	}
}

function find_index(value){
	for(list in index){
		var item = index[list]['val'];
		for(var i = 0 ; i<item.length ; i++){
			if(item[i] == value)
			 return i;
		}
	}
}

async function move(value){ 
	$($("div.cmd form[action*='etc.cgi']")[0]).attr("id" , "cmd_etc")
	$($("div.cmd form[action*='etc.cgi']")[0]).attr("target" , "iframe_move")
	$("#cmd_etc select").val("move")
	$("#cmd_etc input[type='submit']").click() 
	var move_to = find_index(value); 
	await sleep(set_delay) 
	var map = $("iframe#iframe_move");
	var arr = map.contents().find("table");
	var now_map = arr[0].innerText.split("你目前的所在地：")[1].substring(0,5).replace(' ','').replace(' ','')
	if(now_map == index['xy']['val'][move_to]){
		save_log("已經在["+ value +"].");
	}
	else{
		map.get(0).contentWindow.moves(move_to); 
		await sleep(set_delay) 
		var t = map.contents().find("table") 
		if (t[0].innerText.indexOf("已經到了") == -1){ 
			var sec = t[0].innerText.split("剩餘 ")[1].split(" ")[0];
			sec = sec - 1;
			get_all_data();
			save_log("移動至["+ value +"]失敗，等待" + sec + "秒後重新移動.");
			backtown();
			await sleep(1000*sec);
			await move(value);
		} 
		else{
			save_log("移動至["+ value +"]成功.");
		}
	}
	$($("div.cmd form[action*='etc.cgi']")[0]).removeAttr("id")
	$($("div.cmd form[action*='etc.cgi']")[0]).removeAttr("target")
// moves(index); 
}

async function buy_item(value){
	shop = $("iframe#actionframe").contents().find("table table")[0];
	shop_item = $(shop).find("tr");
	var is_find = false;
	for(var i = 1 ; i<shop_item.length - 1 ; i++){
		if ($(shop_item[i]).find("td")[1].innerText == value){
			$(shop_item[i]).find("td input").click()
			is_find = true;
		}
	}
	if(is_find == true){
		$("iframe#actionframe").contents().find("input[type='submit'][value='購入']").click();
	}
	backtown();
	return is_find;
}

async function buy(value){
	var target = "";
	var search_list = Object.keys(shop_list);
	for(i = 0 ; i<search_list.length ; i++){
		if(shop_list[search_list[i]].item.indexOf(value) != -1)
			target = search_list[i];
	}
	if(target != ""){
		search_list = [target];
	}
	for(i = 0 ; i<search_list.length ; i++){
		$("#townf select").val(shop_list[search_list[i]].name)
		$("#townf input[type='button']").click()
		await sleep(1000);
		var check = await buy_item(value);
		if(check == true){
			save_log("在" + search_list[i] + "發現了 [" + value +"] !!")
			return true;
			break;
		}
		else{
			save_log("在" + search_list[i] + "找不到 [" + value +"] !!")
		}
	}
	return false;
}

function find_click(item , value){
	for(var i = 0 ; i<item.length ; i++){
		var tmp = item[i];
		if(tmp.value == value){
			tmp.click();
			return true;
		}
	}
	return false;
}
function find_item(item , value){
	for(var i = 0 ; i<item.length ; i++){
		var tmp = item[i];
		if(tmp.value == value)
			return true;
	}
	return false;
}
function goto_quest(){
	$("#townf select").val("quest")
	$("#townf input[type='button']").click()
}
async function t(item){
	quest_item = $("iframe#actionframe").contents().find(".fc")
	if(find_item(quest_item,"結束贊助裝備任務") == true){
		find_click(quest_item,"結束贊助裝備任務");
		await sleep(set_delay);
		goto_quest()
		await sleep(set_delay);
		quest_item = $("iframe#actionframe").contents().find(".fc")
	}
	if(find_item(quest_item,"接贊助裝備任務") == true){
		find_click(quest_item,"接贊助裝備任務");
		await sleep(set_delay);
		get_quest(item)
	}
	else{
		await sleep(set_delay);
		var quest_text = $("iframe#actionframe").contents().find("table")
		if(quest_text[0].innerText.indexOf("你身上沒有") == -1){
			var tmp_arr = quest_text[0].innerText.split(",到")[1].split("(")
			item.map = tmp_arr[0]
			item.item = tmp_arr[1].split("購買")[1].split("，")[0]
		}
		else{
			var tmp_arr = quest_text[0].innerText.split("你身上沒有「")[1].split("」，")
			item.item = tmp_arr[0]
		}
	}
}
function goto_bank(){
	$("#townf select").val("bank")
	$("#townf input[type='button']").click()
}
async function get_money(){
	goto_bank();
	await sleep(set_delay);
	$("iframe#actionframe").contents().find("[value='全部取出']").click()
	await sleep(set_delay);
	backtown();
}
async function save_money(){
	goto_bank();
	await sleep(set_delay);
	$("iframe#actionframe").contents().find("[value='全部存入']").click()
	await sleep(set_delay);
	backtown();
}


async function quest_report(value){
	quest_item = $("iframe#actionframe").contents().find(".fc")
	var item_name = "贊助「"+ value +"」完成贊助裝備任務"
	if(find_item(quest_item,item_name) == true){
		save_log("繳交任務成功")
		find_click(quest_item,item_name);
		await sleep(set_delay);
		goto_quest();
	}
	else{
		save_log("繳交任務失敗")
	}
}

function get_quest(item){
	tag_b = $("iframe#actionframe").contents().find("b")
	item.map = tag_b[0].innerText.split("(")[0]
	item.item = tag_b[1].innerText
}

var log_sort = 0; // 紀錄順序 0=上到下 1=下到上
function save_log(log_text){
	var li_item = $("#moon_log").find("li")
	if(log_sort == 0){
		$(li_item[0]).remove()
	}
	else{
		$(li_item[li_item.length-1]).remove()
	}
	
	var new_item = $("<li></li>").text(log_text)
	if(log_sort == 0){
		$("#moon_log").append(new_item)
	}
	else{
		$("#moon_log").prepend(new_item)
	}
	console.log(log_text);
}

async function auto_donate(count){
	save_log("開始執行自動贊助裝備任務")
	save_log("從銀行拿錢")
	await get_money();
	for(var i = 1 ; i<= count ; i++){
		save_log("第"+ i +"次執行")
		goto_quest();
		
		var quest = {"map":"" , "item":""};
		await sleep(set_delay);
		save_log("正在接取任務...")
		await t(quest);
		save_log("成功接到任務!")
		save_log("任務地點:" + quest.map + " 任務目標:" + quest.item)
		if(quest.map != ""){
			await move(quest.map);
		}
		var check_buy = await buy(quest.item);
		await sleep(set_delay);
		if(check_buy==true){
			save_log("購買完成")
			goto_quest();
			await sleep(set_delay);
			await quest_report(quest.item);
		}
		else{
			save_log("購買失敗")
		}
		backtown();
	}
	save_log("執行完畢")
	save_log("將錢存回銀行")
	await save_money();
}

var t_sw = false
var c_sw = false
var t_target = "贊助點數100點"
var c_target = ""
var d_m , d_s , d_ms;
var this_round_buy = true;
async function global_tick(){
	var d = new Date()
	d_m = d.getMinutes()
	d_s = d.getSeconds()
	d_ms = d.getMilliseconds()
	if(t_sw == true){
		if(c_sw == false){
			save_log("開啟拍賣場截標模式，目標是[" + t_target + "] !")
			c_target = t_target;
			this_round_buy = true;
			c_sw = true;
		}
		if (c_target != t_target){
			save_log("變更拍賣場目標，現在目標是[" + t_target + "] !")
			c_target = t_target;
			this_round_buy = true;
		}
		await auto_buy_point();
	}
	else{
		if(c_sw == true){
			save_log("關閉拍賣場截標模式.")
			c_sw = false;
		}
	}
	
	await change_job();
	check_msg_con();
	check_msg_all();
	
	d = new Date()
	d_ms = d.getMilliseconds()
	await sleep(1000 - d_ms);
	global_tick();
}

var pass_this_turn = false;
var no_get_user = ["琇~*","御魂笑光輝","創造再生lolita","獵戶座","光復香港，時代革命"];
async function auto_buy_point(){
	var is_do = (d_m%30 == 29 && d_s>=57);
	// console.log(d_m+'分'+d_s+'秒'+d_ms+'ms')
	if (this_round_buy == false){
		if (d_m%30 >= 0 && d_s%60 <= 10){
			this_round_buy = true
		}
		else{
			return
		}
	}
	if ( (d_m%5 == 1 && d_s%60 == 1) || is_do == true ){
		
		save_log('現在時間:' +d_m+'分'+d_s+'秒' + "，檢查拍賣場.");
		fastkeyform('town','fshop');
		await sleep(set_delay);
		var gshop = find_iframe("#actionframe","table table.tc")
		var gshop_list = $(gshop[0]).find("tr")
		for(i=0 ; i<gshop_list.length ; i++){
			var check_str = $(gshop_list[i]).text()
			if(check_str == "拍賣品一覽"){
				continue;
			}
			else if(check_str == "寵物拍賣品一覽"){
				break;
			}
			var item_detail = $(gshop_list[i]).find("td")
			check_str = $(item_detail[2]).text(); // 名稱
			if(check_str == t_target){
				check_str = $(item_detail[10]).text(); // 目前出價
				check_buyer = $(item_detail[11]).text(); // 最高出價者
				check_limit = $(item_detail[12]).text(); // 期限
				save_log("目標:"+ t_target +" 目前出價:" + check_str + " 出價者為:" + check_buyer + " 剩餘時間:" + check_limit)
				if(check_str == "0萬" && is_do == true){
					$(item_detail[0]).find("input").click()
					$(gshop_list).find("input[type='txt']").val("30000")
					$(gshop_list).find("input[value='確定出價']").click();
					await sleep(set_delay);
					save_log("發現目標，已經進行競標!")
					fastkeyform('town','fshop');
				}
				else{
					if(check_buyer == user || no_get_user.indexOf(check_buyer) != -1 ){
						save_log("發現競標者為排除對象!");
						continue;
					}
					if(d_m%30 == 29 && check_limit == "剩餘0分"){
						money_B = parseInt(check_str.split("億")[0])
						money_W = parseInt(check_str.split("億")[1].split("萬")[0])
						money = (money_B * 10000) + money_W
						if(pass_this_turn == true){
							save_log("上一輪已經截標，暫停一輪，此輪由" + check_buyer + "拿下!!");
							pass_this_turn = false;
							this_round_buy = false;
							continue;
						}
						if (money <= 45010){
							money = money + (1000 - money % 1000);
							save_log("收割時間!!已經使用"+ money +"進行截標!")
							$(item_detail[0]).find("input").click()
							$(gshop_list).find("input[type='txt']").val(money)
							$(gshop_list).find("input[value='確定出價']").click();
							await sleep(set_delay);
							pass_this_turn = true;
							fastkeyform('town','fshop');
						}
						else{
							save_log("價格來到了"+check_str+"!截不起標! 目前買家為 " + check_buyer)
							this_round_buy = false;
						}
					}
				}
			}
		}
		backtown();
	}
}
function find_iframe(id,target){
	return $("iframe" + id).contents().find(target);
}
async function set_pet(){
	for(var i = 0 ; i<=10 ; i++){
		fastkeyform('town','petup');
		await sleep(100);
		find_iframe('#actionframe','input.FC')[0].click()
		await sleep(100);
	}
}
var my_status = {
	"str":0,"vit":0,"int":0,"wis":0,"luk":0,"agi":0
}
function get_status(){
	var status_list = Object.keys(my_status);
	var status_count = status_list.length;
	for(var i = 0 ; i<status_count ; i++){
		my_status[status_list[i]] = parseInt($("#chara_max" + i).text().split("(")[0])
		save_log(status_list[i] + ':' + my_status[status_list[i]]);
	}
}
function check_status(min_status){
	get_status();
	var status_list = Object.keys(my_status);
	var status_count = status_list.length;
	for(var i = 0 ; i<status_count ; i++){
		var tmp_status = my_status[status_list[i]];
		if(tmp_status < min_status){
			return true;
		}
	}
	return false;
}

var this_turn_change_job = false;
async function change_job(){
	var now_lv = $("#mlv").text();
	if(now_lv != 100){
		// save_log("還沒100等，現在等級為" + now_lv);
		return;
	}
	if(this_turn_change_job != true){
		// save_log("不需要轉職");
		return;
	}
	fastkeyform('status','change')
	await sleep(set_delay);
	var table = find_iframe("#actionframe","table table.tc");
	var list = $(table[0]).find("tr")
	for(var i=0 ; i<list.length ; i++){
		var check_input = $(list[i]).find("input");
		if(check_input.length == 0){
			continue;
		}
		var list_item = $(list[i]).find("td");
		var job_name = $(list_item[1]).text();
		// save_log(job_name + ' = ' + (job_name == "熾天使"))
		if(job_name == "熾天使"){
			$(check_input).click();
			$(table[0]).find("input[value='轉職']").click();
			await sleep(set_delay);
			backtown();
			await sleep(set_delay);
			this_turn_change_job = check_status(950);
			if(this_turn_change_job==true){
				save_log("本轉能力不及指定數值，滿等候繼續轉職");
			}
			else{
				save_log("本轉能力達到指定數值，停止自動戰鬥");
				$("#StopButton").click();
				$("#autoattack").click();
			}
			break;
		}
	}
}

var user = $("#mname").text()
remove_reload_script();
init_msg_history();
global_tick();
save_log("月琴的腳本成功載入了唷ε٩(๑> ₃ <)۶з")
save_log("目前的版本號為 : " + version);
save_log("歡迎你，" + user + " 祝福你今天也是收穫滿滿唷~ (ゝ∀･)")

