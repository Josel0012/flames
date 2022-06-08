function myFunction() {
    const name1 = document
        .getElementById("yourname")
        .value.toUpperCase()
        .replace(/ /g, "");
    let arr1 = Array.from(name1);
    const name2 = document
        .getElementById("crushname")
        .value.toUpperCase()
        .replace(/ /g, "");
    let arr2 = Array.from(name2);

    // let uniqueChars = [];
    // // mergeArr.forEach((c)=>{
    // //   if(!uniqueChars.includes(c)){
    // //      uniqueChars.push(c);
    // //   }
    // // })
    let tempArr2 = arr2;
    arr2 = arr2.filter(function(c) {
        return arr1.indexOf(c) < 0;
    });

    arr1 = arr1.filter(function(c) {
        return tempArr2.indexOf(c) < 0;
    });
    const mergeArr = [...arr1, ...arr2];
    let flames = ["F", "L", "A", "M", "E", "S"];

    while (flames.length < mergeArr.length) {
        flames = [...flames, ...flames];
    }
    // console.log(mergeArr);
    // console.log(flames);
    // console.log(flames[mergeArr.length - 1]);
    // if (mergeArr.length - 1 > 0) {
    //     document.getElementById("result").innerHTML = flames[mergeArr.length - 1];
    // } else {
    //     document.getElementById("result").innerHTML = "Di ka na magkakaasawa!";
    // }
    var output = document.querySelectorAll(".flames div");
    var image = document.querySelector(".memes img");
    for (i = 0; i <= output.length - 1; i++) {
        output[i].classList.remove("active");
        output[i].classList.add("roll");
        image.setAttribute("src", "");
    }
    setTimeout(function() {
        for (i = 0; i <= output.length - 1; i++) {
            output[i].classList.remove("roll");
            if (output[i].className.toUpperCase() == flames[mergeArr.length - 1]) {
                output[i].classList.add("active");
                document.getElementById("result").innerHTML = mergeArr;
                // console.log(output[i]);

                if (output[i].className == "f active") {
                    image.setAttribute("src", "images/friends.gif");
                } else if (output[i].className == "l active") {
                    image.setAttribute("src", "images/lovers.gif");
                } else if (output[i].className == "a active") {
                    image.setAttribute("src", "images/angry.gif");
                } else if (output[i].className == "m active") {
                    image.setAttribute("src", "images/married.gif");
                } else if (output[i].className == "e active") {
                    image.setAttribute("src", "images/enemy.gif");
                } else if (output[i].className == "s active") {
                    image.setAttribute("src", "images/siblings.gif");
                }
                // var temp = output[i].className.toUpperCase();
                // temp.classList.remove("active");
            }
        }
    }, 1000);
}