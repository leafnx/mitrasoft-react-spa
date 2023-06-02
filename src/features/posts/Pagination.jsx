import BootstrapPagination from 'react-bootstrap/Pagination'
import style from './postsStyle.module.css'
import { useEffect } from 'react'

export default function Pagination(props) {
  const { postsPerPage, totalPosts, changePage, currentPage } = props

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [currentPage])

  if (pageNumbers.length <= 1) return null
  
  return(
    <BootstrapPagination className={style.pagination}>
      <BootstrapPagination.Prev onClick={() => changePage(currentPage - 1)} />
      {pageNumbers.map(num => (
        <BootstrapPagination.Item
          key={num}
          active={num === currentPage}
          onClick={() => changePage(num)}
        >
          {num}
        </BootstrapPagination.Item>
      ))}
      <BootstrapPagination.Next onClick={() => changePage(currentPage + 1)} />
    </BootstrapPagination>
  )
}