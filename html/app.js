const table = document.getElementById("table");
let count = 1;
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
for (let i = 1; i <= 200; i++) {
  let tr = document.createElement("tr");
  for (let j = 1; j <= 12; j++) {
    let td = document.createElement("td");
    td.textContent = count;
    if (!isPrime(count)) {
      td.style.backgroundColor = "blue";
    }
    if (count != 2 && count % 2 == 0) {
      td.style.backgroundColor = "red";
    }
    if (count != 3 && count % 3 == 0) {
      td.style.backgroundColor = "green";
    }
    if (count == 1) {
      td.style.backgroundColor = "gray";
    }
    tr.append(td);
    count++;
  }
  table.append(tr);
}
