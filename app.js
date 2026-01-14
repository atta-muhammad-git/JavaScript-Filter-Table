let Input = document.getElementById("searchInput");
let table = document.getElementById("Table");
let rows = table.getElementsByTagName("tr");

Input.addEventListener("keyup", function() {
  let filter = Input.value.toLowerCase();

  for (let i = 1; i < rows.length; i++) {
    let tds = rows[i].getElementsByTagName("td");
    let row = false;

    for (let j = 0; j < tds.length; j++) {
      let td = tds[j];
      if (td) {
        let textValue = td.textContent || td.innerText;
        if (textValue.toLowerCase().includes(filter)) {
          row = true;
          break;
        }
      }
    }

    if (row) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});

