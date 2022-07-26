const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '09314f4c9e92e35e8d7d5589ff7d4b2b';
const language = 'en-US';
const port = '3004'
const WEB_URL = 'http://localhost:'+port

const url= window.location.pathname;
const url_piece=url.split("/")
let currentUrl=url_piece[1]
let currentPage=parseInt(url_piece[2])
const currentSection=url_piece[1];
if(currentUrl===''||currentUrl==='now_playing')currentUrl='movie/now_playing';
if(currentUrl==='upcoming')currentUrl='movie/upcoming';
if(currentUrl==='populer')currentUrl='movie/popular';
if(currentUrl==='search')currentUrl='search/movie';

export {BASE_URL, API_KEY, language,currentUrl,currentSection, currentPage, WEB_URL}