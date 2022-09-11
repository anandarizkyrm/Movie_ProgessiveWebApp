import DiscoverItem from '../../molecules/DiscoverItem';

const GetSixDiscoverMovie = [
  {
    id: 597891,
  },
  {
    id: 619297,
  },
  {
    id: 508943,
  },
  {
    id: 588228,
  },
  {
    id: 637534,
  },
  {
    id: 525660,
  },
];

interface PropsId {
  id: number;
}
export default function DiscoverMovies() {
  return (
    <div className="section-discover container-xxxl mt-5">
      <div className="mb-4">
        <h2 className="fw-bold">Discover</h2>
      </div>
      <div className="discover-wrapper scroll-wrapper pb-5">
        {GetSixDiscoverMovie.map((data: PropsId) => (
          <DiscoverItem key={data.id} id={data.id} />
        ))}
      </div>
    </div>
  );
}
