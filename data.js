var option = {
		"title": {
				"text": "ECharts 入门示例"
		},
		"tooltip": {},
		"legend": {
				"data":["销量"]
		},
		"xAxis": {
				"data": ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		},
		"yAxis": {},
		"series": [{
				"name": "销量",
				"type": "bar",
				"data": [15, 20, 36, 10, 10, 20]
		}]
}

setInterval(function(){
  option["series"][0]["data"][0] = option["series"][0]["data"][0]+1;
},1000);
function getOption(){
				return option;
}
