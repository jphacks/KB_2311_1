import { PAGE_RANGE, SHOW_PAGINATION_COUNT } from "@/constants/const";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

type Props = {
  pageCount: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  handleClicKPageRouter: (count: number) => any
}

export const PagiNation = ({ pageCount, currentPage, handleClicKPageRouter }: Props) => {

  let startPage = Math.max(1, currentPage - PAGE_RANGE);
  let endPage = Math.min(pageCount, currentPage + PAGE_RANGE);

  if (endPage - startPage + 1 < SHOW_PAGINATION_COUNT) {
    if (startPage === 1) {
      endPage = Math.min(pageCount, SHOW_PAGINATION_COUNT);
    } else {
      startPage = Math.max(1, endPage - SHOW_PAGINATION_COUNT + 1);
    }
  }

  // pagination生成
  const liArray = [];
  for(let i = startPage; i < endPage + 1; i++) {
    const li = (
      <li
        key={i} 
        onClick={() => handleClicKPageRouter(i)}
        className={`rounded-full flex items-center justify-center w-8 h-8 ${i === currentPage && 'bg-pink-color text-white'}`}
      >
        {i}
      </li>
    )
    liArray.push(li)
  }

  if (pageCount === 0) return <></>
  return (
    <ul className="flex space-x-4 my-8">
      { liArray }
    </ul>
  )
}