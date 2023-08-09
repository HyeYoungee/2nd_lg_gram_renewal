$(function () {
	// JSON data 로드
	$.getJSON('data/store.json', function (data) {
		let filterdArr = [],
			filterdCountry = [],
			target = $('.store_list'),
			length2 = 0,
			cities = data[0].city,
			mark_img = '',
			mark_name = '',
			mark_address = '',
			mark_phone = '';


		function findCity(city, country) {  // 선택한 지역 value 
			let listHTML = '',
				filterdArr = cities.filter(item => item.cityName == city),
				countries = filterdArr[0].country,
				filterdCountry = countries.filter(item => item.countryName == country),
				filteredStore = filterdCountry[0].store;

			$.each(filteredStore, (i, item) => {
				listHTML +=
					`<li class="mix" data-lat="${item.lat}" data-lng="${item.lng}" data-img="${item.image}">
							<h2 class="store_name" data-storeName="${item.storeName}">
								${item.storeName}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<circle cx="12" cy="12" r="11.5" fill="white" stroke="#DEDEDE"/>
									<path d="M8.15926 18.1499C7.82152 18.3267 7.43828 18.0168 7.50652 17.621L8.23276 13.3957L5.15019 10.3978C4.86232 10.1173 5.01195 9.60452 5.39781 9.54914L9.68348 8.9274L11.5944 5.06207C11.7668 4.71368 12.2332 4.71368 12.4056 5.06207L14.3165 8.9274L18.6022 9.54914C18.9881 9.60452 19.1377 10.1173 18.8498 10.3978L15.7672 13.3957L16.4935 17.621C16.5617 18.0168 16.1785 18.3267 15.8407 18.1499L11.9987 16.1346L8.15839 18.1499H8.15926Z" fill="#D6D9DC"/>
								</svg>
							</h2>
							<h3 class="store_address" data-address="${item.address}">${item.address}</h3>
							<p class="store_phone" data-phone="${item.phone}">${item.phone}</p>
						</li>` ;
			});

			target.html(listHTML);
			length2 = filteredStore.length;
		}

		//강남본점 기본 좌표 표기
		makeMap(37.5234076, 127.0394159, '강남본점', "서울특별시 강남구 도산대로 403 LG전자 베스트샵 강남본점", "02-3448-5191", "https://www.lge.co.kr/kr/upload/admin/storePhoto/%EA%B0%95%EB%82%A8%EB%B3%B8%EC%A0%90%20%EC%99%B8%EA%B4%80-crop[20221214_095145].jpg");

		$(".search_btn").on('click', function (e) {
			e.preventDefault();
			let target = $('#filter2').val();
			findCity('서울특별시', target);
			$('.result_num').text(length2);

			$('.store_list li').on('click', function () {
				let lat = $(this).attr('data-lat');
				let Lng = $(this).attr('data-lng');
				mark_img = $(this).attr('data-img');
				mark_name = $(this).find('h2').attr('data-storeName');
				mark_address = $(this).find('h3').attr('data-address');
				mark_phone = $(this).find('p').attr('data-phone');

				makeMap(lat, Lng, mark_name, mark_address, mark_phone, mark_img);
				$('.store_name').on('click', $('.store_name svg'), function () {
					$(this).find('path').css({ fill: '#FFCD6C' })
				});
			});
		});

	}); // store search json end


	// findCity 함수 결과 지도에 표기(위도, 경도, 매장 정보) 
	function makeMap(lat, lng, mark_name, mark_address, mark_phone, mark_img) {
		var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 
		var mapOption = {
			//지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(lat, lng),
			level: 3
		};
		var map = new kakao.maps.Map(mapContainer, mapOption);

		var mapTypeControl = new kakao.maps.MapTypeControl();

		// 지도 확대 축소 제어 컨트롤 생성
		var zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		// 마커를 표시할 위치와 title 객체 배열입니다
		var positions = [
			{
				title: '카카오',
				latlng: new kakao.maps.LatLng(lat, lng)
			}
		];

		// 마커 이미지 주소
		//var imageSrc = "https://res.cloudinary.com/dmtdo3wur/image/upload/v1691336758/dxpxevvqeral6uz4scip.png";
		var imageSrc = "https://res.cloudinary.com/dmtdo3wur/image/upload/v1691479488/j8lwiacazkjqmhdnbo7z.png";
		for (var i = 0; i < positions.length; i++) {
			var imageSize = new kakao.maps.Size(70, 70);
			var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
			var marker = new kakao.maps.Marker({
				map: map, // 마커를 표시할 지도
				position: positions[i].latlng, // 마커를 표시할 위치
				title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
				image: markerImage // 마커 이미지
			}); 
		}
    // 마커 위에 커스텀오버레이 표시
		var content = `
										<div class="wrap">
											<div class="info">
												<div class="title">
													<h2>${mark_name}</h2>
													<div class="close" onclick="closeOverlay()" title="닫기"></div>
												</div>
												<div class="body">
													<div class="desc">
														<p class="info_address">주소 : ${mark_address.slice(0,10)+'...'}</p>
														<tel class="info_phone">전화 : ${mark_phone}</tel>
														<p class="info_link"><a href="https://www.lge.co.kr/bestshop/store-finder" target="_blank" class="link">홈페이지 <i class="fa-solid fa-chevron-right"></i></a></p>
													</div>
													<div class="img">
														<img src="${mark_img}" width="73" height="70">     
										</div>`
   
		var overlay = new kakao.maps.CustomOverlay({
			content: content, 
			map: map,
			position: marker.getPosition()
		});

		// 마커를 클릭했을 때 커스텀 오버레이를 표시
		kakao.maps.event.addListener(marker, 'click', function () {
			overlay.setMap(map);
		});

		// 커스텀 오버레이를 닫기 위해 호출
		function closeOverlay() {
			overlay.setMap(null);
		}
	}



//각 매장 별 프로모션 JSON으로 데이터 입력
	$.getJSON('data/promotion.json', function (dataP) {
		let target = $('.store_promotion .container')

		function promotion() {
			let listHTML = '';
			$.each(dataP, (i, item) => {
				listHTML +=
					`<div class="card">
							<img src="${item.image}" class="card-img-top" alt="매장프로모션이미지">
							<div class="card-body">
								<h5 class="card-title"><a href="">${item.promotion_title}</a></h5>
								<p class="card-text">${item.duration}</p>
								
							</div>
							<span class="card-store">${item.store}<span>
						</div>` ;
			});
			target.html(listHTML);
		}
		promotion();
	});


}); //on loaded


