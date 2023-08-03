$(function () {
	$.getJSON('data/store.json', function (data) {
		let filterdArr = [];
		let filterdCountry = [];
		let target = $('.store_list');
		let length2 = 0;
		let cities = data[0].city;


		function findCity(city, country) {  //선택한 value
			let listHTML = '';
			filterdArr = cities.filter(item => item.cityName == city);
			let countries = filterdArr[0].country;
			filterdCountry = countries.filter(item => item.countryName == country);

			let filteredStore = filterdCountry[0].store;
			console.log(filteredStore);

			$.each(filteredStore, (i, item) => {
				listHTML +=
					`<li class="mix">
							<h2 class="store_name">
								${item.storeName}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<circle cx="12" cy="12" r="11.5" fill="white" stroke="#DEDEDE"/>
									<path d="M8.15926 18.1499C7.82152 18.3267 7.43828 18.0168 7.50652 17.621L8.23276 13.3957L5.15019 10.3978C4.86232 10.1173 5.01195 9.60452 5.39781 9.54914L9.68348 8.9274L11.5944 5.06207C11.7668 4.71368 12.2332 4.71368 12.4056 5.06207L14.3165 8.9274L18.6022 9.54914C18.9881 9.60452 19.1377 10.1173 18.8498 10.3978L15.7672 13.3957L16.4935 17.621C16.5617 18.0168 16.1785 18.3267 15.8407 18.1499L11.9987 16.1346L8.15839 18.1499H8.15926Z" fill="#D6D9DC"/>
								</svg>
							</h2>
							<h3 class="store_address">${item.address}</h3>
							<p class="store_phone">${item.phone}</p>
						</li>`  ;
			});

			target.html(listHTML);
			length2 = filteredStore.length;
			console.log(length2);
		}

		$('#filter2').on('change', function () {
			let target = $('#filter2').val();
			findCity('서울특별시', target);
			$('.result_num').text(length2)
			console.log(length2);
		})


   //let storePick = $('.store_list li');
	 let latLng = '';
	 $('.store_list li').on('click',function(){
		latLng = $(this).find('h2').text();
		console.log(latLng);

	 })






	//즐겨찾기 버튼 
	$('.store_name svg').on('click', function () {
		$('.store_name svg').addClass('active');
		//$('.store_name svg path').css({fill:'#FFCD6C'})
		console.log($(this))
	})
	$('.store_name').on('click', 	$('.store_name svg'), function () {
		$(this).find('path').css({ fill: '#FFCD6C' })
	})


	});//json end






// $('#filter').niceSelect();


// $('#filter2').niceSelect();



	var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var mapOption = { //지도를 생성할 때 필요한 기본 옵션
		center: new kakao.maps.LatLng(37.5234076, 127.0394159), //지도의 중심좌표.
		level: 3 //지도의 레벨(확대, 축소 정도)
	};
	var map = new kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴



});//on loaded






// // var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// // var mapOption = { //지도를 생성할 때 필요한 기본 옵션
// //   center: new kakao.maps.LatLng(37.5234076, 127.0394159), //지도의 중심좌표.
// //   level: 3 //지도의 레벨(확대, 축소 정도)
// // };
// // var map = new kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴



// // // 마커를 표시할 위치와 title 객체 배열입니다
// // var positions = [
// //     {
// //         title: '카카오',
// //         latlng: new kakao.maps.LatLng(33.450705, 126.570677)
// //     },
// //     {
// //         title: '생태연못',
// //         latlng: new kakao.maps.LatLng(33.450936, 126.569477)
// //     },
// //     {
// //         title: '텃밭',
// //         latlng: new kakao.maps.LatLng(33.450879, 126.569940)
// //     },
// //     {
// //         title: '근린공원',
// //         latlng: new kakao.maps.LatLng(33.451393, 126.570738)
// //     }
// // ];

// // // 마커 이미지의 이미지 주소입니다
// // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

// // for (var i = 0; i < positions.length; i ++) {

// //     // 마커 이미지의 이미지 크기 입니다
// //     var imageSize = new kakao.maps.Size(24, 35);

// //     // 마커 이미지를 생성합니다
// //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

// //     // 마커를 생성합니다
// //     var marker = new kakao.maps.Marker({
// //         map: map, // 마커를 표시할 지도
// //         position: positions[i].latlng, // 마커를 표시할 위치
// //         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
// //         image : markerImage // 마커 이미지
// //     });
// // }





