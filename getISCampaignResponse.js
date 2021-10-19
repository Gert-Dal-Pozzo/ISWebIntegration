 <script type="text/javascript">     
     var testUserId = "Test_EncContactKey";
		
        (function() {
            var apiUrl = 'https://finecobank.germany-2.evergage.com/api2/event/fineco_staging_it';
			var data = '{"action":"test","source":{"channel":"Web","application":"CE","contentZones":["slider_private"]},"user":{"id":"'+testUserId+'"}}';
			var textResponse = "";
			var headers = new Headers();
			
			headers.append('content-type', 'application/x-www-form-urlencoded');
			var getRequest = apiUrl;
			fetch(getRequest, {method: 'POST',
							   headers: headers,
							   body: "event="+btoa(data)});
        })();
 </script>
