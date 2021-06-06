let names = ["Chris", "Jim", "Sally", "Blake"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (s){
  for (let i = 0; i < s.length; i++){
    return s[i];
  }
});

console.log(firstInitials);