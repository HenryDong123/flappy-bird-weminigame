class Animal {
		constructor(name = '不配拥有姓名', age = 0) {
				this.name = name
				this.age = age
		}

		say() {
				console.log(this.name, this.age)
		}
}

class Cat extends Animal {
		constructor(name, age) {
				super(name, age)
		}

		say() {
				super.say()
				console.log('这是大碗宽面的主场！')
		}
}

const cat = new Cat('坤坤', '两年半')
cat.say()
