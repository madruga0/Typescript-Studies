class MC {
  greet(event: string = "party"): string {
    return `Welcome to the ${event}`;
  }
}

const mc = new MC();
console.log(mc.greet("show"));

//event -> string
//greet -> string
