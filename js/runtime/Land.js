import {Sprite} from "../base/Sprite.js";
import {Director} from "../Director.js";
import {DataStore} from "../base/DataStore.js";

export class Land extends Sprite {
		constructor() {
				const image = Sprite.getImage('land')
				super(image, 0, 0,
						image.width, image.height,
						0, DataStore.getInstance().canvas.height - image.height,
						image.width, image.height
				)
				// 水平变换坐标
				this.landX = 0;
				// 地板移动速度
				this.landSpeed = Director.getInstance().moveSpeed;

		}

		draw(img = this.img, srcX = this.srcX, srcY = this.srcY, srcW = this.srcW, srcH = this.srcH, y = this.y, width = this.width, height = this.height) {
				this.landX += this.landSpeed
				if (this.landX > (this.img.width - DataStore.getInstance().canvas.width)) {
						this.landX = -2
				}
				super.draw(img, srcX, srcY, srcW, srcH, -this.landX, y, width, height);
		}
}
