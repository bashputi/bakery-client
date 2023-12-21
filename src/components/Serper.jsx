import { useState } from "react";

const Serper = () => {
  const [domain, setDomain] = useState('');
  const [country, setCountry] = useState('');
  const [keyword, setKeyword] = useState('');
  console.log(keyword, country, domain)
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "f6111cb61d4828964b813b078afc2b656ffd0ad9");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "q": domain,
  "gl": country,
  "k": keyword
  

});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://google.serper.dev/search", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Domain:
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <br />
        <label>
          Keyword:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Serper;




var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "f6111cb61d4828964b813b078afc2b656ffd0ad9");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "q": "apple inc"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://google.serper.dev/search", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
