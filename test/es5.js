;(function () {
		"use strict";
		var Animal = function (name, age) {
				this.name = name
				this.age  = age
				// 第一种
				// this.say = function () {
				// 		console.log('鸡你太美',this.name + ' ' +this.age)
				// }
		}
		// 第二种
		Animal.prototype.say = function () {
				console.log('唱，跳，rap', this.name + ' ' + this.age)
		}
		var cat = new Animal('猫猫', 3)
		cat.say()
		// 寄生组合继承
		// call() apply()
		// 调用的一个对象的一个方法，用另一个对象替换当前对象
		// 简单例子
		// Animal.prototype.say.call(cat)
		// var params = {
		// 		name: '坤坤',
		// 		age: '两年半'
		// }
		// cat.say.call(params)

		// 正式寄生组合继承
		var Cat = function (name, age) {
				// Animal.apply(this,arguments)
				Animal.call(this,name, age)
		}
		Cat.prototype = Object.create(Animal.prototype)//浅克隆过来
		// 直接拿过来
		// Cat.prototype = new Animal()
		Cat.prototype.say = function () {
				console.log('这是子类' +this.name)
		}
		var fan = new Cat('大碗宽面', 15)
		fan.say()
})()

