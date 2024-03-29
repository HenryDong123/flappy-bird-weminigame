// 资源文件加载器，确保canvas在图片资源完成后才进行渲染
import {Resource} from "./Resource.js";

export class ResourceLoader {
		constructor() {
				this.map = new Map(Resource)
				for (let [key, value] of this.map) {
						const image = wx.createImage()
						image.src = value
						this.map.set(key, image)
				}
		}

		onLoaded(callback) {
			let loadedcount = 0
				for (let value of this.map.values()) {
						value.onload = () =>{
								loadedcount++
								if (loadedcount >= this.map.size) {
										callback(this.map)
								}
						}
				}
		}
		static create() {
				return new ResourceLoader()
		}
}
