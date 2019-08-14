import {
  ResourceLoader
} from "./js/base/ResourceLoader.js";
import {
  Director
} from "./js/Director.js";
import {
  BackGround
} from "./js/runtime/BackGround.js";
import {
  DataStore
} from "./js/base/DataStore.js";
import {
  Land
} from "./js/runtime/Land.js";
import {
  Birds
} from "./js/player/Birds.js";
import {
  StartButton
} from "./js/player/StartButton.js";
import {
  Score
} from "./js/player/Score.js";
import {
  ApiExamples
} from "./js/ApiExamples.js";


export class Main {
  constructor() {
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    const loader = ResourceLoader.create()
    loader.onLoaded(map => this.onResourceFirstLoaded(map))
  }
  createBgm() {
    this.innerAudioContext = wx.createInnerAudioContext()
    this.innerAudioContext.autoplay = true
    this.innerAudioContext.loop = true
    this.innerAudioContext.src = './audios/bgm.mp3'
  }
  onResourceFirstLoaded(map) {
    this.dataStore.canvas = this.canvas
    this.dataStore.ctx = this.ctx
    this.dataStore.res = map
    this.createBgm()
    const examples = new ApiExamples()
    /*let button = examples.getUser()
    button.onTap((res) => {
      console.log(res)
      if (res.encryptedData){
        this.init()
      }
    })*/
  }
  init() {
    this.dataStore
      .put('pencils', [])
      .put('background', BackGround)
      .put('land', Land)
      .put('birds', Birds)
      .put('startButton', StartButton)
      .put('score', Score)
    this.director.isGameOver = false
    this.registerEvent()
    this.director.createPencil()
    this.director.run()
  }
  registerEvent() {
    wx.onTouchStart(() => {
      if (this.director.isGameOver) {
        this.init()
      } else {
        this.director.birdsEvent()
      }
    })
    wx.onShow(()=>{
      console.log(1)
      this.dataStore.get('background').draw()
      this.dataStore.get('pencils').forEach((val, index, array) => {
        val.draw()
      })
      this.dataStore.get('score').draw()

      this.dataStore.get('land').draw()
      this.dataStore.get('birds').draw()
      this.dataStore.get('startButton').draw()
    })

  }
}