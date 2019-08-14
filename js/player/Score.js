// 积分器
import {DataStore} from "../base/DataStore.js";

export class Score {
	constructor() {
			this.ctx = DataStore.getInstance().ctx
			this.scoreNumber = 0
			// 控制加分刷新率
			this.isScore = true
	}
	draw() {
			this.ctx.font = '30px Arial'
			this.ctx.fillStyle = '#fff'
			this.ctx.fillText(
					this.scoreNumber,
					DataStore.getInstance().canvas.width /20,
					DataStore.getInstance().canvas.height /18,
					1000
			)
	}
}
