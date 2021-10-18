import { LightenDarkenColor } from "lighten-darken-color";

class circle {
  constructor(holder, options = {}) {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.holder = holder;
    this.size = options.size;
    this.color = options.color;
    this.borderSize = options.border;
    this.borderColor = LightenDarkenColor(this.color, 80);
    this.htmlRef = this.init();
    this.removeCircle();

    this.addClick();

    this.addStyle();
  }
  init() {
    console.log("button gemaakt");
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
      <div class="circle"></div>
      `
    );
    return document.querySelector(".circle:last-child");
  }
  addStyle() {
    const styles = {
      backgroundColor: this.color,
      width: this.size + "px",
      height: this.size + "px",
      border: `${this.borderSize}px solid ${this.borderColor}`,
      left: this.x + "px",
      top: this.y + "px",
    };
    Object.assign(this.htmlRef.style, styles);
  }
  addClick() {
    let clicks = 0;

    this.htmlRef.onclick = (e) => {
      clicks++;
      if (clicks === 3) {
        e.target.style.borderRadius = 0;
      }
      if (clicks === 6) {
        e.target.style.backgroundColor = "green";
      }
    };
  }
  removeCircle() {
    let timer = 0;
    const interval = setInterval(() => {
      timer++;
      console.log(timer);
      if (timer === 10) {
        this.htmlRef.remove();
        clearInterval(interval);
      }
    }, 1000);
  }
}

export default circle;
