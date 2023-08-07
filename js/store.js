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
					`<li class="mix" data-lat="${item.lat}" data-lng="${item.lng}">
							<h2 class="store_name">
								${item.storeName}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<circle cx="12" cy="12" r="11.5" fill="white" stroke="#DEDEDE"/>
									<path d="M8.15926 18.1499C7.82152 18.3267 7.43828 18.0168 7.50652 17.621L8.23276 13.3957L5.15019 10.3978C4.86232 10.1173 5.01195 9.60452 5.39781 9.54914L9.68348 8.9274L11.5944 5.06207C11.7668 4.71368 12.2332 4.71368 12.4056 5.06207L14.3165 8.9274L18.6022 9.54914C18.9881 9.60452 19.1377 10.1173 18.8498 10.3978L15.7672 13.3957L16.4935 17.621C16.5617 18.0168 16.1785 18.3267 15.8407 18.1499L11.9987 16.1346L8.15839 18.1499H8.15926Z" fill="#D6D9DC"/>
								</svg>
							</h2>
							<h3 class="store_address">${item.address}</h3>
							<p class="store_phone">${item.phone}</p>
						</li>` ;
			});

			target.html(listHTML);
			length2 = filteredStore.length;
			console.log(length2);
		}

		//킵
		// $('#filter2').on('change', function () {
		// 	let target = $('#filter2').val();
		// 	findCity('서울특별시', target);
		// 	$('.result_num').text(length2)
		// 	console.log(length2);
		// })


			//강남본점...
		makeMap(37.5234076, 127.0394159);

		$(".search_btn").on('click', function (e) {
			e.preventDefault();
			let target = $('#filter2').val();
			findCity('서울특별시', target);
			$('.result_num').text(length2);

			$('.store_list li').on('click', function () {
				console.log('작동')
				let lat = $(this).attr('data-lat');
				let Lng = $(this).attr('data-lng');
				console.log(lat);
				console.log(Lng);
				makeMap(lat,Lng);


				$('.store_name').on('click', $('.store_name svg'), function () {
					$(this).find('path').css({ fill: '#FFCD6C' })
				})
			})
		})



	});//json end



function makeMap(lat,lng){
	var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var mapOption = { //지도를 생성할 때 필요한 기본 옵션
		center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
		level: 3 //지도의 레벨(확대, 축소 정도)
	};
	var map = new kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴

	var mapTypeControl = new kakao.maps.MapTypeControl();

	// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
	// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
	// map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

	// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
	var zoomControl = new kakao.maps.ZoomControl();
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

	// 마커를 표시할 위치와 title 객체 배열입니다
var positions = [
	{
			title: '카카오',
			latlng: new kakao.maps.LatLng(lat, lng)
	},
	{
			title: '생태연못',
			latlng: new kakao.maps.LatLng(33.450936, 126.569477)
	},
	{
			title: '텃밭',
			latlng: new kakao.maps.LatLng(33.450879, 126.569940)
	},
	{
			title: '근린공원',
			latlng: new kakao.maps.LatLng(33.451393, 126.570738)
	}
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://res.cloudinary.com/dmtdo3wur/image/upload/v1691336758/dxpxevvqeral6uz4scip.png";
for (var i = 0; i < positions.length; i ++) {

	// 마커 이미지의 이미지 크기 입니다
	var imageSize = new kakao.maps.Size(24, 35);

	// 마커 이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
			map: map, // 마커를 표시할 지도
			position: positions[i].latlng, // 마커를 표시할 위치
			title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
			image : markerImage // 마커 이미지
	});
}




// 커스텀 오버레이에 표시할 컨텐츠 입니다
// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
// 별도의 이벤트 메소드를 제공하지 않습니다 
var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            `            카카오 스페이스닷원` + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
            '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
var overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition()       
});

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
kakao.maps.event.addListener(marker, 'click', function() {
    overlay.setMap(map);
});

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
function closeOverlay() {
    overlay.setMap(null);     
}




}








$.getJSON('data/promotion.json', function (dataP) {

	console.log(dataP)
console.log(dataP[0])
	let target = $('.store_promotion .container')
	// let filter= [];
	// let target = $('.store_list');
	// let length2 = 0;
	// let cities = data[0].city;


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
				</div>` ;
		});
		target.html(listHTML);
	}


});
/*

*/








	// $.getJSON('data/promotion.json', function (eventData) {
	// 	console.log(eventData);

	// });//on loaded

})


