import CategoryMovies from '../components/organisms/CategoryMovies';
import DiscoverMovies from '../components/organisms/DiscoverMovies';
import Movies from '../components/organisms/Movies';
import TrendingMovies from '../components/organisms/TrendingMovies';

export default function index() {
  return (
    <>
      <DiscoverMovies />
      <CategoryMovies />
      <TrendingMovies />
      <Movies />
    </>
  );
}
