class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(typeof(printTimeCallback)==="function"){printTimeCallback()}
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime%6000)/100)
  }

  getCentiseconds() {
    return Math.floor((this.currentTime%6000)%100)
  }

  computeTwoDigitNumber(value) {
    if(value<10) return "0"+value
    return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime =0
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes())
    const sec = this.computeTwoDigitNumber(this.getSeconds())
    const csec = this.computeTwoDigitNumber(this.getCentiseconds())
    return min + ":" + sec + "." + csec
  }
}
