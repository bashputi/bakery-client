import { useState } from 'react';
// import fetchWithBaseUrl from './fetchWithBaseUrl'; // Import your fetch utility




function ScrapingForm() {
  const BASE_URL = 'https://api.scrapingrobot.com/';
  const API_TOKEN = '2d9ee0d2-e1cd-4421-8150-38160d9d1a3a';
  const endpoint = '/status';
  const url = `${BASE_URL}${endpoint}?token=${API_TOKEN}`;


  const [domain, setDomain] = useState('');
  const [country, setCountry] = useState('');
  const [keyword, setKeyword] = useState('');


  const getDataUrl = `https://api.scrapingrobot.com/status?token=${API_TOKEN}&domain=${domain}&countryCode=${country}&term=${keyword}`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const requestData = {
    //   "url": "https://www.scrapingrobot.com/",
    // "module": "HtmlRequestScraper",
    // domain: domain,
    //   countryCode: country,
    //   term: keyword // Include the keyword in the requestData
    // };

    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({module: 'HtmlRequestScraper'}),
      domain: domain,
      countryCode: country,
      term: keyword 
    };
    fetch('https://api.scrapingrobot.com/?token=2d9ee0d2-e1cd-4421-8150-38160d9d1a3a', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


    try {
      const response = await fetch(url, options);
      console.log(response)

      if (response.ok) {
        const options = {method: 'GET', headers: {accept: 'application/json'}};

        fetch(getDataUrl, options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
      } else {
        console.error('Request failed with status:', response.status);
      }




      // Rest of your code remains the same
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
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
  );
}

export default ScrapingForm;


// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.scrapingrobot.com/?url=https://scrapingrobot.com/about-us/&token=2d9ee0d2-e1cd-4421-8150-38160d9d1a3a', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));