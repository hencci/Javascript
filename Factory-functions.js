// These fancy-sounding functions work very similar to how constructors did, but with one key difference - they levy the power of closures. Instead of using the new keyword to create an object, factory functions set up and return the new object when you call the function

const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!
  
function createUser (name) {
    const discordName = "@" + name;
    return { name, discordName };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword