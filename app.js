document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("əlavəet").addEventListener("click", function () {
        var table = document
        .getElementById("cedvel")
        .getElementsByTagName("tbody")[0];

        var newRow = table.insertRow(table.rows.length);

        var sira = newRow.insertCell(0);
        var ad = newRow.insertCell(1);
        var soyad = newRow.insertCell(2);
        var yas = newRow.insertCell(3);
        var emeliyat = newRow.insertCell(4);

        var rowCount = table.rows.length;
        sira.textContent = rowCount;

        ad.innerHTML = '<input type="text" placeholder="Ad">';
        soyad.innerHTML = '<input type="text" placeholder="Soyad">';
        yas.innerHTML = '<input type="number" placeholder="Yaş">';
        emeliyat.innerHTML ='<button class="yaddaSaxla">Yadda Saxla</button> <button class="sil">Sil</button>';
        
        emeliyat
        .getElementsByClassName("yaddaSaxla")[0]
        .addEventListener("click", function () {
            var name = newRow.cells[1].querySelector("input").value;
            var surname = newRow.cells[2].querySelector("input").value;
            var age = newRow.cells[3].querySelector("input").value;
            console.log("Ad:", name, "Soyad:", surname, "Yaş:", age);
            
            var editButton = document.createElement("button");
            editButton.textContent = "Düzəliş Et";
            editButton.className = "duzelis";
            emeliyat.insertBefore(editButton, emeliyat.childNodes[0]);
            
            emeliyat.getElementsByClassName("yaddaSaxla")[0].style.display = "none";
            
            editButton.addEventListener("click", function () {
                
                emeliyat.getElementsByClassName("yaddaSaxla")[0].style.display ="inline-block";
                
                editButton.remove();
            });
        });


        emeliyat
        .getElementsByClassName("sil")[0]
        .addEventListener("click", function () {
            newRow.remove();
        });

    });
    
});
