class button {
  constructor(holder, options = {}) {
    console.log("form gemaakt");
    this.holder = holder;
    this.label = options.label || "click me";
    this.rounded = options.rounded || false;
    this.init();
  }
  init() {
    this.classNames = this.rounded ? "button button--rounded" : "button";
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
      <button class="${this.classNames}">${this.label}</button>
      `
    );
  }
}

export default button;
