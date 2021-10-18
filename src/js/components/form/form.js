class form {
  constructor(holder) {
    console.log("form gemaakt");
    this.holder = holder;
    this.htmlRef = this.init();
    this.onSubmit();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
    <form class="form">
    <h1 class="form__header"> Creëer een nieuwe cirkel</h1>
    <input type="color" class="form__input" id ="color" name="Select color"><br>
    <input type="number" class="form__input" id="size" name="Voornaam" placeholder="Kies grote van cirkel"><br>
    <input type="number" class="form__input" id="border" name="Naam" placeholder="Kies dikte van border"><br>
    <input type="submit" class="form__input" id="submitbtn"  />
    </form>
    `
    );
    return document.querySelector(".form");
  }
  onSubmit() {
    // document.querySelector(".form").addEventListener("submit", function (e) {
    //   e.preventDefault();
    //   const color = document.querySelector("#color").value;
    //   const fname = document.querySelector("#fname").value;
    //   const lname = document.querySelector("#lname").value;
    //   // console.log(color, fname, lname);
    // });
  }
}

export default form;
