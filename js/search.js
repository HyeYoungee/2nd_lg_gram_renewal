$(function () {
  let lengthContainer = $(".result_length");
  let container = $(".card_list");
  let loadMoreBtn = $(".loadmorBtn");
  let addItemCount = 6;
  let added = 0;
  let allData = [];

 

  $.getJSON("/data/card.json", makeList);
  function makeList(data) {
    allData = data;
    console.log(allData);
    let selectedType;
    let result = [];
    console.log(document.querySelector(".type_gram"));
    document
      .querySelector(".type_gram")
      .addEventListener("click", function (e) {
        e.preventDefault();
        console.log(11);
        selectedType = "type_gram";
        result = [...allData].filter((item) => {
          return item.type === selectedType;
        });
        console.log("result:::", result);
        if (selectedColor) {
          result = result.filter((item) => {
            return item.color === selectedColor;
          });
        }
        if (selectedPrice) {
          result = result.filter((item) => {
            return item.price === selectedPrice;
          });
        }
        findSet(result);
      });
    document.querySelector(".type_360").addEventListener("click", function (e) {
      selectedType = "type_360";
      result = allData.filter((item) => {
        return item.type === selectedType;
      });
      if (selectedColor) {
        result = result.filter((item) => {
          return item.color === selectedColor;
        });
      }
      if (selectedPrice) {
        result = result.filter((item) => {
          return item.price === selectedPrice;
        });
      }
      findSet(result);
    });
    document
      .querySelector(".type_style")
      .addEventListener("click", function (e) {
        console.log("doit1");
        selectedType = "type_style";
        result = allData.filter((item) => {
          return item.type === selectedType;
        });
        if (selectedColor) {
          result = result.filter((item) => {
            return item.color === selectedColor;
          });
        }
        if (selectedPrice) {
          result = result.filter((item) => {
            return item.price === selectedPrice;
          });
        }
        findSet(result);
      });

    let selectedColor;
    document
      .querySelector(".color_white")
      .addEventListener("click", function (e) {
        selectedColor = "color_white";
        result = allData.filter((item) => {
          return item.color === "color_white";
        });
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedPrice) {
          result = result.filter((item) => {
            return item.price === selectedPrice;
          });
        }
        findSet(result);
      });
    document
      .querySelector(".color_snow")
      .addEventListener("click", function (e) {
        selectedColor = "color_snow";
        result = allData.filter((item) => {
          return item.color === "color_snow";
        });
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedPrice) {
          result = result.filter((item) => {
            return item.price === selectedPrice;
          });
        }
        findSet(result);
      });
    console.log(document.querySelector(".color_black"));
    document
      .querySelector(".color_black")
      .addEventListener("click", function (e) {
        console.log("doit2");
        console.log(result);
        selectedColor = "color_black";
        result = allData.filter((item) => {
          return item.color === "color_black";
        });
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedPrice) {
          result = result.filter((item) => {
            return item.price === selectedPrice;
          });
        }
        findSet(result);
      });
    document
      .querySelector(".color_green")
      .addEventListener("click", function (e) {
        console.log("doit3");
        console.log("typeresult:::", result);
        selectedColor = "color_green";
        result = allData.filter((item) => {
          return item.color === "color_green";
        });
        console.log("colorresult::::", result);
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedPrice) {
          result = result.filter((item) => {
            return item.price === selectedPrice;
          });
        }
        findSet(result);
      });

    let selectedPrice;
    document
      .querySelector(".price_150")
      .addEventListener("click", function (e) {
        selectedPrice = "price_150";
        result = allData.filter((item) => {
          return item.price === "price_150";
        });
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedColor) {
          result = result.filter((item) => {
            return item.color === selectedColor;
          });
        }
        findSet(result);
      });
    document
      .querySelector(".price_200")
      .addEventListener("click", function (e) {
        selectedPrice = "price_200";
        result = allData.filter((item) => {
          return item.price1 === "price_200";
        });
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedColor) {
          result = result.filter((item) => {
            return item.color === selectedColor;
          });
        }
        findSet(result);
      });
    document
      .querySelector(".price_250")
      .addEventListener("click", function (e) {
        selectedPrice = "price_250";
        result = allData.filter((item) => {
          return item.price === "price_250";
        });
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedColor) {
          result = result.filter((item) => {
            return item.color === selectedColor;
          });
        }
        findSet(result);
      });
    document
      .querySelector(".price_300")
      .addEventListener("click", function (e) {
        selectedPrice = "price_300";
        result = allData.filter((item) => {
          return item.price === "price_300";
        });
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedColor) {
          result = result.filter((item) => {
            return item.color === selectedColor;
          });
        }
        findSet(result);
      });
    document
      .querySelector(".price_350")
      .addEventListener("click", function (e) {
        selectedPrice = "price_350";
        result = allData.filter((item) => {
          return item.price === "price_350";
        });
        if (selectedType) {
          result = result.filter((item) => {
            return item.type === selectedType;
          });
        }
        if (selectedColor) {
          result = result.filter((item) => {
            return item.color === selectedColor;
          });
        }
        findSet(result);
      });
    if (selectedColor === "" && selectedPrice === "" && selectedType === "") {
      findSet(result);
    }

   
  }

  $("#searchForm").on("click", function (e) {
    e.preventDefault();
   

  });

  function filterItems() {
    let result = allData;
    if (selectedType) {
      result = result.filter((item) => item.type === selectedType);
    }
    if (selectedColor) {
      result = result.filter((item) => item.color === selectedColor);
    }
    if (selectedPrice) {
      result = result.filter((item) => item.price === selectedPrice);
    }
    findSet(result);
  }



  function findSet(result) {
 
    let listHTML = "";
    let listLength = "";
        
    console.log(result);
    if (result.length > 0) {
      $.each(result, function (i, item) {
        listLength = `${result.length}개`;
        listHTML += `<li class='card'>
          <div>
            <div class='card_img_wrap d-flex justify-content-center '>
           <img src="${item.image}"/>
            </div>
            <div class='card_text'>
              <p class='product_num'>${item.product_num}</p>
              <h3 class='product_title'>${item.product_title}</h3>
              <p class='product_desc1'>${item.product_desc1}</p>
              <p class='product_weight'>무게(g) 약 ${item.product_weight.toLocaleString()}</p>
              <p class='review'>${starSVG}<span>${item.rating}</span></p>
              <h3 class='product_cost'>₩ ${item.cost.toLocaleString()}</h3>
            </div>
            <button class="add_btn">구매하기</button>
          </div>
        </li>`;
      });
    } else {
      listHTML = `<p>검색결과가 없습니다.</p>`;
    }
    lengthContainer.html(listLength);
    container.html(listHTML);
    // function findFilter(type, color) {

    //   $.each(b, function (idx, i) {
    //     elements.push(listHTML);
    //   });
    // }
  }

  // function addItems() {
  //   let elements = [];
  //   let slicedData = allData.slice(added, added + addItemCount);
  //   // console.log(slicedData);
  let starSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox='0 0 16 16" fill="none'>
        <path d="M12.4455 15.9959C12.3173 15.9964 12.1908 15.9647 12.0767 15.9033L7.98797 13.6559L3.89924 15.9033C3.76647 15.9766 3.61677 16.0093 3.46717 15.9977C3.31757 15.9861 3.17407 15.9307 3.05297 15.8378C2.93187 15.7449 2.83804 15.6181 2.78214 15.472C2.72624 15.3258 2.71052 15.1661 2.73675 15.0111L3.53847 10.2723L0.235407 6.90545C0.132353 6.79748 0.0592477 6.66208 0.0239372 6.5138C-0.0113733 6.36551 -0.00755635 6.20992 0.0349786 6.06374C0.0814458 5.91415 0.166922 5.78122 0.281706 5.68006C0.39649 5.57889 0.535987 5.51352 0.684366 5.49138L5.25413 4.79276L7.26643 0.474815C7.33208 0.332507 7.43458 0.212491 7.56219 0.128515C7.68981 0.044539 7.83737 0 7.98797 0C8.13858 0 8.28614 0.044539 8.41376 0.128515C8.54137 0.212491 8.64387 0.332507 8.70952 0.474815L10.7459 4.78435L15.3156 5.48296C15.464 5.50511 15.6035 5.57047 15.7183 5.67164C15.8331 5.77281 15.9186 5.90573 15.965 6.05532C16.0076 6.20151 16.0114 6.35709 15.9761 6.50538C15.9408 6.65367 15.8676 6.78906 15.7646 6.89703L12.4615 10.2639L13.2632 15.0027C13.2919 15.1605 13.2769 15.3236 13.2201 15.4727C13.1632 15.6219 13.0669 15.7508 12.9426 15.8444C12.7974 15.9512 12.6226 16.0045 12.4455 15.9959Z" fill="#F8D849"/>
      </svg>`;

  //   $.each(slicedData, function (idx, i) {
  //     let listHTML = `<li class='card'>
  //         <div>
  //           <div class='card_img_wrap d-flex justify-content-center '>
  //          <img src="${i.image}"/>
  //           </div>
  //           <div class='card_text'>
  //             <p class='product_num'>${i.product_num}</p>
  //             <h3 class='product_title'>${i.product_title}</h3>
  //             <p class='product_desc1'>${i.product_desc1}</p>
  //             <p class='product_weight'>무게(g) 약 ${i.product_weight.toLocaleString()}</p>
  //             <p class='review'>${starSVG}<span>${i.rating}</span></p>
  //             <h3 class='product_cost'>₩ ${i.price.toLocaleString()}</h3>
  //           </div>
  //           <button class="add_btn">구매하기</button>
  //         </div>
  //       </li>`;

  //     elements.push(listHTML);
  //   });
  //   // console.log(elements);
  //   container.append(elements);

  //   added += addItemCount;

  //   if (added < allData.length) {
  //     loadMoreBtn.show();
  //   } else {
  //     loadMoreBtn.hide();
  //   }
  // }
});
