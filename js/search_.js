$(function () {
  let lengthContainer = $(".result_length");
  let container = $(".card_list");
  let loadMoreBtn = $(".loadmorBtn");
  let addItemCount = 6;
  let added = 0;
  let allData = [];

  let filteredData = [];
  let result;

  $.getJSON("/data/card.json", makeList);

  function makeList(data) {
    allData = data;
    filterData();
  }
  $(".filter_options input[type='radio']").on("change", filterData);

  function filterData() {
    let selectedType = $(".filter_options input[name='type']:checked").val();
    let selectedColor = $(".filter_options input[name='color']:checked").val();
    let selectedPrice = $(".filter_options input[name='price']:checked").val();

    console.log(selectedColor);
    console.log(selectedPrice);
    console.log(selectedType);
    filteredData = [];
    if (!selectedType && !selectedColor && !selectedPrice) {
      filteredData = allData;
    } else {
      if (selectedType) {
        result = allData.filter((item) => {
          return item.type === selectedType;
        });
        filteredData = result;
      }
      if (selectedColor) {
        colorResult = result.filter((item) => {
          if (item.color === selectedColor) {
            return item.color === selectedColor;
          }
        });
        filteredData = colorResult;
      }
      if (selectedPrice) {
        priceResult = colorResult.filter((item) => {
          if (item.price === selectedPrice) {
            return item.price === selectedPrice;
          }
        });
        filteredData = priceResult;
      }
    }
    console.log(filteredData);
    displayItems(filteredData);
  }

  function displayItems(data) {
    let listHTML = "";

    if (data.length > 0) {
      $.each(data, function (i, item) {
        listHTML += `<li class='card'>
          <div>
            <div class='card_img_wrap d-flex justify-content-center '>
              <img src="${item.image}" alt="${item.product_title}" />
            </div>
            <div class='card_text'>
              <p class='product_num'>${item.product_num}</p>
              <h3 class='product_title'>${item.product_title}</h3>
              <p class='product_desc1'>${item.product_desc1}</p>
              <p class='product_weight'>무게(g) 약 ${item.product_weight}</p>
              <p class='review'>${starSVG}<span>${item.rating}</span></p>
               <h3 class='product_cost'>₩ ${item.cost}</h3>
            </div>
            <button class="add_btn">구매하기</button>
          </div>
        </li>`;
      });
    } else {
      listHTML = `<p>검색결과가 없습니다.</p>`;
    }

    lengthContainer.find("span").text(data.length);
    container.html(listHTML);
  }

  let starSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <!-- Your SVG path for the star icon -->
  </svg>`;
  // Implement load more functionality if needed
  // function addItems() {
  //   // ...
  // }
});
