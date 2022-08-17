class Tab{
	constructor(id) {
	    // 获取元素
		this.main = document.querySelector(id);
		this.lis = this.main.querySelectorAll('li');
		this.sections = this.main.querySelectorAll('section');
		this.init();
	}
	init(){
		//init初始化操作让相关元素绑定事件
		for(var i=0;i<this.lis.length;i++){
			this.lis[i].index = i;
			this.lis[i].onclick = function(){
				console.log(this.index);
			}
		}
		
	}
	//1 切换
	toggleTab(){
		
	}
	//2 添加
	addTab(){
		
	}
	//3删除
	removeTab(){
		
	}
	//4修改
	editTab(){
		
	}
}
new Tab('#tab');