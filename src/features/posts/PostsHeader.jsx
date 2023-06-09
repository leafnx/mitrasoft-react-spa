import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Search(props) {
  const { setSearchQuery } = props

  return(
    <Form.Control
      type='text'
      placeholder='Search...'
      className='w-50 me-auto'
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}

function Sort(props) {
  const { sort, setSort } = props

  const setNextSort = () => {
    if (sort === null) setSort('ascending')
    if (sort === 'ascending') setSort('descending')
    if (sort === 'descending') setSort(null)
  }

  return(
    <Button
      className='w-25'
      onClick={setNextSort}
    >
      {
        'Sort ' + (
          sort === 'ascending'
            ? '↑'
            : sort === 'descending'
              ? '↓'
              : '↑↓'
        )
      }
    </Button>
  )
}

export default function PostsHeader(props) {
  const { setSearchQuery, sort, setSort } = props

  return(
    <Stack className='mb-2' direction='horizontal'>
      <Search setSearchQuery={setSearchQuery} />
      <Sort sort={sort} setSort={setSort} />
    </Stack>
  )
}