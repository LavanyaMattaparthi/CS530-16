
function httpClient()
 {
	this.Post = function(serviceUrl,data,onSuccess,onError)
	{
		try{
			var xhr = new XMLHttpRequest();
			xhr.open('POST',serviceUrl,true);
			//log("url : "+serviceUrl);
			//log("data : "+data);
			xhr.onreadystatechange=function()
			{
				//log(xhr.status +"--"+xhr.readyState);
				if(xhr.status == 200 && xhr.readyState == 4)
				{
					onSuccess(xhr.responseText);
				}
				
				if(xhr.status == 400 || xhr.status == 404)
				{
					onError();
				}
			}
			xhr.onerror=function()
			{
				onError();
			}
			xhr.setRequestHeader('Content-Type', 'application/json') ;
			
			xhr.send(data);
		}
		catch(e)
		{
			log(e);
		}
	};
	
	this.Get = function(serviceUrl,onSuccess,onError)
	{
		try{
			//log("url : "+serviceUrl);
			var xhr = new XMLHttpRequest();
			xhr.open('GET',serviceUrl,true);
			//log(xhr.status);
			xhr.onreadystatechange=function()
			{
				if(xhr.status == 200 && xhr.readyState == 4)
				{
					onSuccess(xhr.responseText);
				}
				if(xhr.status == 400)
				{
					onError();
				}
			}
			xhr.onerror=function()
			{
				onError();
			}
			xhr.send();
		}
		catch(e)
		{
			log(e);
		}
	};
	
 }
 var HttpClient = new httpClient();

 
 function log(msg)
 {
  console.log(msg);
 }
 