import './Components/SiteCards';
import  SiteCards  from './Components/SiteCards';
import './CSS/Styles.css';
import SearchBar from './Components/SearchBar'
import { react } from '@babel/types';

function SitesPage() {

  return (
  <>
    <SearchBar />
    <SiteCards />
  </>
)

}

export default SitesPage;
