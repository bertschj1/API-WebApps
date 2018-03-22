function getData(){

	var input = $("#searchtext").val()

	var xhr = $.get("http://api.openweathermap.org/data/2.5/weather?zip="+input+"&appid=[PUT IN YOUR API KEY HERE]&units=imperial");
	xhr.done(function(data) {
			console.log("success got data", data);

			$('.temp').append('<p>Temperature : ' + data.main.temp+ '</p>');
			$('.description').append('<p>Conditions : ' + data.weather[0].description+ '</p>');
	});
}
