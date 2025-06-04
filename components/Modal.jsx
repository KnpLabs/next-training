"use client"

import {useRouter} from "next/navigation"

export default function Modal ({ children }) {
  const router = useRouter()

  const onVeilClick = (e) => {
    if (e.target.classList.contains('modal-container')) {
      router.back()
    }
  }

  return (
    <div className="modal-container" onClick={onVeilClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={() => router.back()}>&#10006;</button>
        {children}
      </div>
    </div>
  )
}
