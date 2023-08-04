$(function () {
  let container = $(".card_list");
  let loadMoreBtn = $(".loadmorBtn");
  let addItemCount = 6;
  let added = 0;
  let allData = [];

  let typeArr = [];
  let colorArr = [];
  let priceArr = [];
  let typeArrResultHTML = "";
  let colorArrResultHTML = "";
  let priceArrResultHTML = "";

  $.getJSON("/data/card.json", makeList);

  function makeList(data) {
    allData = data;
    console.log(allData);

    //유형태그
    typeArr = [];
    $.each(allData, function (i, item) {
      typeArr.push(item.type);
      // let typeArrResult = [...new Set(typeArr)];
      // console.log(typeArrResult);
    });
    let typeArrResult = [...new Set(typeArr)];
    console.log(typeArrResult);
    typeArrResultHTML = "";
    console.log(typeArrResult);
    $.each(typeArrResult, function (i, type) {
      typeArrResultHTML += `<span>
      <input type="radio" value="${type}" name="type" />
      <label for="gram_cost">${type}</label>
    </span>`;
    });

    $("#type_wrap").html(typeArrResultHTML);
    //컬러태그
    colorArr = [];
    $.each(allData, function (i, item) {
      colorArr.push(item.color);
    });

    let colorArrResult = [...new Set(colorArr)];
    colorArrResultHTML = "";
    console.log(colorArrResultHTML);
    $.each(colorArrResult, function (i, color) {
      colorArrResultHTML += `<span>
      <input type="radio" value="${color}" name="color" />
      <label for="gram_cost">${color}</label>
    </span>`;
    });
    $("#color_wrap").html(colorArrResultHTML);

    //가격태그
    priceArr = [];
    $.each(allData, function (i, item) {
      priceArr.push(item.price1);
    });

    let priceArrResult = [...new Set(priceArr)];
    console.log(priceArrResult);
    priceArrResultHTML = "";

    $.each(priceArrResult, function (i, price) {
      priceArrResultHTML += `<span>
      <input type="radio" value="${price}" name="price" />
      <label for="gram_cost">${price}</label>
    </span>`;
    });
    $("#price_wrap").html(priceArrResultHTML);
    console.log(priceArrResultHTML);
    // findSet("", "", "", 10);
  }

  // function initCarList(data) {
  //   allData = data;
  //   console.log(allData);
  //   // console.log(allData);
  //   addItems(); //데이터 추출, 리스트태그 생성, ui의 내용에 추가
  //   loadMoreBtn.on("click", addItems); //클릭하면 addItems 할일을 해
  // }

  let checkHTML = "";

  // checkHTML = ` <span>
  //                 <input type="radio" value="${allData.type}" name="${type}" />
  //                 <label for="gram_cost">${}</label>
  //               </span>`;

  function findSet(typea, colora, pricea, limit) {
    let filteredArr = [];
    let listHTML = "";
    if (typea == "" && colora == "" && pricea == "") {
      filteredArr = allData.slice(0, 10);
    }
    filteredArr = allData.filter((item) => {
      return (
        (typea === "" || item.type === typea) &&
        (colora === "" || item.color === colora) &&
        (pricea === "" || item.price1 === pricea)
      );
    });

    // let filteredType = allData.filter((item) => item.type == typea);
    // console.log(filteredType);
    // if (filteredType.length > 0) {
    //   let filteredColor = filteredType.filter((item) => item.color == colora);
    //   console.log(filteredColor);
    //   filteredArr = filteredColor;
    //   if (filteredColor.length > 0) {
    //     let filteredPrice = filteredColor.filter(
    //       (item) => item.price == pricea
    //     );
    //     console.log(filteredPrice);
    //     filteredArr = filteredPrice;
    //   }
    // }
    console.log(filteredArr);
    if (filteredArr.length > 0) {
      $.each(filteredArr, function (i, item) {
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
              <h3 class='product_cost'>₩ ${item.price.toLocaleString()}</h3>
            </div>
            <button class="add_btn">구매하기</button>
          </div>
        </li>`;
      });
    } else {
      listHTML = `<p>검색결과가 없습니다.</p>`;
    }
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
