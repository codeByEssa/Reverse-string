let str = "Javacript";
let p = document.querySelector('p');
let body = document.querySelector('body');
for(let i = str.length - 1 ;  i >= 0 ; i--)
{
  p.textcontent = `Array Reverse ${str[i]}`;
};
body.append(p);
