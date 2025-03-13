document.querySelector(".but_ras4et_dcpr").addEventListener("click", () => {
  let data1 = +document.querySelector(".input_dck").value;
  let data2 = +document.querySelector(".dc_totr").value;
  let data = data1 + data2;
  document.querySelector(".DcPr").innerHTML = data;
});
