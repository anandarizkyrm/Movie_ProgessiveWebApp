import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

export default function FormSearch() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const onSubmit = (event: any) => {
    if (!keyword) {
      event.preventDefault();
    }
  };

  const onClick = () => {
    if (keyword) {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <form action={`/search/${keyword}`} method="post" onSubmit={onSubmit}>
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button
          className="btn btn-outline-purple"
          type="button"
          onClick={onClick}
          disabled={!keyword}
        >
          <i className="fa fa-search" aria-hidden />
        </button>
      </div>
    </form>
  );
}
